// import {
//   ArrowRight,
//   Clock,
//   FileCheck,
//   House,
//   Microscope,
//   Shield,
//   type LucideIcon,
// } from "lucide-react";
// import { ButtonLink } from "@/components/Button";
// import { Waveform } from "@/components/Waveform";
// import MolecularScene from "@/components/MolecularScene";
// import { heroTrustPoints } from "@/data/site";

// const chips = [
//   { Icon: Microscope, title: "Advanced", sub: "Diagnostics" },
//   { Icon: FileCheck, title: "Digital", sub: "Reports" },
//   { Icon: House, title: "Home", sub: "Collection" },
// ];

// const trustIcons: LucideIcon[] = [Shield, Clock, House];

// /**
//  * Cinematic scientific hero: a dark Resonance-blue environment with a
//  * molecular/DNA visual standing in for a generic stock lab photo.
//  */
// export function Hero() {
//   return (
//     <section className="rd-hero rd-section is-dark rd-texture-grid">
//       <div className="rd-hero-scene" aria-hidden="true">
//         <MolecularScene />
//       </div>
//       <span className="rd-hero-scrim" aria-hidden="true" />
//       <span className="rd-hero-aura" aria-hidden="true" />
//       <Waveform className="rd-hero-signal" animated />

//       <div className="rd-container rd-hero-inner">
//         <div className="rd-hero-copy">
//           <span className="rd-eyebrow rd-fade-up" style={{ ["--line-delay" as string]: "80ms" }}>
//             Research · Documentation · Validation · Diagnostics
//           </span>

//           <h1 className="rd-display rd-hero-title">
//             <span className="rd-reveal-line">
//               <span style={{ ["--line-delay" as string]: "180ms" }}>
//                 Precision <span className="rd-accent-text">Diagnostics.</span>
//               </span>
//             </span>
//             <span className="rd-reveal-line">
//               <span style={{ ["--line-delay" as string]: "260ms" }}>Scientific Confidence.</span>
//             </span>
//             <span className="rd-hero-legal rd-reveal-line">
//               <span style={{ ["--line-delay" as string]: "320ms" }}>
//                 by <b>Kargill Healthcare LLP.</b>
//               </span>
//             </span>
//           </h1>
//           <span
//             className="rd-hero-underline rd-fade-up"
//             style={{ ["--line-delay" as string]: "420ms" }}
//             aria-hidden="true"
//           />

//           <p className="rd-copy rd-fade-up" style={{ ["--line-delay" as string]: "480ms" }}>
//             Advanced diagnostic solutions shaped by research, documentation and validation.
//           </p>

//           <div className="rd-actions rd-fade-up" style={{ ["--line-delay" as string]: "600ms" }}>
//             <ButtonLink to="/contact" hash="booking">
//               Book a Test <ArrowRight size={17} />
//             </ButtonLink>
//             <ButtonLink to="/services" variant="light">
//               Explore Services
//             </ButtonLink>
//           </div>

//           <ul
//             className="rd-hero-features rd-fade-up"
//             style={{ ["--line-delay" as string]: "720ms" }}
//           >
//             {heroTrustPoints.map(({ title, description }, i) => {
//               const Icon = trustIcons[i] ?? Shield;
//               return (
//                 <li key={title}>
//                   <span className="rd-hero-feature-icon">
//                     <Icon size={18} aria-hidden="true" />
//                   </span>
//                   <span>
//                     <b>{title}</b>
//                     <small>{description}</small>
//                   </span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>

//       <div
//         className="rd-hero-icons-card rd-glass is-dark rd-fade-up"
//         style={{ ["--line-delay" as string]: "780ms" }}
//       >
//         {chips.map(({ Icon, title, sub }) => (
//           <div key={title} className="rd-hero-icon-item">
//             <span className="rd-chip-icon">
//               <Icon size={18} aria-hidden="true" />
//             </span>
//             <span className="rd-chip-text">
//               <b>{title}</b>
//               <small>{sub}</small>
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  ArrowRight,
  Clock,
  FileCheck,
  House,
  Microscope,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Waveform } from "@/components/Waveform";
import MolecularScene from "@/components/MolecularScene";
import { heroTrustPoints } from "@/data/site";

