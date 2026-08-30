import { Link } from "@tanstack/react-router";
import { TestTube, Users } from "lucide-react";

type Props = {
  tag: string;
  title: string;
  description: string;
  tests: string;
  audience: string;
  delay?: number;
};

export function PackageCard({ tag, title, description, tests, audience, delay = 0 }: Props) {
  return (
    <article
      className="rd-card rd-package"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <span className="rd-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="rd-package-foot">
        <div>
          <small>Starting</small>
          <span className="rd-price">[PRICE]</span>
        </div>
        <Link to="/contact" hash="booking" className="rd-btn rd-btn-primary rd-btn-sm">
          Book Now
        </Link>
      </div>

      <div className="rd-package-meta">
        <span>
          <TestTube size={14} aria-hidden="true" /> {tests}
        </span>
        <span>
          <Users size={14} aria-hidden="true" /> {audience}
        </span>
      </div>
    </article>
  );
}
