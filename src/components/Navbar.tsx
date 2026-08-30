import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/resonance-logo.jpg";
import { nav } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`rd-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="rd-container rd-nav-inner">
        <Link to="/" className="rd-nav-brand" aria-label="Resonance Diagnostic — home">
          <img
            src={logo}
            alt="Resonance Diagnostic by Kargill Healthcare LLP"
            width={190}
            height={66}
          />
        </Link>

        <nav className="rd-nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rd-nav-link"
              activeProps={{ className: "rd-nav-link is-active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="rd-nav-actions">
          <Link to="/contact" hash="booking" className="rd-btn rd-btn-primary rd-btn-sm rd-nav-cta">
            Book a Test <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            className="rd-burger"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="rd-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="rd-mobile-nav" className={`rd-mobile-panel${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="rd-mobile-link"
              style={{ ["--line-delay" as string]: `${60 + i * 55}ms` }}
              activeProps={{ className: "rd-mobile-link is-active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" hash="booking" className="rd-btn rd-btn-primary rd-mobile-cta">
          Book a Test <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}