const chips = [
  { Icon: Microscope, title: "Advanced", sub: "Diagnostics" },
  { Icon: FileCheck, title: "Digital", sub: "Reports" },
  { Icon: House, title: "Home", sub: "Collection" },
];

const trustIcons: LucideIcon[] = [Shield, Clock, House];

export function Hero() {
  return (
    <section className="rd-hero rd-section is-dark rd-texture-grid">

      {/* =========================================================
          RIGHT SIDE — DNA / MOLECULAR VISUAL
          ========================================================= */}
      <div className="rd-hero-scene" aria-hidden="true">
        <MolecularScene />
      </div>

      {/* Soft gradient which protects the text area */}
      <span className="rd-hero-scrim" aria-hidden="true" />

      {/* Background glow */}
      <span className="rd-hero-aura" aria-hidden="true" />

      {/* ECG / medical waveform */}
      <Waveform
        className="rd-hero-signal"
        animated
      />

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}
      <div className="rd-container rd-hero-inner">
        <div className="rd-hero-copy">

          {/* Eyebrow */}
          <span
            className="rd-eyebrow rd-fade-up"
            style={{
              ["--line-delay" as string]: "80ms",
            }}
          >
            Research · Documentation · Validation · Diagnostics
          </span>

          {/* Heading */}
          <h1 className="rd-display rd-hero-title">

            <span className="rd-reveal-line">
              <span
                style={{
                  ["--line-delay" as string]: "180ms",
                }}
              >
                Precision{" "}
                <span className="rd-accent-text">
                  Diagnostics.
                </span>
              </span>
            </span>

            <span className="rd-reveal-line">
              <span
                style={{
                  ["--line-delay" as string]: "260ms",
                }}
              >
                Scientific Confidence.
              </span>
            </span>

            <span className="rd-hero-legal rd-reveal-line">
              <span
                style={{
                  ["--line-delay" as string]: "320ms",
                }}
              >
                by <b>Kargill Healthcare LLP.</b>
              </span>
            </span>

          </h1>

          {/* Green underline */}
          <span
            className="rd-hero-underline rd-fade-up"
            style={{
              ["--line-delay" as string]: "420ms",
            }}
            aria-hidden="true"
          />

          {/* Description */}
          <p
            className="rd-copy rd-fade-up"
            style={{
              ["--line-delay" as string]: "480ms",
            }}
          >
            Advanced diagnostic solutions shaped by research,
            documentation and validation.
          </p>

          {/* CTA */}
          <div
            className="rd-actions rd-fade-up"
            style={{
              ["--line-delay" as string]: "600ms",
            }}
          >
            <ButtonLink
              to="/contact"
              hash="booking"
            >
              Book a Test
              <ArrowRight size={17} />
            </ButtonLink>

            <ButtonLink
              to="/services"
              variant="light"
            >
              Explore Services
            </ButtonLink>
          </div>

          {/* Trust points */}
          <ul
            className="rd-hero-features rd-fade-up"
            style={{
              ["--line-delay" as string]: "720ms",
            }}
          >
            {heroTrustPoints.map(
              ({ title, description }, i) => {
                const Icon =
                  trustIcons[i] ?? Shield;

                return (
                  <li key={title}>

                    <span className="rd-hero-feature-icon">
                      <Icon
                        size={18}
                        aria-hidden="true"
                      />
                    </span>

                    <span>
                      <b>{title}</b>
                      <small>{description}</small>
                    </span>

                  </li>
                );
              }
            )}
          </ul>

        </div>
      </div>

      {/* =========================================================
          RIGHT BOTTOM FEATURE CARD
          ========================================================= */}
      <div
        className="rd-hero-icons-card rd-glass is-dark rd-fade-up"
        style={{
          ["--line-delay" as string]: "780ms",
        }}
      >
        {chips.map(({ Icon, title, sub }) => (
          <div
            key={title}
            className="rd-hero-icon-item"
          >
            <span className="rd-chip-icon">
              <Icon
                size={18}
                aria-hidden="true"
              />
            </span>

            <span className="rd-chip-text">
              <b>{title}</b>
              <small>{sub}</small>
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}