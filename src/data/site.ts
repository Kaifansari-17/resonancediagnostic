/**
 * Single source of truth for Resonance Diagnostic site content.
 * The health package catalogue below is indicative — swap in the lab's
 * approved test list, inclusions and pricing when available.
 */

export const brand = {
  name: "Resonance Diagnostic",
  legal: "Kargill Healthcare LLP",
  tagline: "Precision diagnostics, convenient healthcare and technology-led patient experiences.",
  footerBlurb:
    "Precision diagnostics, convenient healthcare and technology-led patient experiences — by Kargill Healthcare LLP.",
  copyright: "© 2026 Resonance Diagnostic by Kargill Healthcare LLP. All Rights Reserved.",
};

/**
 * Structured company facts for the About page. Only verified fields are
 * populated — `established` stays null until an actual date is confirmed.
 * `relationship` reflects the confirmed parent-company relationship: Kargill
 * Healthcare LLP advances diagnostic healthcare through research, clinical
 * validation and regulatory (IVDR) expertise, and Resonance is its
 * diagnostic-facing brand.
 */
export const companyInfo = {
  name: "Resonance Diagnostic",
  legal: "Kargill Healthcare LLP",
  established: null as string | null,
  relationship:
    "Resonance Diagnostic is operated by Kargill Healthcare LLP, the parent company behind Resonance, which advances diagnostic healthcare through research, clinical validation and regulatory expertise.",
  description:
    "Resonance Diagnostic brings together diagnostic healthcare services and a broader scientific approach — research, documentation and validation — operated by Kargill Healthcare LLP.",
};

export const mission =
  "To deliver reliable diagnostic services with modern equipment, professional expertise and a healthcare experience designed around patient convenience.";

export const vision =
  "To make accurate, technology-driven diagnostics accessible and convenient, supporting better health decisions for every patient we serve.";

export const contact = {
  phone: "9205371456",
  phoneHref: "tel:9205371456",
  whatsapp: "https://wa.me/9205371456",
  email: "info@resonancediagnostic.com",
  address:
    "Kargill Healthcare, Samruddhi CHS, 1, Rajaji Path, opp. Swami Narayan Temple, Dombivli, Ramnagar, Dombivli East, Kalyan, Maharashtra 421201",
  hours: "9 am – 6 pm",
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export type IconName =
  | "microchip"
  | "target"
  | "home"
  | "report"
  | "team"
  | "heart"
  | "vial"
  | "pulse"
  | "microscope"
  | "building"
  | "waveform"
  | "flask"
  | "document"
  | "shield"
  | "clock"
  | "truck"
  | "wallet"
  | "headset"
  | "droplet"
  | "dna";

export const differentiators: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Scientific Approach",
    description: "Diagnostics supported by structured research and evidence-based processes.",
    icon: "microscope",
  },
  {
    title: "Quality & Accuracy",
    description: "Focus on reliable testing, documentation and quality-oriented workflows.",
    icon: "target",
  },
  {
    title: "Research Driven",
    description:
      "Supporting healthcare initiatives through structured research and scientific documentation.",
    icon: "flask",
  },
  {
    title: "Validation Focused",
    description: "Method, process and documentation validation to support dependable outcomes.",
    icon: "shield",
  },
  {
    title: "Patient Centric",
    description: "Simple access to diagnostic services, reports and healthcare information.",
    icon: "heart",
  },
  {
    title: "Technology Enabled",
    description: "Modern digital workflows designed for a faster and more transparent experience.",
    icon: "microchip",
  },
];

/**
 * Signature differentiator: Resonance positions itself beyond routine
 * diagnostics through research, documentation and validation. Copy here is
 * intentionally generic/capability-level — do not add specific certifications,
 * standards or accreditations unless Kargill Healthcare confirms them.
 */
export const beyondDiagnostics: {
  step: string;
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    step: "01",
    title: "Research",
    description:
      "Structured studies, scientific investigation and evidence generation supporting informed decision-making.",
    icon: "flask",
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "Systematic preparation, maintenance and management of scientific, technical and quality documentation.",
    icon: "document",
  },
  {
    step: "03",
    title: "Validation",
    description:
      "Structured evaluation and validation activities designed to establish reliability, consistency and suitability of processes and methods, where applicable.",
    icon: "shield",
  },
];

