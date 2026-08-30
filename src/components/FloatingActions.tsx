import { Link } from "@tanstack/react-router";
import { CalendarCheck2, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="rd-floating" aria-label="Quick actions">
      <a className="rd-float" href={contact.phoneHref} aria-label="Call Resonance Diagnostic">
        <Phone size={18} />
      </a>
      <a
        className="rd-float is-wa"
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
      </a>
      <Link className="rd-float is-book" to="/contact" hash="booking" aria-label="Book a test">
        <CalendarCheck2 size={18} />
      </Link>
    </div>
  );
}
