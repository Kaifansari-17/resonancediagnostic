import { Link } from "@tanstack/react-router";
import { useRef, type ReactNode } from "react";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

type Variant = "primary" | "ghost" | "light";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "rd-btn-primary",
  ghost: "rd-btn-ghost",
  light: "rd-btn-light",
};

/** Subtle magnetic pull on pointer move (desktop, motion-safe only). */
function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || isTouchDevice() || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `translate3d(${x * 7}px, ${y * 6 - 2}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return { ref, onPointerMove: onMove, onPointerLeave: onLeave };
}

function classes(variant: Variant, size: "md" | "sm", className?: string) {
  return ["rd-btn", variantClass[variant], size === "sm" ? "rd-btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");
}

export function ButtonLink({
  to,
  hash,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: BaseProps & { to: string; hash?: string; ariaLabel?: string }) {
  const magnetic = useMagnetic<HTMLAnchorElement>();
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
      className={classes(variant, size, className)}
      ref={magnetic.ref}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: BaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const magnetic = useMagnetic<HTMLButtonElement>();
  return (
    <button
      className={classes(variant, size, className)}
      ref={magnetic.ref}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      {...rest}
    >
      {children}
    </button>
  );
}
