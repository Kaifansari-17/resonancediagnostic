/**
 * The vertical divider from the Resonance logo, reused as a small recurring
 * brand motif beside wordmarks and headings.
 */
export function VerticalBrandLine({ className }: { className?: string }) {
  return <span className={["rd-vline", className].filter(Boolean).join(" ")} aria-hidden="true" />;
}
