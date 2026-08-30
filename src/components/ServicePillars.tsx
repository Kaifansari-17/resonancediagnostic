import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BrandIcon } from "@/components/Icon";
import { servicePillars } from "@/data/site";

/**
 * Quick-jump navigation between the four service pillars further down the
 * page. Content stays fully visible in its own section (see the page's
 * visual rhythm) — clicking/scrolling here just highlights the active one.
 */
export function ServicePillars() {
  const [active, setActive] = useState(servicePillars[0]?.id ?? "");
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = servicePillars
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          setActive(top.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="rd-pillars" aria-label="Service pillars" ref={rootRef as never}>
      <ul className="rd-pillars-track">
        {servicePillars.map((p, i) => {
          const isActive = active === p.id;
          return (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                className={`rd-pillar${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "true" : undefined}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="rd-pillar-num">{p.step}</span>
                <span className="rd-pillar-icon">
                  <BrandIcon name={p.icon} size={22} />
                </span>
                <span className="rd-pillar-title">{p.title}</span>
                <span className="rd-pillar-desc">{p.description}</span>
                <span className="rd-pillar-arrow">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
