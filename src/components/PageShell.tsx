import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

/** Wraps every page body: reveal-on-scroll wiring + page transition. */
export function PageShell({ children, name }: { children: ReactNode; name: string }) {
  useReveal([name]);
  return (
    <div className="rd-page" key={name}>
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
}) {
  return (
    <section className="rd-page-hero rd-texture-grid">
      <span className="rd-page-hero-ring" aria-hidden="true" />
      <div className="rd-container">
        <span className="rd-eyebrow rd-fade-up">{eyebrow}</span>
        <h1 className="rd-display rd-page-hero-title">{title}</h1>
        <p className="rd-copy rd-fade-up" style={{ ["--line-delay" as string]: "260ms" }}>
          {copy}
        </p>
      </div>
    </section>
  );
}
