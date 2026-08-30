import type * as ThreeNS from "three";
import { useEffect, useRef } from "react";
import { isSmallScreen, prefersReducedMotion } from "@/lib/motion";

/**
 * Three.js medical-tech visual: a DNA double helix, orbital rings and drifting
 * molecular particles. Scroll progress subtly shifts the scene through the
 * DNA → Sample → Analysis → Results stages (rotation, spread and glow).
 * Mobile gets a reduced particle/segment count instead of losing the visual.
 */
export default function MolecularScene({ stage = 0 }: { stage?: number }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef(stage);
  stageRef.current = stage;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let frame = 0;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed || !mount) return;

      const small = isSmallScreen();
      const reduced = prefersReducedMotion();
      const helixCount = small ? 30 : 52;
      const particleCount = small ? 260 : 700;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
      camera.position.set(0, 0, 15);

      const renderer = new THREE.WebGLRenderer({
        antialias: !small,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);
      renderer.domElement.setAttribute("aria-hidden", "true");

      const group = new THREE.Group();
      scene.add(group);

      // --- DNA double helix -------------------------------------------------
      const helix = new THREE.Group();
      group.add(helix);
      const sphereGeo = new THREE.SphereGeometry(0.17, small ? 10 : 16, small ? 10 : 16);
      const matA = new THREE.MeshBasicMaterial({ color: 0x1c9c14 });
      const matB = new THREE.MeshBasicMaterial({ color: 0x123a8c });
      const rungMat = new THREE.LineBasicMaterial({
        color: 0x46b83f,
        transparent: true,
        opacity: 0.35,
      });

      const nodes: { mesh: ThreeNS.Mesh; base: ThreeNS.Vector3 }[] = [];
      for (let i = 0; i < helixCount; i++) {
        const t = (i / helixCount) * Math.PI * 5;
        const y = (i / helixCount) * 13 - 6.5;
        for (const sign of [1, -1]) {
          const mesh = new THREE.Mesh(sphereGeo, sign === 1 ? matA : matB);
          const base = new THREE.Vector3(Math.cos(t) * 1.9 * sign, y, Math.sin(t) * 1.9 * sign);
          mesh.position.copy(base);
          helix.add(mesh);
          nodes.push({ mesh, base });
        }
        if (i % 2 === 0) {
          const geo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(Math.cos(t) * 1.9, y, Math.sin(t) * 1.9),
            new THREE.Vector3(-Math.cos(t) * 1.9, y, -Math.sin(t) * 1.9),
          ]);
          helix.add(new THREE.Line(geo, rungMat));
        }
      }

      // --- Orbital rings ----------------------------------------------------
      const rings: ThreeNS.Mesh[] = [];
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x123a8c,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
      });
      [4.6, 6.1, 7.4].forEach((r, i) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(r, 0.012, 3, small ? 60 : 120),
          ringMat,
        );
        ring.rotation.x = Math.PI / 2.3 + i * 0.22;
        ring.rotation.y = i * 0.5;
        group.add(ring);
        rings.push(ring);
      });

      // --- Molecular particles ---------------------------------------------
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 22;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0x7fd99a,
        size: small ? 0.07 : 0.055,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      });
      const points = new THREE.Points(pGeo, pMat);
      group.add(points);

      // --- Sizing -----------------------------------------------------------
      const resize = () => {
        const w = mount.clientWidth || 1;
        const h = mount.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(mount);

      // --- Pointer parallax -------------------------------------------------
      const pointer = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      if (!small && !reduced) window.addEventListener("pointermove", onPointer, { passive: true });

      // --- Loop -------------------------------------------------------------
      let visible = true;
      const vo = new IntersectionObserver((entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      });
      vo.observe(mount);

      const startTime = performance.now();
      let smoothStage = 0;

      const render = () => {
        frame = requestAnimationFrame(render);
        if (!visible) return;

        const t = (performance.now() - startTime) / 1000;
        smoothStage += (stageRef.current - smoothStage) * 0.045;

        if (!reduced) {
          helix.rotation.y = t * 0.28 + smoothStage * 1.5;
          helix.position.y = Math.sin(t * 0.4) * 0.25 - smoothStage * 0.6;
          helix.scale.setScalar(1 - smoothStage * 0.16);

          rings.forEach((ring, i) => {
            ring.rotation.z = t * (0.05 + i * 0.03) + smoothStage * 0.7;
            (ring.material as ThreeNS.MeshBasicMaterial).opacity =
              0.14 + smoothStage * 0.16 + i * 0.02;
          });

          points.rotation.y = -t * 0.035;
          pMat.opacity = 0.4 + smoothStage * 0.3;

          nodes.forEach(({ mesh, base }, i) => {
            const spread = 1 + smoothStage * 0.5;
            const wobble = Math.sin(t * 1.4 + i * 0.35) * 0.06;
            mesh.position.set(base.x * spread + wobble, base.y, base.z * spread);
          });

          group.rotation.x += (pointer.y * 0.12 - group.rotation.x) * 0.05;
          group.rotation.y += (pointer.x * 0.18 - group.rotation.y) * 0.05;
        }

        renderer.render(scene, camera);
      };
      render();

      cleanup = () => {
        cancelAnimationFrame(frame);
        ro.disconnect();
        vo.disconnect();
        window.removeEventListener("pointermove", onPointer);
        scene.traverse((obj) => {
          const anyObj = obj as unknown as {
            geometry?: { dispose(): void };
            material?: { dispose(): void };
          };
          anyObj.geometry?.dispose?.();
          anyObj.material?.dispose?.();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div className="rd-three" ref={mountRef} role="presentation" />;
}
