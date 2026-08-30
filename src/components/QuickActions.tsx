import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck2, FileText, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";

/**
 * Four premium quick-action cards. "Get Your Report" has no real backing
 * portal yet, so it's shown as a disabled "Coming Soon" card rather than a
 * fake working link.
 */
export function QuickActions() {
  return (
    <div className="rd-grid rd-quick-actions-grid">
      <Link to="/contact" hash="booking" className="rd-card rd-quick-action" data-reveal>
        <span className="rd-card-icon">
          <CalendarCheck2 size={22} aria-hidden="true" />
        </span>
        <h3>Book a Test</h3>
        <p>Schedule or enquire about a diagnostic service.</p>
        <span className="rd-card-arrow rd-link">
          Get started <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>

      <a
        href={contact.phoneHref}
        className="rd-card rd-quick-action"
        data-reveal
        style={{ ["--reveal-delay" as string]: "70ms" }}
      >
        <span className="rd-card-icon is-alt">
          <Phone size={22} aria-hidden="true" />
        </span>
        <h3>Call Us</h3>
        <p>Speak with the Resonance team.</p>
        <span className="rd-card-arrow rd-link">
          {contact.phone} <ArrowRight size={16} aria-hidden="true" />
        </span>
      </a>

      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        className="rd-card rd-quick-action"
        data-reveal
        style={{ ["--reveal-delay" as string]: "140ms" }}
      >
        <span className="rd-card-icon">
          <MessageCircle size={22} aria-hidden="true" />
        </span>
        <h3>WhatsApp</h3>
        <p>Connect with our team on WhatsApp.</p>
        <span className="rd-card-arrow rd-link">
          Chat now <ArrowRight size={16} aria-hidden="true" />
        </span>
      </a>

      <div
        className="rd-card rd-quick-action is-disabled"
        data-reveal
        style={{ ["--reveal-delay" as string]: "210ms" }}
        aria-disabled="true"
      >
        <span className="rd-card-icon is-alt">
          <FileText size={22} aria-hidden="true" />
        </span>
        <h3>Get Your Report</h3>
        <p>Digital report access is coming soon.</p>
        <span className="rd-card-arrow">
          <span className="rd-tag">Coming Soon</span>
        </span>
      </div>
    </div>
  );
}
