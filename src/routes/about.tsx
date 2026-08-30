import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  ShieldCheck,
  Target,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ScienceHero } from "@/components/ScienceHero";
import { SectionSeam } from "@/components/SectionSeam";
import { DiagnosticJourney } from "@/components/DiagnosticJourney";
import { TrustStrip } from "@/components/TrustStrip";
import { Waveform } from "@/components/Waveform";
import { FAQ } from "@/components/FAQ";
import { ButtonLink } from "@/components/Button";
import { BrandIcon } from "@/components/Icon";
import {
  aboutFaqs,
  approachPoints,
  companyInfo,
  differentiators,
  mission,
  qualityNodes,
  servicePillars,
  teamCategories,
  vision,
  whoWeHelp,
} from "@/data/site";

const qualityIcons = [ClipboardList, FileText, ShieldCheck, Target];
const principles = differentiators.slice(0, 4);

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Resonance Diagnostic | Kargill Healthcare LLP" },
      {
        name: "description",
        content:
          "Resonance Diagnostic brings together diagnostic healthcare services and a scientific approach to research, documentation and validation — operated by Kargill Healthcare LLP.",
      },
      { property: "og:title", content: "About Resonance Diagnostic | Kargill Healthcare LLP" },
      {
        property: "og:description",
        content: companyInfo.description,
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell name="about">
      <ScienceHero
        eyebrow="About Resonance"
        title={
          <>
            Where Science Finds <span className="rd-accent-text">Its Resonance.</span>
          </>
        }
        copy="Resonance Diagnostic, by Kargill Healthcare LLP, brings together healthcare services and a scientific approach centred around diagnostics, research, documentation and validation."
        primaryCta={{ label: "Explore Our Services", to: "/services" }}
        secondaryCta={{ label: "Contact Us", to: "/contact" }}
      />
      <SectionSeam />

      {/* Who we are */}
      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-split">
            <div data-reveal>
              <span className="rd-eyebrow">Who We Are</span>
              <h2 className="rd-title" style={{ marginTop: "0.9rem" }}>
                {companyInfo.name}
              </h2>
            </div>
            <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
              <p className="rd-copy">{companyInfo.description}</p>
              <ul className="rd-check-list" style={{ marginTop: "1.2rem" }}>
                {approachPoints.map((p) => (
                  <li key={p}>
                    <CheckCircle2 size={18} aria-hidden="true" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="rd-tech-visual"
            style={{ marginTop: "3rem", aspectRatio: "16 / 4" }}
            data-reveal
          >
            <Waveform animated />
          </div>
        </div>
      </section>

      {/* Resonance + Kargill relationship */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="How We're Organised"
            title={
              <>
                Resonance Diagnostic.
                <br />
                Powered by Kargill Healthcare LLP.
              </>
            }
            copy={companyInfo.relationship}
          />
          <div className="rd-identity-row">
            <div className="rd-identity-card" data-reveal>
              <span className="rd-tag">Diagnostic identity</span>
              <h3>Resonance Diagnostic</h3>
              <p>Diagnostic services shaped by research, documentation and validation.</p>
            </div>
            <div className="rd-identity-connector" aria-hidden="true">
              <span />
            </div>
            <div
              className="rd-identity-card"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              <span className="rd-tag">Operating organisation</span>
              <h3>Kargill Healthcare LLP</h3>
              <p>The organisation through which Resonance Diagnostic operates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="rd-section">
        <div className="rd-container" style={{ maxWidth: 760, textAlign: "center" }} data-reveal>
          <span className="rd-eyebrow" style={{ justifyContent: "center" }}>
            The Journey
          </span>
          <h2 className="rd-title" style={{ marginTop: "0.9rem" }}>
            Our Story
          </h2>
          <p className="rd-copy" style={{ marginInline: "auto", marginTop: "1.1rem" }}>
            Resonance Diagnostic was built around a simple idea — that healthcare and science
            shouldn't sit in separate rooms. Diagnostics, research, documentation and validation are
            treated as one connected approach rather than isolated services, operated by Kargill
            Healthcare LLP and shaped as the organisation continues to grow.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="rd-section is-ice">
        <div className="rd-container rd-split">
          <div data-reveal>
            <span className="rd-eyebrow">Why We Exist</span>
            <h2 className="rd-title" style={{ marginTop: "0.9rem" }}>
              Our Mission
            </h2>
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <p className="rd-copy">{mission}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container" style={{ maxWidth: 760, textAlign: "center" }} data-reveal>
          <span className="rd-eyebrow" style={{ justifyContent: "center" }}>
            Looking Ahead
          </span>
          <h2 className="rd-title" style={{ marginTop: "0.9rem" }}>
            Our Vision
          </h2>
          <p className="rd-copy" style={{ marginInline: "auto", marginTop: "1.1rem" }}>
            {vision}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading eyebrow="Our Philosophy" title="Built on a Scientific Mindset." />
          <div className="rd-principles">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="rd-principle"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="rd-principle-num">{`0${i + 1}`}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Resonance approach — reuses the Home page's signature journey */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="The Resonance Approach"
            title="Research. Document. Validate. Diagnose."
            copy="Resonance is not simply a diagnostic laboratory — it reflects a scientific and quality-focused approach to healthcare."
          />
          <DiagnosticJourney />
        </div>
      </section>

      {/* Leadership / team */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading center eyebrow="Our People" title="The People Behind Resonance" />
          <div className="rd-grid">
            {teamCategories.map((t, i) => (
              <ServiceCard
                key={t.role}
                title={t.role}
                description={t.note}
                icon={t.icon}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading eyebrow="Our Expertise" title="Four Areas, One Approach" />
          <div className="rd-grid">
            {servicePillars.map((p, i) => (
              <ServiceCard
                key={p.id}
                number={p.step}
                title={p.title}
                description={p.description}
                icon={p.icon}
                cta={{ label: `Explore ${p.title}`, to: "/services", hash: p.id }}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality & responsibility */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Quality"
            title="Quality Is More Than a Statement."
            copy="Structured processes, documentation, appropriate verification and consistency support responsible healthcare communication."
          />
          <DiagnosticJourney stages={qualityNodes} icons={qualityIcons} />
        </div>
      </section>

      {/* Infrastructure — abstract scientific visual, not stock facility photos */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Infrastructure"
            title="A Scientific Environment"
            copy="Detailed facility information will be published here as it becomes available."
          />
          <div className="rd-tech-visual" style={{ aspectRatio: "21 / 6" }} data-reveal>
            <Waveform animated />
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading center eyebrow="Who We Help" title="Working With Resonance" />
          <div className="rd-grid">
            {whoWeHelp.map((w, i) => (
              <article
                key={w.audience}
                className="rd-card"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="rd-card-icon">
                  <BrandIcon name={w.icon} />
                </span>
                <h3>{w.audience}</h3>
                <p>{w.points.join(", ")}.</p>
                <div className="rd-card-arrow">
                  <ButtonLink
                    to={w.cta.to}
                    {...(w.cta.hash ? { hash: w.cta.hash } : {})}
                    variant="ghost"
                    size="sm"
                  >
                    {w.cta.label} <ArrowRight size={16} />
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="rd-section">
        <div className="rd-container" style={{ textAlign: "center" }}>
          <SectionHeading center eyebrow="Trust" title="What We Stand For" />
        </div>
        <TrustStrip />
      </section>

      {/* FAQ */}
      <section className="rd-section is-ice" id="faq">
        <div className="rd-container" style={{ maxWidth: 820 }}>
          <SectionHeading center eyebrow="FAQ" title="Common questions" />
          <FAQ items={aboutFaqs} idPrefix="about-faq" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="rd-section is-dark rd-texture-grid rd-final-cta">
        <Waveform className="rd-final-cta-waveform" animated />
        <div className="rd-container" style={{ textAlign: "center" }} data-reveal>
          <h2 className="rd-title">Discover the Resonance Approach.</h2>
          <p className="rd-copy" style={{ marginInline: "auto" }}>
            Explore our diagnostic and scientific services or connect with our team to discuss your
            requirements.
          </p>
          <div className="rd-actions" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <ButtonLink to="/services">
              Explore Services <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink to="/contact" variant="light">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
