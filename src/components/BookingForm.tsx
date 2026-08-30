import { useEffect, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { contact, serviceOptions } from "@/data/site";

const WHATSAPP_NUMBER = "919205371456";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const empty: Fields = { name: "", phone: "", email: "", service: "", date: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[\d\s+()-]{8,}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.service) errors.service = "Please select a service.";
  return errors;
}

function buildWhatsAppMessage(values: Fields) {
  const messageLines = [
    "Hello Resonance Diagnostic,",
    "",
    "I would like to book a diagnostic service.",
    "",
    `Full Name: ${values.name.trim()}`,
    `Phone Number: ${values.phone.trim()}`,
  ];

  const email = values.email.trim();
  if (email) messageLines.push(`Email Address: ${email}`);

  const preferredDate = values.date.trim();
  if (preferredDate) messageLines.push(`Preferred Date: ${preferredDate}`);

  messageLines.push(`Service Required: ${values.service}`);

  const userMessage = values.message.replace(/\r\n/g, "\n").trim();
  if (userMessage) messageLines.push(`Message: ${userMessage}`);

  messageLines.push("", "Thank you.");

  return messageLines.join("\n");
}

/**
 * Booking enquiry form. Submits by opening a WhatsApp chat with the Resonance
 * Diagnostic team, preserving the user's entered values and validating before
 * sending the enquiry.
 */
export function BookingForm({ presetService }: { presetService?: string | null }) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (presetService) setValues((v) => ({ ...v, service: presetService }));
  }, [presetService]);

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) return;

    const whatsappMessage = buildWhatsAppMessage(values);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field = (key: keyof Fields, label: string, node: React.ReactNode) => (
    <div className={`rd-field${errors[key] ? " has-error" : ""}`}>
      <label htmlFor={`bk-${key}`}>{label}</label>
      {node}
      {errors[key] ? (
        <span className="rd-error" role="alert">
          {errors[key]}
        </span>
      ) : null}
    </div>
  );

  return (
    <form id="booking-form" className="rd-form" onSubmit={onSubmit} noValidate data-reveal>
      {sent ? (
        <p className="rd-success" role="status">
          <CheckCircle2 size={18} aria-hidden="true" />
          Thank you! Your WhatsApp chat is opening now. If it does not open, contact us directly at 
          {contact.phone}.
        </p>
      ) : null}

      <div className="rd-form-row">
        {field(
          "name",
          "Full name *",
          <input
            id="bk-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            placeholder="Your name"
          />,
        )}
        {field(
          "phone",
          "Phone number *",
          <input
            id="bk-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            placeholder="Your contact number"
          />,
        )}
      </div>

      <div className="rd-form-row">
        {field(
          "email",
          "Email address",
          <input
            id="bk-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
          />,
        )}
        {field(
          "date",
          "Preferred date",
          <input id="bk-date" name="date" type="date" value={values.date} onChange={set("date")} />,
        )}
      </div>

      {field(
        "service",
        "Service required *",
        <select
          id="bk-service"
          name="service"
          value={values.service}
          onChange={set("service")}
          aria-invalid={!!errors.service}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>,
      )}

      {field(
        "message",
        values.service === "Research / Documentation / Validation Enquiry"
          ? "Please describe your requirement *"
          : "Message",
        <textarea
          id="bk-message"
          name="message"
          value={values.message}
          onChange={set("message")}
          placeholder={
            values.service === "Research / Documentation / Validation Enquiry"
              ? "Tell us about your research, documentation or validation requirement."
              : "Tests required, preferred time, address for home collection, or any questions."
          }
        />,
      )}

      <Button type="submit">
        Submit Enquiry <Send size={16} />
      </Button>
      <p className="rd-note">
        Prefer to talk? Call or WhatsApp us at {contact.phone} for urgent requirements.
      </p>
    </form>
  );
}
