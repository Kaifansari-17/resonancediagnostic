import { useEffect, useRef } from "react";
import {
  Activity,
  FileText,
  FlaskConical,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { journey as defaultJourney } from "@/data/site";
import { loadGsap, prefersReducedMotion } from "@/lib/motion";

const defaultIcons: LucideIcon[] = [FlaskConical, FileText, ShieldCheck, Activity, Lightbulb];

type JourneyStage = { step: string; title: string; description: string };

/**
 * Horizontal journey on desktop, vertical timeline on mobile.
 * The connector line and each stage animate in with GSAP ScrollTrigger.
 * Defaults to the RESEARCH → DOCUMENTATION → VALIDATION → DIAGNOSTICS →
 * INSIGHT stages, but can be reused for any step sequence via `stages` / `icons`.
 */
export function DiagnosticJourney({
  stages = defaultJourney,
  icons = defaultIcons,
}: {
  stages?: JourneyStage[];
  icons?: LucideIcon[];
}) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    let kill = () => {};
    let cancelled = false;

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !root.current) return;
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 72%", end: "bottom 65%", scrub: 0.6 },
        });
        tl.fromTo(
          ".rd-journey-progress",
          { scaleX: 0, scaleY: 0 },
          { scaleX: 1, scaleY: 1, ease: "none" },
          0,
        );

        gsap.utils.toArray<HTMLElement>(".rd-journey-stage").forEach((stage, i) => {
          gsap.fromTo(
            stage,
            { autoAlpha: 0, y: 34 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: { trigger: stage, start: "top 88%" },
            },
          );
        });

        ScrollTrigger.refresh();
      }, root);
      kill = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      kill();
    };
  }, []);

  return (
    <div className="rd-journey" ref={root}>
      <div className="rd-journey-line" aria-hidden="true">
        <span className="rd-journey-progress" />
      </div>
      <ol className="rd-journey-track" style={{ ["--rd-journey-cols" as string]: stages.length }}>
        {stages.map((s, i) => {
          const Icon = icons[i] ?? Activity;
          return (
            <li key={s.step} className="rd-journey-stage">
              <span className="rd-journey-dot" aria-hidden="true">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="rd-journey-num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
