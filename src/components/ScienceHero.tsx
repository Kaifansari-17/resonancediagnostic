import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Waveform } from "@/components/Waveform";

type CTA = { label: string; to: string; hash?: string };

/**
 * Dark, scientific page hero — CSS/SVG only, no 3D canvas. Shared by the
 * Services and About pages (the Home hero has its own MolecularScene visual).
 */
export function ScienceHero({
  eyebrow,
  title,
  copy,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  primaryCta: CTA;
  secondaryCta: CTA;
}) {
  return (
    <section className="rd-services-hero rd-section is-dark rd-texture-grid">
      <span className="rd-services-hero-glow" aria-hidden="true" />
      <span className="rd-services-hero-dotgrid" aria-hidden="true" />
      <div className="rd-container rd-services-hero-inner">
        <span className="rd-eyebrow rd-fade-up">{eyebrow}</span>
        <h1 className="rd-display rd-fade-up" style={{ ["--line-delay" as string]: "120ms" }}>
          {title}
        </h1>
        <p className="rd-copy rd-fade-up" style={{ ["--line-delay" as string]: "220ms" }}>
          {copy}
        </p>
        <div className="rd-actions rd-fade-up" style={{ ["--line-delay" as string]: "320ms" }}>
          <ButtonLink to={primaryCta.to} {...(primaryCta.hash ? { hash: primaryCta.hash } : {})}>
            {primaryCta.label} <ArrowRight size={17} />
          </ButtonLink>
          <ButtonLink
            to={secondaryCta.to}
            {...(secondaryCta.hash ? { hash: secondaryCta.hash } : {})}
            variant="light"
          >
            {secondaryCta.label}
          </ButtonLink>
        </div>
        <Waveform className="rd-services-hero-waveform" animated />
      </div>
    </section>
  );
}