/** Slim value strip shown directly beneath the hero. */
export const trustStrip: { title: string; icon: IconName }[] = [
  { title: "Scientific Approach", icon: "microscope" },
  { title: "Quality Focus", icon: "target" },
  { title: "Research Driven", icon: "flask" },
  { title: "Patient Centric", icon: "heart" },
];

/**
 * "Why Choose Resonance Diagnostics" — the lab's core service differentiators
 * as provided by Kargill Healthcare (accuracy, automation, TAT, B2B support,
 * logistics and pricing transparency).
 */
export const whyChooseUs: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Accurate & Reliable Reports",
    description:
      "Strict quality control at every stage, modern diagnostic systems and experienced review ensure precise, consistent and dependable results.",
    icon: "target",
  },
  {
    title: "Advanced Fully Automated Equipment",
    description:
      "Fully automated equipment minimises manual intervention, maintaining uniform quality and faster turnaround without compromising accuracy.",
    icon: "microchip",
  },
  {
    title: "Quick Turnaround Time (TAT)",
    description:
      "Advanced technology and well-organised processes keep every step, from sample collection to final report, smooth and free of unnecessary delays.",
    icon: "clock",
  },
  {
    title: "Dedicated B2B Support Team",
    description:
      "A dedicated support team ensures smooth coordination with partner clinics, hospitals and healthcare providers, from test booking to report delivery.",
    icon: "headset",
  },
  {
    title: "Logistics & Sample Pickup Network",
    description:
      "Three dedicated collection rounds daily — morning, afternoon and evening — with samples carried on ice packs at safe temperatures to preserve integrity.",
    icon: "truck",
  },
  {
    title: "Transparent Pricing",
    description:
      "All tests and health packages are clearly priced with no hidden charges, so patients and partners always know exactly what they are paying for.",
    icon: "wallet",
  },
];

/**
 * Laboratory departments behind "Our Diagnostic Expertise" — the specific
 * pathology disciplines Resonance operates across.
 */
export const diagnosticExpertiseIntro =
  "A comprehensive spectrum of pathology services built on precision, advanced technology and uncompromising quality standards — every process managed under strict quality protocols to ensure consistency, reliability and excellence.";

export const diagnosticExpertise: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Hematology",
    description:
      "Comprehensive evaluation of blood health to support detection and monitoring of infections, anemia and various hematological conditions with high accuracy.",
    icon: "droplet",
  },
  {
    title: "Biochemistry",
    description:
      "Advanced analysis of organ function and metabolic balance — liver health, kidney performance, glucose levels, lipid balance and overall physiological condition.",
    icon: "flask",
  },
  {
    title: "Immunology",
    description:
      "Focused on identifying infections and immune responses, enabling early detection and supporting effective clinical decisions.",
    icon: "shield",
  },
  {
    title: "Hormone & Endocrine Care",
    description:
      "In-depth hormone profiling to assess endocrine health, including thyroid function, vitamin levels and other key hormonal parameters.",
    icon: "pulse",
  },
  {
    title: "Clinical Pathology",
    description:
      "Routine evaluations such as urine and other essential analyses to support general health assessment and early identification of abnormalities.",
    icon: "vial",
  },
  {
    title: "Microbiology",
    description:
      "Specialised services for detecting bacterial, viral and fungal infections, ensuring accurate identification and supporting appropriate treatment planning.",
    icon: "microscope",
  },
  {
    title: "Histopathology & Cytology",
    description:
      "Detailed examination of cells and tissues to assist in the diagnosis and evaluation of various medical conditions, including chronic and complex diseases.",
    icon: "dna",
  },
  {
    title: "Preventive Health Solutions",
    description:
      "Well-designed health checkup programs focused on early detection, regular monitoring and long-term wellness for individuals and families.",
    icon: "heart",
  },
];

/** Closing "Commitment" statement, drawn from the lab's own service overview. */
export const commitmentStatement =
  "Resonance Diagnostics combines advanced automation, expert supervision and stringent quality control measures to deliver dependable and consistent outcomes. Our focus on precision, efficiency and patient-centric care ensures that every report contributes to better healthcare decisions and improved patient outcomes.";

