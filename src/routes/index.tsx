import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  FileCheck,
  FileText,
  FlaskConical,
  Home as HomeIcon,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Target,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { DiagnosticJourney } from "@/components/DiagnosticJourney";
import { PackageCard } from "@/components/PackageCard";
import { TrustStrip } from "@/components/TrustStrip";
import { SectionSeam } from "@/components/SectionSeam";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { Waveform } from "@/components/Waveform";
import { ButtonLink } from "@/components/Button";
import {
  beyondDiagnostics,
  differentiators,
  howItWorks,
  packages,
  packagesNote,
  qualityNodes,
  services,
  teamCategories,
  insightsPreview,
} from "@/data/site";

const signatureIcons = [FlaskConical, FileText, ShieldCheck, Microscope, Lightbulb];
const qualityIcons = [Workflow, FileText, ShieldCheck, Target];
const howItWorksIcons = [CalendarCheck, HomeIcon, Workflow, FileCheck, UserRoundCheck];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resonance Diagnostic | Advanced Diagnostics & Scientific Healthcare" },
      {
        name: "description",
        content:
          "Resonance Diagnostic by Kargill Healthcare LLP — diagnostic services shaped by a broader scientific approach of research, documentation and validation.",
      },
      {
        property: "og:title",
        content: "Resonance Diagnostic | Advanced Diagnostics & Scientific Healthcare",
      },
      {
        property: "og:description",
        content:
          "Advanced diagnostic solutions shaped by research, documentation and validation — from Resonance Diagnostic by Kargill Healthcare LLP.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell name="home">
      <Hero />
      <SectionSeam />

      <TrustStrip />

      {/* Introduction */}
      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-split">
            <div data-reveal>
              <span className="rd-eyebrow">The Resonance Approach</span>
              <h2 className="rd-title" style={{ marginTop: "0.9rem" }}>
                Where Healthcare Meets Scientific Thinking.
              </h2>
            </div>
            <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
              <p className="rd-copy">
                Resonance Diagnostic combines diagnostic services with a broader scientific approach
                — research, documentation and validation — carried out through Kargill Healthcare
                LLP.
              </p>
              <div className="rd-actions" style={{ marginTop: "1.4rem" }}>
                <ButtonLink to="/about" variant="ghost">
                  About Resonance <ArrowRight size={17} />
                </ButtonLink>
              </div>
            </div>
          </div>
         
        </div>
      </section>

      {/* Signature section */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="The Resonance Process"
            title="From Research to Reliable Insight"
            copy="Resonance is not simply a diagnostic laboratory — it reflects a scientific and quality-focused approach to healthcare."
          />
          <DiagnosticJourney icons={signatureIcons} />
        </div>
      </section>

      {/* Diagnostic services preview */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Our Services"
            title="Diagnostics, Designed Around Your Needs"
            copy="From routine pathology to specialised investigations and preventive health packages."
          />
          <div className="rd-grid">
            {services.slice(0, 4).map((s, i) => (
              <ServiceCard key={s.id} {...s} number={`0${i + 1}`} delay={i * 70} />
            ))}
          </div>
          <div className="rd-actions" style={{ marginTop: "2rem" }}>
            <ButtonLink to="/services">
              View all services <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Test / service explorer */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Find What You Need"
            title="Find the Right Diagnostic Service"
            copy="Search by name, or filter by health concern."
          />
          <ServiceExplorer />
        </div>
      </section>

      {/* Health packages */}
      <section className="rd-section" id="home-packages">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Health Packages"
            title="Preventive Health Packages"
            copy="Thoughtfully structured screening options for proactive health assessment."
          />
          <div className="rd-grid">
            {packages.slice(0, 4).map((p, i) => (
              <PackageCard key={p.title} {...p} delay={i * 70} />
            ))}
          </div>
          <p className="rd-note" style={{ marginTop: "1.4rem" }}>
            {packagesNote}
          </p>
          <div className="rd-actions" style={{ marginTop: "1rem" }}>
            <ButtonLink to="/services" hash="package-list">
              View all packages <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Why Resonance */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading center eyebrow="Why Resonance" title="Why Resonance" />
          <div className="rd-grid">
            {differentiators.map((d, i) => (
              <ServiceCard
                key={d.title}
                number={`0${i + 1}`}
                title={d.title}
                description={d.description}
                icon={d.icon}
                alt={i % 2 === 1}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality & trust */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Quality & Trust"
            title="Built Around Quality."
            copy="Every healthcare experience depends on processes that are thoughtful, structured and consistent."
          />
          <DiagnosticJourney stages={qualityNodes} icons={qualityIcons} />
        </div>
      </section>

      {/* Beyond diagnostics */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Scientific Capabilities"
            title="Beyond Diagnostics."
            copy="Explore the scientific capabilities that extend beyond routine diagnostic services."
          />
          <div className="rd-grid">
            {beyondDiagnostics.map((b, i) => (
              <ServiceCard
                key={b.title}
                number={b.step}
                title={b.title}
                description={b.description}
                icon={b.icon}
                alt={i % 2 === 1}
                cta={{ label: "Explore", to: "/services" }}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology / infrastructure */}
      <section className="rd-section is-ice">
        <div className="rd-container rd-split">
          <div className="rd-tech-visual" data-reveal>
            <Waveform animated />
          </div>
          <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <SectionHeading eyebrow="Technology" title="Science Meets Technology" />
            <p className="rd-copy">
              Modern digital workflows designed to make diagnostic services more structured,
              transparent and convenient.
            </p>
            <ul className="rd-check-list" style={{ marginTop: "1.4rem" }}>
              {[
                "Modern workflows",
                "Digital reporting",
                "Structured processes",
                "Data-driven approach",
              ].map((t) => (
                <li key={t}>
                  <ShieldCheck size={18} aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Patient Journey"
            title="Your Journey with Resonance"
            copy="A structured path from booking to understanding your results."
          />
          <DiagnosticJourney stages={howItWorks} icons={howItWorksIcons} />
        </div>
      </section>

      {/* Team preview */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading center eyebrow="Our People" title="People Behind the Science" />
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
          <div className="rd-actions" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <ButtonLink to="/about" variant="ghost">
              Meet Our Team <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Insights"
            title="Resonance Insights"
            copy="Topics we plan to explore as our insights hub develops."
          />
          <div className="rd-grid">
            {insightsPreview.map((a, i) => (
              <article
                key={a.title}
                className="rd-card rd-insight-card"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <span className="rd-tag">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <div className="rd-card-arrow">
                  <span className="rd-link is-disabled" aria-disabled="true">
                    Coming soon <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rd-section is-dark rd-texture-grid rd-final-cta">
        <Waveform className="rd-final-cta-waveform" animated />
        <div className="rd-container" style={{ textAlign: "center" }} data-reveal>
          <h2 className="rd-title">
            Your Health.
            <br />
            Our Science.
          </h2>
          <p className="rd-copy" style={{ marginInline: "auto" }}>
            Explore diagnostic services and discover a more thoughtful approach to healthcare.
          </p>
          <div className="rd-actions" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <ButtonLink to="/contact" hash="booking">
              Book a Test <ArrowRight size={17} />
            </ButtonLink>
            <Link to="/contact" className="rd-btn rd-btn-light">
              Contact Resonance
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
