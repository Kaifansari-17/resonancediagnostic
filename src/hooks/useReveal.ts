import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Reveals every [data-reveal] element inside the current page once it scrolls
 * into view. Cheap (IntersectionObserver + CSS transform/opacity) and disabled
 * entirely when the visitor prefers reduced motion.
 *
 * Also skipped when the page loads with a URL hash (e.g. /services#research):
 * the browser's own hash-jump scroll (combined with `scroll-behavior: smooth`)
 * animates straight past elements above the target, and the observer can
 * inconsistently catch some mid-transit and miss others — leaving them stuck
 * at opacity 0 depending on scroll timing. Landing on an anchor isn't a fresh
 * top-of-page visit anyway, so the entrance choreography isn't meaningful —
 * everything is simply shown immediately instead.
 *
 * Revealed state is tracked via a `data-revealed` attribute rather than a
 * class. Some `data-reveal` elements (e.g. the Services page's pillar nav)
 * also have a React-controlled `className` that changes independently (an
 * `is-active` scroll-spy state) — if revealing were done via
 * `classList.add`, the next unrelated re-render would reset `className` to
 * whatever JSX computes and silently wipe it back to invisible. A plain
 * attribute is never touched by React unless the JSX itself renders it.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    if (prefersReducedMotion() || window.location.hash) {
      nodes.forEach((n) => n.setAttribute("data-revealed", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
