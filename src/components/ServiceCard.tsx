import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandIcon } from "@/components/Icon";
import { useTilt } from "@/hooks/useTilt";
import type { IconName } from "@/data/site";

type Props = {
  id?: string;
  number?: string;
  title: string;
  description: string;
  icon: IconName;
  alt?: boolean;
  cta?: { label: string; to: string; hash?: string };
  delay?: number;
};

export function ServiceCard({ id, number, title, description, icon, alt, cta, delay = 0 }: Props) {
  const tilt = useTilt<HTMLElement>();

  return (
    <article
      id={id}
      className="rd-card"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      {...tilt}
    >
      {number ? <span className="rd-card-num">{number}</span> : null}
      <span className={`rd-card-icon${alt ? " is-alt" : ""}`}>
        <BrandIcon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      {cta ? (
        <div className="rd-card-arrow">
          <Link to={cta.to} {...(cta.hash ? { hash: cta.hash } : {})} className="rd-link">
            {cta.label} <ArrowRight size={16} />
          </Link>
        </div>
      ) : null}
    </article>
  );
}
