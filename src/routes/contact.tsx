import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ScienceHero } from "@/components/ScienceHero";
import { SectionSeam } from "@/components/SectionSeam";
import { QuickActions } from "@/components/QuickActions";
import { BookingForm } from "@/components/BookingForm";
import { EnquirySelector } from "@/components/EnquirySelector";
import { DiagnosticJourney } from "@/components/DiagnosticJourney";
import { ServiceCard } from "@/components/ServiceCard";
import { Waveform } from "@/components/Waveform";
import { FAQ } from "@/components/FAQ";
import { ButtonLink } from "@/components/Button";
import { contact, contactFaqs, howItWorks, patientJourney, servicePillars } from "@/data/site";

const scientificPillars = servicePillars.filter((p) => p.id !== "diagnostics");
const homeCollectionSteps = howItWorks.slice(0, 4);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Test | Resonance Diagnostic" },
      {
        name: "description",
        content:
          "Book a diagnostic service, send an enquiry, or discuss a research, documentation or validation requirement with Resonance Diagnostic.",
      },
      { property: "og:title", content: "Contact & Book a Test | Resonance Diagnostic" },
      {
        property: "og:description",
        content:
          "Reach the Resonance Diagnostic team for bookings, enquiries and scientific requirements.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [presetService, setPresetService] = useState<string | null>(null);

  return (
    <PageShell name="contact">
      <ScienceHero
        eyebrow="Get in Touch"
        title="Let's Connect."
        copy="Whether you're looking for a diagnostic service or have a research, documentation or validation requirement, connect with the Resonance team."
        primaryCta={{ label: "Book a Test", to: "/contact", hash: "booking" }}
        secondaryCta={{ label: "Send an Enquiry", to: "/contact", hash: "enquiry" }}
      />
      <SectionSeam />

      {/* Quick actions */}
      <section className="rd-section">
        <div className="rd-container">
          <QuickActions />
        </div>
      </section>

      {/* Book a test */}
      <section className="rd-section is-ice" id="booking">
        <div className="rd-container rd-split">
          <div data-reveal>
            <SectionHeading
              eyebrow="Booking"
              title="Book a Diagnostic Service"
              copy="Tell us what you need and our team can assist you with the next step."
            />
            <div className="rd-tech-visual" style={{ marginTop: "2rem", aspectRatio: "4 / 3" }}>
              <Waveform animated />
            </div>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <BookingForm presetService={presetService} />
          </div>
        </div>
      </section>

      {/* How can we help */}
      <section className="rd-section" id="enquiry">
        <div className="rd-container" style={{ maxWidth: 900 }}>
          <SectionHeading center eyebrow="Enquiries" title="How Can We Help?" />
          <EnquirySelector onSelect={setPresetService} />
        </div>
      </section>

      {/* Visit Resonance */}
      <section className="rd-section is-ice">
        <div className="rd-container rd-contact-grid">
          <div>
            <SectionHeading eyebrow="Visit Resonance" title="Contact details" />
            <ul className="rd-contact-list">
              {[
                { Icon: Phone, title: "Phone", value: contact.phone, href: contact.phoneHref },
                {
                  Icon: Mail,
                  title: "Email",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                { Icon: MapPin, title: "Address", value: contact.address },
                { Icon: Clock, title: "Working hours", value: contact.hours },
              ].map(({ Icon, title, value, href }, i) => (
                <li
                  key={title}
                  className="rd-contact-item"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <span className="rd-card-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rd-map-frame"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <iframe
              title="Kargill Healthcare Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5344523889994!2d73.082430474981!3d19.21552578201803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf004a88a753%3A0xc239054f052973b7!2sSamruddhi%20CHS%20Ltd.%20-%20Project%20by%20Aditya%20Buildcon!5e0!3m2!1sen!2sin!4v1788029719048!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* Scientific requirement */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Scientific Enquiries"
            title="Have a Scientific Requirement?"
            copy="Discuss research, documentation or validation requirements with the Resonance team."
          />
          <div className="rd-grid">
            {scientificPillars.map((p, i) => (
              <ServiceCard
                key={p.id}
                number={p.step}
                title={p.title}
                description={p.description}
                icon={p.icon}
                delay={i * 70}
              />
            ))}
          </div>
          <div className="rd-actions" style={{ justifyContent: "center", marginTop: "2.2rem" }}>
            <button
              type="button"
              className="rd-btn rd-btn-primary"
              onClick={() => {
                setPresetService("Research / Documentation / Validation Enquiry");
                document
                  .getElementById("booking-form")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Discuss Your Requirement <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Home collection */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Home Collection"
            title="Healthcare, at Your Convenience."
            copy="Home sample collection is available. Share your location in the enquiry form and our team will confirm."
          />
          <DiagnosticJourney stages={homeCollectionSteps} />
        </div>
      </section>

      {/* Patient journey */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading center eyebrow="Next Step" title="Your Next Step Is Simple." />
          <DiagnosticJourney stages={patientJourney} />
        </div>
      </section>

      {/* FAQ */}
      <section className="rd-section" id="faq">
        <div className="rd-container" style={{ maxWidth: 820 }}>
          <SectionHeading center eyebrow="FAQ" title="Booking and enquiries" />
          <FAQ items={contactFaqs} idPrefix="contact-faq" />
          <p className="rd-note" style={{ marginTop: "2rem", textAlign: "center" }}>
            For urgent medical concerns, please contact your healthcare professional or appropriate
            emergency medical services.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rd-section is-dark rd-texture-grid rd-final-cta">
        <Waveform className="rd-final-cta-waveform" animated />
        <div className="rd-container" style={{ textAlign: "center" }} data-reveal>
          <h2 className="rd-title">Your Next Step Starts Here.</h2>
          <p className="rd-copy" style={{ marginInline: "auto" }}>
            Connect with Resonance Diagnostic for diagnostic services or scientific requirements.
          </p>
          <div className="rd-actions" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <ButtonLink to="/contact" hash="booking">
              Book a Test <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink to="/contact" hash="enquiry" variant="light">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
