import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Archive,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  FlaskConical,
  Gauge,
  Inbox,
  Lightbulb,
  Search,
  Send,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { BrandIcon } from "@/components/Icon";
import { PackageCard } from "@/components/PackageCard";
import { ScienceHero } from "@/components/ScienceHero";
import { SectionSeam } from "@/components/SectionSeam";
import { ServicePillars } from "@/components/ServicePillars";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { DiagnosticJourney } from "@/components/DiagnosticJourney";
import { FAQ } from "@/components/FAQ";
import { Waveform } from "@/components/Waveform";
import { ButtonLink } from "@/components/Button";
import {
  corporateFeatures,
  documentationFlow,
  documentationHighlights,
  packages,
  packagesNote,
  researchHighlights,
  serviceJourney,
  servicesFaqs,
  services,
  qualityNodes,
  validationFlow,
  whoWeHelp,
} from "@/data/site";

const documentationIcons = [Inbox, FileText, Eye, Archive, BookOpen];
const validationIcons = [Target, FlaskConical, Gauge, FileText, ShieldCheck];
const journeyIcons = [Lightbulb, ClipboardList, Zap, FileText, ShieldCheck, Send];
const qualityIcons = [ClipboardList, FileText, ShieldCheck, Target];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Diagnostic & Scientific Services | Resonance Diagnostic" },
      {
        name: "description",
        content:
          "Resonance Diagnostic services across diagnostics, research, documentation and validation — by Kargill Healthcare LLP.",
      },
      { property: "og:title", content: "Diagnostic & Scientific Services | Resonance Diagnostic" },
      {
        property: "og:description",
        content:
          "Explore diagnostic and scientific services built around structured processes, research, documentation and validation.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return packages;
    return packages.filter((p) => `${p.title} ${p.tag} ${p.description}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <PageShell name="services">
      <ScienceHero
        eyebrow="Our Services"
        title={
          <>
            Science Behind <span className="rd-accent-text">Every Service.</span>
          </>
        }
        copy="Explore diagnostic and scientific services built around structured processes, research, documentation and validation."
        primaryCta={{ label: "Book a Test", to: "/contact", hash: "booking" }}
        secondaryCta={{ label: "Talk to Us", to: "/contact" }}
      />
      <SectionSeam />

      <section className="rd-section" style={{ paddingBottom: 0 }}>
        <div className="rd-container">
          <ServicePillars />
        </div>
      </section>

      {/* Diagnostics */}
      <section className="rd-section" id="diagnostics">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Diagnostics"
            title="Diagnostic Services"
            copy="Explore diagnostic services designed to support routine testing, preventive screening and specialised healthcare needs."
          />
          <div className="rd-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.id} {...s} number={`0${i + 1}`} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic service explorer */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Find What You Need"
            title="Find a Diagnostic Service"
            copy="Search by name, or filter by health concern."
          />
          <ServiceExplorer />
        </div>
      </section>

      {/* Health packages */}
      <section className="rd-section" id="package-list">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Health Packages"
            title="Preventive health checkup packages"
            copy="Curated packages for routine monitoring across general, condition-specific and life-stage needs."
          />
          <div className="rd-search" style={{ maxWidth: 420, marginBottom: "1.6rem" }}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search packages"
              aria-label="Search health packages"
            />
          </div>
          <div className="rd-grid">
            {filtered.map((p, i) => (
              <PackageCard key={p.title} {...p} delay={i * 60} />
            ))}
          </div>
          {!filtered.length ? <p className="rd-copy">No packages match that search.</p> : null}
          <p className="rd-note" style={{ marginTop: "1.6rem" }}>
            {packagesNote}
          </p>
        </div>
      </section>

      {/* Research */}
      <section className="rd-section is-dark rd-texture-grid" id="research">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Research"
            title="Research & Scientific Support"
            copy="Structured research capabilities supporting scientific investigation, evidence generation and healthcare-focused studies."
          />
          <div className="rd-grid">
            {researchHighlights.map((r, i) => (
              <ServiceCard
                key={r.title}
                number={`0${i + 1}`}
                title={r.title}
                description={r.description}
                icon={r.icon}
                delay={i * 70}
              />
            ))}
          </div>

          {/* Study-wise research display — no published studies yet */}
          <div className="rd-research-fallback" data-reveal>
            <p className="rd-copy">
              Research capabilities can be explored based on specific project requirements.
            </p>
            <ButtonLink to="/contact" variant="light">
              Discuss a Research Project <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="rd-section" id="documentation">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Documentation"
            title="Documentation & Scientific Records"
            copy="Structured documentation helps transform research, technical processes and quality activities into clear, traceable records."
          />
          <div className="rd-grid">
            {documentationHighlights.map((d, i) => (
              <ServiceCard
                key={d.title}
                number={`0${i + 1}`}
                title={d.title}
                description={d.description}
                icon={d.icon}
                delay={i * 70}
              />
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <DiagnosticJourney stages={documentationFlow} icons={documentationIcons} />
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="rd-section is-ice" id="validation">
        <div className="rd-container">
          <SectionHeading
            eyebrow="Validation"
            title="Validation & Verification"
            copy="Structured validation activities designed to evaluate whether defined methods, processes or systems meet their intended requirements."
          />
          <p className="rd-note" style={{ maxWidth: "62ch" }}>
            Specific validation categories can be confirmed based on your requirements — contact our
            team to discuss scope.
          </p>
          <div style={{ marginTop: "2.4rem" }}>
            <DiagnosticJourney stages={validationFlow} icons={validationIcons} />
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="rd-section">
        <div className="rd-container">
          <SectionHeading center eyebrow="Who We Help" title="Where Can We Help?" />
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
                <ul className="rd-check-list">
                  {w.points.map((p) => (
                    <li key={p}>
                      <CheckCircle2 size={16} aria-hidden="true" /> {p}
                    </li>
                  ))}
                </ul>
                {w.audience === "Institutions" ? (
                  <ul className="rd-check-list" style={{ marginTop: "0.4rem" }}>
                    {corporateFeatures.slice(0, 3).map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={16} aria-hidden="true" /> {f}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="rd-card-arrow">
                  <Link
                    to={w.cta.to}
                    {...(w.cta.hash ? { hash: w.cta.hash } : {})}
                    className="rd-link"
                  >
                    {w.cta.label} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service journey */}
      <section className="rd-section is-ice">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Service Journey"
            title="From Requirement to Result"
            copy="A conceptual framework — not every diagnostic test necessarily follows all six stages."
          />
          <DiagnosticJourney stages={serviceJourney} icons={journeyIcons} />
        </div>
      </section>

      {/* Quality */}
      <section className="rd-section is-dark rd-texture-grid">
        <div className="rd-container">
          <SectionHeading
            center
            eyebrow="Quality"
            title="Quality Is a Process."
            copy="Thoughtful processes, structured documentation and appropriate verification contribute to dependable healthcare and scientific workflows."
          />
          <DiagnosticJourney stages={qualityNodes} icons={qualityIcons} />
        </div>
      </section>

      {/* Patient CTA */}
      <section className="rd-section">
        <div className="rd-container" style={{ textAlign: "center" }} data-reveal>
          <h2 className="rd-title">Looking for a Diagnostic Service?</h2>
          <p className="rd-copy" style={{ marginInline: "auto" }}>
            Explore available diagnostic services or connect with our team to find the appropriate
            next step.
          </p>
          <div className="rd-actions" style={{ justifyContent: "center", marginTop: "1.6rem" }}>
            <a href="#diagnostics" className="rd-btn rd-btn-primary">
              Explore Diagnostics <ArrowRight size={17} />
            </a>
            <ButtonLink to="/contact" variant="ghost" hash="booking">
              Book a Test
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Research / institutional CTA */}
      <section className="rd-section is-ice">
        <div className="rd-container rd-research-cta" data-reveal>
          <div>
            <h2 className="rd-title">Have a Research or Scientific Requirement?</h2>
            <p className="rd-copy">
              Discuss your research, documentation or validation requirements with the Resonance
              team.
            </p>
          </div>
          <div className="rd-actions">
            <ButtonLink to="/contact">
              Discuss Your Requirement <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rd-section">
        <div className="rd-container" style={{ maxWidth: 820 }}>
          <SectionHeading center eyebrow="FAQ" title="Common questions" />
          <FAQ items={servicesFaqs} idPrefix="services-faq" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="rd-section is-dark rd-texture-grid rd-final-cta">
        <Waveform className="rd-final-cta-waveform" animated />
        <div className="rd-container" style={{ textAlign: "center" }} data-reveal>
          <h2 className="rd-title">Let's Build Better Healthcare Through Science.</h2>
          <p className="rd-copy" style={{ marginInline: "auto" }}>
            Whether you are looking for diagnostic services or exploring a scientific requirement,
            we're here to help.
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
