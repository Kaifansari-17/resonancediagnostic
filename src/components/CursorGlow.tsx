import { useEffect, useRef } from "react";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

/** Ambient cursor glow — desktop, motion-safe only. Never a custom cursor. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isTouchDevice() || prefersReducedMotion()) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add("is-on");
    };
    const onLeave = () => el.classList.remove("is-on");

    const loop = () => {
      cx += (x - cx) * 0.09;
      cy += (y - cy) * 0.09;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    loop();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="rd-cursor-glow" ref={ref} aria-hidden="true" />;
}
