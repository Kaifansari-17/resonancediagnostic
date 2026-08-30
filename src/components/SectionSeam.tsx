import { Waveform } from "@/components/Waveform";

/**
 * Signature transition marker placed at the seam between two sections
 * (typically a dark → light or light → dark handoff). A small resonance
 * waveform straddles the boundary instead of a generic decorative wave
 * shape — it's the same motif used in the hero, footer and CTAs.
 */
export function SectionSeam() {
  return (
    <div className="rd-seam" aria-hidden="true">
      <Waveform className="rd-seam-wave" />
    </div>
  );
}
