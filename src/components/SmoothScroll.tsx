import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Lenis smooth scroll, kept in sync with GSAP ScrollTrigger.
 * Disabled entirely for visitors who prefer reduced motion.
 */
export function SmoothScroll() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    let destroy = () => {};
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { loadGsap }] = await Promise.all([
        import("lenis"),
        import("@/lib/motion"),
      ]);
      if (cancelled) return;

      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.4 });
      const { ScrollTrigger } = await loadGsap();
      if (cancelled) {
        lenis.destroy();
        return;
      }

      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      destroy = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      destroy();
    };
  }, []);

  // Scroll to top on route change, or to the hash target when present.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