export const services: {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  cta: { label: string; to: string; hash?: string };
  alt?: boolean;
}[] = [
  {
    id: "pathology",
    title: "Pathology Tests",
    description: "Routine and advanced laboratory investigations.",
    icon: "vial",
    cta: { label: "Book / Enquire", to: "/contact", hash: "booking" },
  },
  {
    id: "packages",
    title: "Health Packages",
    description: "Curated preventive health checkup packages for routine monitoring.",
    icon: "pulse",
    alt: true,
    cta: { label: "View Packages", to: "/services", hash: "package-list" },
  },
  {
    id: "specialised",
    title: "Specialised Diagnostics",
    description: "Advanced diagnostic investigations for specific healthcare needs.",
    icon: "microscope",
    cta: { label: "Explore", to: "/services", hash: "technology" },
  },
  {
    id: "home-collection",
    title: "Home Sample Collection",
    description: "Professional sample collection from the comfort of your home.",
    icon: "home",
    alt: true,
    cta: { label: "Book Collection", to: "/contact", hash: "booking" },
  },
  {
    id: "digital-reports",
    title: "Digital Reports",
    description: "Convenient access to reports digitally without unnecessary paperwork.",
    icon: "waveform",
    cta: { label: "Report Enquiry", to: "/contact" },
  },
  {
    id: "corporate",
    title: "Corporate Health Checkups",
    description: "Healthcare screening solutions for organisations and employees.",
    icon: "building",
    alt: true,
    cta: { label: "Request Program", to: "/contact", hash: "corporate" },
  },
];

export const packages: {
  tag: string;
  title: string;
  description: string;
  price: string;
  audience: string;
  tests: string[];
}[] = [
  {
    tag: "Comprehensive",
    title: "Full Body Profile",
    description:
      "A comprehensive preventive screening package covering blood health, blood sugar, lipid, organ function and key vitamin levels.",
    price: "₹3,500",
    audience: "Adults",
    tests: [
      "Complete Blood Count (CBC)",
      "Erythrocyte Sedimentation Rate (ESR)",
      "Fasting Blood Sugar (FBS)",
      "Post Prandial Blood Sugar (PPBS)",
      "Glycated Hemoglobin (HbA1c)",
      "Lipid Profile",
      "Kidney Function Test (KFT)",
      "Liver Function Test (LFT)",
      "Serum Iron",
      "Thyroid Function Test (TFT)",
      "Vitamin D (25-Hydroxy)",
      "Vitamin B12",
      "Urine Routine Examination",
    ],
  },
  {
    tag: "Essential",
    title: "Mini Health Profile",
    description:
      "An essential preventive screening package covering blood health, blood sugar, lipid and key organ function tests.",
    price: "₹1,600",
    audience: "Adults",
    tests: [
      "Complete Blood Count (CBC) — All Parameters",
      "Glycated Hemoglobin (HbA1c) with Graph",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Renal Function Test (RFT)",
      "Fasting Blood Sugar (FBS)",
      "Thyroid Function Test (TFT)",
    ],
  },
];

export const packagesNote =
  "Prices are per package and subject to periodic revision. Contact our team to confirm current availability before booking.";

/**
 * The Resonance signature narrative: Research → Documentation → Validation →
 * Diagnostics → Insight. This is the default stage sequence for
 * DiagnosticJourney and the homepage's central storytelling section.
 */
export const journey = [
  {
    step: "01",
    title: "Research",
    description: "Structured research and evidence generation.",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Organised scientific and technical documentation.",
  },
  {
    step: "03",
    title: "Validation",
    description: "Evaluation of methods, processes or systems, where applicable.",
  },
  {
    step: "04",
    title: "Diagnostics",
    description: "Diagnostic testing and healthcare services.",
  },
  {
    step: "05",
    title: "Insight",
    description: "Clear information that supports informed healthcare decisions.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Book",
    description: "Choose your diagnostic service or package.",
  },
  {
    step: "02",
    title: "Collect",
    description: "Visit the centre, or arrange sample collection where available.",
  },
  {
    step: "03",
    title: "Process",
    description: "Your sample is processed through our laboratory workflow.",
  },
  {
    step: "04",
    title: "Report",
    description: "Receive your diagnostic report digitally when ready.",
  },
  {
    step: "05",
    title: "Understand",
    description: "Review your results with your healthcare professional.",
  },
];

