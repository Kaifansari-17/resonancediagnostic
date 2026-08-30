import type { CSSProperties } from "react";

/**
 * Signature brand motif echoing the diagnostic waveform in the Kargill mark.
 * Static by default; pass `animated` for a slow, motion-safe pulse.
 */
export function Waveform({
  className,
  animated = false,
  style,
}: {
  className?: string;
  animated?: boolean;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={["rd-waveform", animated ? "is-animated" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      viewBox="0 0 240 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 H70 L82 6 L94 34 L104 20 H240"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}
