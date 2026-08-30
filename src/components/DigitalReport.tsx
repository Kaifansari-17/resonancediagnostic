import { useEffect, useRef } from "react";
import { Activity, CheckCircle2, FileText, ScanLine, TestTube, UserRound } from "lucide-react";
import { loadGsap, prefersReducedMotion } from "@/lib/motion";

const flow = [
  { Icon: UserRound, label: "Patient Data" },
  { Icon: TestTube, label: "Laboratory Analysis" },
  { Icon: Activity, label: "Biomarkers" },
  { Icon: CheckCircle2, label: "Results" },
  { Icon: FileText, label: "Digital Report" },
];

/** Sample values for the illustrative report preview below — not real results. */
const biomarkers = [
  { name: "Haemoglobin", value: "13.8 g/dL", fill: 72 },
  { name: "WBC Count", value: "7,100 /µL", fill: 58 },
  { name: "Glucose", value: "96 mg/dL", fill: 64 },
  { name: "Platelets", value: "290 K/µL", fill: 81 },
];

export function DigitalReport() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    let kill = () => {};
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !root.current) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".rd-report-step",
          { autoAlpha: 0, x: -18 },
          {
            autoAlpha: 1,
            x: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 78%" },
          },
        );
        gsap.fromTo(
          ".rd-bar-fill",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            stagger: 0.14,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 70%" },
          },
        );
        gsap.fromTo(
          ".rd-report-card",
          { autoAlpha: 0, y: 28, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          },
        );
      }, root);
      kill = () => ctx.revert();
    });

    return () => {
      cancelled = true;
      kill();
    };
  }, []);

  return (
    <div className="rd-report" ref={root}>
      <ol className="rd-report-flow">
        {flow.map(({ Icon, label }) => (
          <li key={label} className="rd-report-step">
            <span className="rd-report-step-icon">
              <Icon size={16} aria-hidden="true" />
            </span>
            {label}
          </li>
        ))}
      </ol>

      <div className="rd-report-card">
        <span className="rd-report-scan" aria-hidden="true" />
        <header className="rd-report-head">
          <div>
            <small>Digital diagnostic report</small>
            <strong>Sample Report Preview</strong>
          </div>
          <span className="rd-report-status">
            <ScanLine size={14} aria-hidden="true" /> Analysis complete
          </span>
        </header>

        <div className="rd-report-bars">
          {biomarkers.map((b) => (
            <div key={b.name} className="rd-bar-row">
              <span className="rd-bar-label">{b.name}</span>
              <span className="rd-bar">
                <span className="rd-bar-fill" style={{ width: `${b.fill}%` }} />
              </span>
              <span className="rd-bar-value">{b.value}</span>
            </div>
          ))}
        </div>

        <div className="rd-report-chart" aria-hidden="true">
          {[38, 62, 48, 74, 56, 82, 66, 90].map((h, i) => (
            <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>

        <p className="rd-note">
          Sample report shown for illustration. Your actual report layout may vary based on the
          tests ordered.
        </p>
      </div>
    </div>
  );
}