/** Quality & Trust section: the process backbone behind every result. */
export const qualityNodes = [
  {
    step: "01",
    title: "Process",
    description: "Thoughtful, structured workflows across every stage of testing.",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Consistent scientific, technical and quality documentation.",
  },
  {
    step: "03",
    title: "Validation",
    description: "Structured evaluation of methods and processes, where applicable.",
  },
  {
    step: "04",
    title: "Quality",
    description: "A continued focus on consistency and dependable outcomes.",
  },
];

export const approachPoints = [
  "Diagnostic accuracy",
  "Patient convenience",
  "Modern technology",
  "Preventive healthcare",
  "Reliable reporting",
];

export const corporateFeatures = [
  "Employee health checkups",
  "Preventive screening",
  "Custom packages",
  "On-site collection options",
  "Digital reports",
  "Corporate coordination",
];

export const serviceOptions = [
  "Pathology Tests",
  "Health Packages",
  "Specialised Diagnostics",
  "Home Sample Collection",
  "Digital Reports",
  "Corporate Health Checkups",
  "Research / Documentation / Validation Enquiry",
];

export const aboutFaqs = [
  {
    q: "What is Resonance Diagnostic?",
    a: "Resonance Diagnostic is a diagnostic healthcare service built around a broader scientific approach — research, documentation and validation — operated by Kargill Healthcare LLP.",
  },
  {
    q: "Who is behind Resonance Diagnostic?",
    a: "Resonance Diagnostic is operated by Kargill Healthcare LLP. Leadership information will be published here once available.",
  },
  {
    q: "What is the relationship between Resonance Diagnostic and Kargill Healthcare LLP?",
    a: "Kargill Healthcare LLP is the parent company behind Resonance, advancing diagnostic healthcare through research, clinical validation and regulatory (IVDR) expertise for diagnostic and point-of-care products.",
  },
  {
    q: "What services does Resonance provide?",
    a: "Pathology tests, preventive health packages, specialised diagnostics, home sample collection, digital reports and corporate health checkups. See our Services page for the full list.",
  },
  {
    q: "Does Resonance undertake research activities?",
    a: "Yes — structured research is part of Resonance's broader scientific approach. Contact our team to discuss a specific research requirement.",
  },
  {
    q: "What documentation services are available?",
    a: "Please contact our team for current availability and scope.",
  },
  {
    q: "What validation services are available?",
    a: "Please contact our team for current availability and scope.",
  },
  {
    q: "How can I contact the team?",
    a: "Call or WhatsApp us, email us, or use the enquiry form on our Contact page — our team typically responds within one business day.",
  },
];

export const contactFaqs = [
  {
    q: "How can I book a diagnostic test?",
    a: "Use the booking form on this page to request an appointment, or call or WhatsApp us directly. Our team will get in touch to confirm the next step.",
  },
  {
    q: "Can I enquire about a specific service?",
    a: "Yes. Select the relevant option in the enquiry form and describe what you need — our team will follow up with the details.",
  },
  {
    q: "How can I contact Resonance?",
    a: "Call or WhatsApp us, email us, or use the enquiry form on this page.",
  },
  {
    q: "How can I access my report?",
    a: "Please contact our team for the latest availability and details on report access.",
  },
  {
    q: "Can I discuss a research requirement?",
    a: "Yes. Select a research enquiry in the form below, or contact our team directly to discuss your requirement.",
  },
  {
    q: "Can I enquire about documentation services?",
    a: "Yes. Select a documentation enquiry in the form below, or contact our team directly.",
  },
  {
    q: "Can I enquire about validation services?",
    a: "Yes. Select a validation enquiry in the form below, or contact our team directly.",
  },
  {
    q: "Do you provide home sample collection?",
    a: "Yes, home sample collection is available. Availability may vary — please share your location in the enquiry form and our team will confirm.",
  },
];

/**
 * "How Can We Help?" quick-select enquiry options. `serviceValue` maps to an
 * entry in `serviceOptions` so selecting one can preselect the booking form's
 * service dropdown; `null` leaves the choice to the visitor.
 */
