import { useEffect, useState } from "react";
import { LogoOnDark } from "@/components/LogoOnDark";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * A brief, brand-driven initial reveal — vertical line, then waveform, then
 * the actual logo (wiped in top-to-bottom so RESONANCE settles before the
 * diagnostic / Kargill lockup), held fully visible, then a clean fade — gone
 * in ~2s. Runs once on first document load only (mounted in RootComponent, which
 * doesn't remount on client-side route changes). Skipped entirely under
 * prefers-reduced-motion.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPhase("gone");
      return;
    }
    // Logo reveal finishes at 1.75s (see CSS); hold it fully visible before leaving.
    const leave = window.setTimeout(() => setPhase("leaving"), 2050);
    const gone = window.setTimeout(() => setPhase("gone"), 2350);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`rd-preloader${phase === "leaving" ? " is-leaving" : ""}`} aria-hidden="true">
      <span className="rd-preloader-line">
        <span className="rd-preloader-line-dot" />
      </span>
      <svg className="rd-preloader-wave" viewBox="0 0 240 40" fill="none">
        <circle className="rd-preloader-wave-dot" cx="4" cy="20" r="3" fill="currentColor" />
        <path
          d="M4 20 H85 L95 16 L105 20 L115 26 L125 2 L135 36 L145 20 H236"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
        />
        <circle className="rd-preloader-wave-dot" cx="236" cy="20" r="3" fill="currentColor" />
      </svg>
      <span className="rd-preloader-logo-wrap">
        <LogoOnDark className="rd-preloader-logo" />
      </span>
    </div>
  );
}
