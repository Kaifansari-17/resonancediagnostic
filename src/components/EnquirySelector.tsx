import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { enquiryTypes } from "@/data/site";

/**
 * "How Can We Help?" quick-select. Picking an option preselects the booking
 * form's service field (where applicable) and scrolls the visitor straight
 * to it — no separate multi-step form to fill in first.
 */
export function EnquirySelector({ onSelect }: { onSelect: (serviceValue: string | null) => void }) {
  const [active, setActive] = useState<string | null>(null);

  const handle = (id: string, serviceValue: string | null) => {
    setActive(id);
    onSelect(serviceValue);
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="rd-enquiry-grid" role="group" aria-label="How can we help?">
      {enquiryTypes.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`rd-enquiry-option${active === t.id ? " is-active" : ""}`}
          onClick={() => handle(t.id, t.serviceValue)}
        >
          <span>{t.label}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