export const enquiryTypes: { id: string; label: string; serviceValue: string | null }[] = [
  { id: "book-test", label: "I want to book a diagnostic test", serviceValue: null },
  { id: "service-question", label: "I have a question about a service", serviceValue: null },
  { id: "report-help", label: "I need help with my report", serviceValue: "Digital Reports" },
  {
    id: "research",
    label: "I have a research requirement",
    serviceValue: "Research / Documentation / Validation Enquiry",
  },
  {
    id: "documentation",
    label: "I have a documentation requirement",
    serviceValue: "Research / Documentation / Validation Enquiry",
  },
  {
    id: "validation",
    label: "I have a validation requirement",
    serviceValue: "Research / Documentation / Validation Enquiry",
  },
  { id: "other", label: "Other enquiry", serviceValue: null },
];

/** Generic conceptual flow covering any enquiry type — diagnostic or scientific. */
export const patientJourney = [
  { step: "01", title: "Choose", description: "Choose a service or describe your requirement." },
  { step: "02", title: "Send", description: "Send a request through the form, call or WhatsApp." },
  {
    step: "03",
    title: "Connect",
    description: "Our team connects with you to confirm the next step.",
  },
  {
    step: "04",
    title: "Complete",
    description: "Complete the required diagnostic or scientific process.",
  },
  {
    step: "05",
    title: "Receive",
    description: "Receive your report, information or service output.",
  },
];

export const legal = {
  intro:
    "Please review our terms of use and privacy practices below. If you have any questions, contact us using the details on this page.",
  terms: [
    "Website use and appointments are subject to confirmation by our team.",
    "Pricing and availability are confirmed at the time of booking through our official channels.",
    "Additional or custom services may be subject to separate terms.",
    "Website content is informational and does not replace professional medical advice.",
  ],
  privacy: [
    "Enquiry information we collect may include your name, contact details, service preference and message content.",
    "We may use cookies and analytics tools to help us understand site usage and improve your experience.",
    "We retain enquiry information only as long as necessary and take reasonable steps to protect it.",
    "For privacy-related questions or requests, contact us at info@resonancediagnostic.com.",
  ],
};

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=80",
    thumb:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=70",
    alt: "Diagnostic equipment",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1400&q=80",
    thumb:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=70",
    alt: "Sample processing",
    category: "Processing",
  },
  {
    src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1400&q=80",
    thumb:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=70",
    alt: "Medical laboratory environment",
    category: "Laboratory",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    thumb:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=70",
    alt: "Laboratory professional working with equipment",
    category: "Laboratory",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    thumb:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=70",
    alt: "Professional clinical laboratory",
    category: "Laboratory",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    thumb:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=70",
    alt: "Healthcare professional reviewing diagnostic information",
    category: "Care",
  },
];

export const heroTrustPoints = [
  { title: "Accurate", description: "Precise & Trusted Results" },
  { title: "Reliable", description: "Timely Reports, You Can Count On" },
  { title: "Convenient", description: "Home Sample Collection for Your Comfort" },
];

export const heroStats = [
  { value: "Trusted by", label: "Thousands", isHeadline: true },
  { title: "State-of-the-art", label: "Laboratory" },
  { title: "Research & Validation", label: "Driven" },
  { title: "Experienced", label: "Professionals" },
  { title: "Secure & Confidential", label: "Process" },
];

/**
 * Indicative test/service catalogue for the homepage explorer. Names reflect
 * common, generic diagnostic categories rather than a confirmed lab menu —
 * swap in Kargill Healthcare's approved test list when available.
 */
export const testCatalogNote =
  "This is an indicative list to help you explore. Contact our team to confirm current availability.";

export const testCategories = [
  "Blood Tests",
  "Diabetes",
  "Thyroid",
  "Heart Health",
  "Women's Health",
  "Men's Health",
  "Preventive Health",
] as const;

export type TestCategory = (typeof testCategories)[number];

