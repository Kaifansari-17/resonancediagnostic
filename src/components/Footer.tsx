import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoOnDark } from "@/components/LogoOnDark";
import { SocialGlyph } from "@/components/Icon";
import { Waveform } from "@/components/Waveform";
import { brand, contact, nav, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="rd-footer rd-texture-grid">
      <div className="rd-container rd-footer-grid">
        <div>
          <div className="rd-footer-brand">
            <LogoOnDark className="rd-footer-logo" />
            <Waveform className="rd-footer-waveform" animated />
          </div>
          <p className="rd-footer-blurb">{brand.footerBlurb}</p>
          <div className="rd-social">
            {contact.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <SocialGlyph name={s.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="rd-footer-title">Website</h2>
          <ul className="rd-footer-links">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="rd-footer-title">Services</h2>
          <ul className="rd-footer-links">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" hash={s.id}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="rd-footer-title">Contact</h2>
          <ul className="rd-footer-links is-contact">
            <li>
              <Phone size={15} aria-hidden="true" /> <span>Phone: {contact.phone}</span>
            </li>
            <li>
              <Mail size={15} aria-hidden="true" /> <span>Email: {contact.email}</span>
            </li>
            <li>
              <MapPin size={15} aria-hidden="true" /> <span>Address: {contact.address}</span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="rd-btn rd-btn-light rd-btn-sm"
            style={{ marginTop: "1rem" }}
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="rd-footer-bottom">
        <div className="rd-container rd-footer-bottom-inner">
          <span>{brand.copyright}</span>
          <span className="rd-footer-legal">
            <Link to="/contact" hash="faq">
              FAQ
            </Link>{" "}
            ·{" "}
            <Link to="/contact" hash="terms">
              Terms &amp; Conditions
            </Link>{" "}
            ·{" "}
            <Link to="/contact" hash="privacy">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
