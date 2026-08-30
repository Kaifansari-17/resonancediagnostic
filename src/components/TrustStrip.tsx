import { BrandIcon } from "@/components/Icon";
import { trustStrip } from "@/data/site";

/** Slim value strip directly beneath the hero. */
export function TrustStrip() {
  return (
    <ul className="rd-trust-strip">
      {trustStrip.map((item, i) => (
        <li key={item.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
          <BrandIcon name={item.icon} size={19} />
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