export const testCatalog: {
  id: string;
  name: string;
  category: TestCategory;
  description: string;
  prep?: string;
}[] = [
  {
    id: "cbc",
    name: "Complete Blood Count",
    category: "Blood Tests",
    description: "A routine blood screening covering common blood-health parameters.",
  },
  {
    id: "hba1c",
    name: "HbA1c",
    category: "Diabetes",
    description: "Reflects average blood sugar levels over recent months.",
  },
  {
    id: "fasting-glucose",
    name: "Fasting Blood Glucose",
    category: "Diabetes",
    description: "A fasting blood sugar screening test.",
    prep: "Typically requires fasting — confirm timing when booking.",
  },
  {
    id: "thyroid-profile",
    name: "Thyroid Profile",
    category: "Thyroid",
    description: "A panel assessing thyroid gland function.",
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile",
    category: "Heart Health",
    description: "Assesses cholesterol and related cardiovascular risk markers.",
    prep: "May require fasting — confirm timing when booking.",
  },
  {
    id: "ecg",
    name: "ECG",
    category: "Heart Health",
    description: "A routine recording of the heart's electrical activity.",
  },
  {
    id: "vitamin-d",
    name: "Vitamin D",
    category: "Preventive Health",
    description: "Screens for vitamin D levels as part of routine wellness checks.",
  },
  {
    id: "liver-function",
    name: "Liver Function Test",
    category: "Preventive Health",
    description: "A panel assessing common liver-health markers.",
  },
  {
    id: "kidney-function",
    name: "Kidney Function Test",
    category: "Preventive Health",
    description: "A panel assessing common kidney-health markers.",
  },
  {
    id: "womens-wellness",
    name: "Women's Wellness Panel",
    category: "Women's Health",
    description: "A general screening panel oriented around women's preventive health.",
  },
  {
    id: "mens-wellness",
    name: "Men's Wellness Panel",
    category: "Men's Health",
    description: "A general screening panel oriented around men's preventive health.",
  },
];

/**
 * Placeholder editorial topics for the homepage insights preview. No articles
 * are published yet — these are topic ideas, not claims of existing content.
 */
export const insightsPreview: { category: string; title: string; excerpt: string }[] = [
  {
    category: "Diagnostics",
    title: "Understanding Diagnostic Testing",
    excerpt:
      "A plain-language look at how diagnostic tests fit into everyday healthcare decisions.",
  },
  {
    category: "Preventive Health",
    title: "Why Preventive Screening Matters",
    excerpt: "How routine, preventive checkups support better-informed long-term health choices.",
  },
  {
    category: "Research & Diagnostics",
    title: "How Research Shapes Better Diagnostics",
    excerpt:
      "A look at how structured research and validation inform dependable diagnostic practice.",
  },
];

/**
 * Team preview categories. No individual names, photos or qualifications are
 * published here — only verified team information should ever be added.
 */
export const teamCategories: { role: string; note: string; icon: IconName }[] = [
  {
    role: "Director",
    note: "Leadership details to be added.",
    icon: "team",
  },
  {
    role: "Medical & Scientific Team",
    note: "Team profiles to be added.",
    icon: "microscope",
  },
  {
    role: "Research Team",
    note: "Team profiles to be added.",
    icon: "flask",
  },
];

/* ==========================================================================
 * Services page — Diagnostics / Research / Documentation / Validation
 * ========================================================================== */

/** Quick-jump pillar navigation at the top of the Services page. */
export const servicePillars: {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    id: "diagnostics",
    step: "01",
    title: "Diagnostics",
    description: "Diagnostic testing, preventive screening and health packages.",
    icon: "vial",
  },
  {
    id: "research",
    step: "02",
    title: "Research",
    description: "Structured research and evidence generation.",
    icon: "flask",
  },
  {
    id: "documentation",
    step: "03",
    title: "Documentation",
    description: "Scientific, technical and quality documentation.",
    icon: "document",
  },
  {
    id: "validation",
    step: "04",
    title: "Validation",
    description: "Evaluation of methods, processes or systems, where applicable.",
    icon: "shield",
  },
];

/**
 * Research highlight cards. These are drawn directly from the single
 * approved research description elsewhere on the site (not separate,
 * unverified specialisations) so nothing here overstates scope.
 */
export const researchHighlights: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Structured Studies",
    description: "Research carried out through defined, structured processes.",
    icon: "flask",
  },
  {
    title: "Scientific Investigation",
    description: "Investigation grounded in scientific method and evidence.",
    icon: "microscope",
  },
  {
    title: "Evidence Generation",
    description: "Generating evidence to support informed decision-making.",
    icon: "target",
  },
];

