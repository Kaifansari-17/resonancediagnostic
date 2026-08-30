import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  center?: boolean;
  level?: "h1" | "h2";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
  level = "h2",
  className,
  children,
}: Props) {
  const Tag = level;
  return (
    <div
      className={["rd-section-head", center ? "is-center" : "", className]
        .filter(Boolean)
        .join(" ")}
      data-reveal
    >
      {eyebrow ? <span className="rd-eyebrow">{eyebrow}</span> : null}
      <Tag className={level === "h1" ? "rd-display" : "rd-title"}>{title}</Tag>
      {copy ? <p className="rd-copy">{copy}</p> : null}
      {children}
    </div>
  );
}