/** Same approach as researchHighlights — decomposing the approved copy, not inventing new scope. */
export const documentationHighlights: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Technical Documentation",
    description: "Technical records maintained as part of diagnostic and scientific processes.",
    icon: "document",
  },
  {
    title: "Scientific Documentation",
    description: "Documentation supporting research and scientific activity.",
    icon: "microscope",
  },
  {
    title: "Quality Documentation",
    description: "Documentation supporting consistent, quality-oriented workflows.",
    icon: "shield",
  },
];

export const documentationFlow = [
  {
    step: "01",
    title: "Input",
    description: "Relevant scientific, technical or quality information is gathered.",
  },
  {
    step: "02",
    title: "Document",
    description: "Information is prepared into a structured record.",
  },
  {
    step: "03",
    title: "Review",
    description: "Documentation is reviewed for accuracy and clarity.",
  },
  {
    step: "04",
    title: "Record",
    description: "Reviewed documentation is maintained as a formal record.",
  },
  { step: "05", title: "Reference", description: "Records remain available for future reference." },
];

/** Conceptual only — see disclaimer rendered alongside this on the page. */
export const validationFlow = [
  {
    step: "01",
    title: "Define",
    description: "The method, process or system requirement is defined.",
  },
  {
    step: "02",
    title: "Test",
    description: "Relevant testing is carried out against that requirement.",
  },
  {
    step: "03",
    title: "Evaluate",
    description: "Results are evaluated against the intended outcome.",
  },
  { step: "04", title: "Document", description: "Findings are documented as part of the process." },
  {
    step: "05",
    title: "Verify",
    description: "Suitability is verified before conclusions are relied upon.",
  },
];

/**
 * Conceptual workflow only — not every diagnostic test necessarily follows
 * all six stages. Presented as a framework, not an operational guarantee.
 */
export const serviceJourney = [
  {
    step: "01",
    title: "Understand",
    description: "Identify the healthcare or scientific requirement.",
  },
  { step: "02", title: "Plan", description: "Define the appropriate service or process." },
  {
    step: "03",
    title: "Execute",
    description: "Perform the relevant diagnostic, research or technical activity.",
  },
  { step: "04", title: "Document", description: "Record relevant findings and outputs." },
  {
    step: "05",
    title: "Validate",
    description: "Apply appropriate verification or validation where required.",
  },
  {
    step: "06",
    title: "Deliver",
    description: "Provide the resulting report, information or service output.",
  },
];

export const whoWeHelp: {
  audience: string;
  points: string[];
  icon: IconName;
  cta: { label: string; to: string; hash?: string };
}[] = [
  {
    audience: "Patients",
    points: ["Diagnostic testing", "Preventive screening", "Health packages"],
    icon: "heart",
    cta: { label: "Explore Diagnostics", to: "/services", hash: "diagnostics" },
  },
  {
    audience: "Doctors",
    points: ["Specialised diagnostics", "Digital reports"],
    icon: "microscope",
    cta: { label: "Explore Diagnostics", to: "/services", hash: "diagnostics" },
  },
  {
    audience: "Researchers",
    points: ["Research support", "Documentation", "Validation"],
    icon: "flask",
    cta: { label: "Explore Research", to: "/services", hash: "research" },
  },
  {
    audience: "Institutions",
    points: ["Corporate health programs", "Scientific support"],
    icon: "building",
    cta: { label: "Contact Resonance", to: "/contact", hash: "corporate" },
  },
];

export const servicesFaqs: { q: string; a: string }[] = [
  {
    q: "How can I book a diagnostic test?",
    a: "Fill in the enquiry form on our Contact page with your preferred test or package, and our team will confirm your appointment.",
  },
  {
    q: "How do I know which diagnostic service I need?",
    a: "Explore the diagnostic categories on this page, or contact our team for guidance in choosing the right service.",
  },
  {
    q: "Do you provide preventive health packages?",
    a: "Yes. See our Health Packages above for curated preventive screening options.",
  },
  {
    q: "Can I discuss a research project?",
    a: "Yes. Use the research contact option on this page, or get in touch with our team directly.",
  },
  {
    q: "What documentation services are available?",
    a: "Please contact our team for current availability and scope.",
  },
  {
    q: "What validation services are available?",
    a: "Please contact our team for current availability and scope.",
  },
  {
    q: "How can I contact the Resonance team?",
    a: "Call or WhatsApp us, email us, or use the enquiry form on our Contact page — our team typically responds within one business day.",
  },
];
