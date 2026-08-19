export type Project = {
  id: string;
  index: string; // coordinate-style label, e.g. "01"
  name: string;
  role: string;
  period: string;
  summary: string;
  detail: string;
  highlights?: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  kind: "code" | "case-study";
};

export const PROJECTS: Project[] = [
  {
    id: "kubebench",
    index: "01",
    name: "KubeBench (KAT)",
    role: "Final Year Dissertation",
    period: "2025",
    summary:
      "A Kubernetes autoscaler benchmarking platform — simulates HPA/VPA strategies against realistic load without needing real infrastructure.",
    detail:
      "Built a pipeline converting BPMN workflow diagrams into OWL-S ontologies into Kubernetes configs, so complex load scenarios can be designed visually and reproduced exactly. Orchestrates KWOK (Kubernetes WithOut Kubelet) as a lightweight cluster simulator, then scores autoscaler performance on response time, resource waste, and estimated cost across AWS/GCP/Azure. Includes five pre-built scenarios: traffic surges, dependency failures, batch processing, chaos injection, and rolling deployments.",
    stack: ["Python", "Kubernetes", "KWOK", "BPMN / OWL-S"],
    links: [{ label: "GitHub", href: "https://github.com/SeanavC/KubeBench" }],
    kind: "code",
  },
  {
    id: "doc-classifier",
    index: "02",
    name: "Insurance Document Classifier",
    role: "Personal Project — In Progress",
    period: "2025 – present",
    summary:
      "An ML pipeline that classifies scanned document images by type, built as a proper versioned Python package rather than a notebook.",
    detail:
      "Transfer learning on MobileNetV2 against RVL-CDIP-style document categories, with a structured train/validation/test pipeline and automated testing via pytest. Currently extending toward OCR text extraction and containerised AWS deployment, moving it from classifier to a full classify-and-summarise service.",
    stack: ["Python", "PyTorch", "scikit-learn", "pandas", "pytest"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SeanavC/Document-classifier-and-summariser",
      },
    ],
    kind: "code",
  },
  {
    id: "mattel-creations",
    index: "03",
    name: "Mattel Creations — UK & DE Storefronts",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "Full-stack development of Mattel's UK & DE Creations DTC storefronts, from setup and testing through live Agile sprints.",
    detail:
      "Played a key role in the setup and end-to-end testing of UK & DE Mattel Creations, Mattel's direct-to-consumer collector platforms — building region-specific storefronts with AI-powered translations, custom JavaScript/HTML/CSS, and pre-order functionality. Delivered as part of Agile sprint teams, writing JavaScript, CSS, and HTML, and configuring Shopify storefronts through JSON and Liquid, collaborating with product managers on feature rollouts and QA on ticket testing.",
    stack: ["JavaScript", "Liquid", "Shopify", "HTML / CSS", "Agile"],
    kind: "case-study",
  },
  {
    id: "rlc-overdrive",
    index: "04",
    name: "RLC Overdrive Members Club",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "Full-stack development, business analysis, and bug-hunting on Mattel's $3.5M+ Hot Wheels Overdrive subscription platform.",
    detail:
      "Supported the 2025 Hot Wheels Overdrive launch across the stack — assisting product setup, configuring the subscription model, and validating backend JSON logs and Shopify distribution signals to protect data integrity through bi-weekly drops. Combined hands-on development with business analysis and QA, surfacing and resolving bugs ahead of a $3.5M+ subscription service going live.",
    stack: ["JSON", "Shopify", "Business Analysis", "QA / Bug Triage"],
    kind: "case-study",
  },
  {
    id: "mattelgpt",
    index: "05",
    name: "MattelGPT EMEA Rollout",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "Drove EMEA adoption of Mattel's internal AI platform — demoing to regional markets and solo-delivering the UK Town Hall.",
    detail:
      "Facilitated the EMEA rollout of MattelGPT, Mattel's internal AI platform, demoing to regional markets and supporting adoption across departments. When the senior business lead scheduled to present fell ill on adoption day, stepped in to solo-deliver the UK office Town Hall as an intern.",
    stack: ["AI Adoption", "Stakeholder Demos", "Change Enablement"],
    kind: "case-study",
  },
  {
    id: "hr-booking",
    index: "06",
    name: "HR Booking System",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "Automated HR executive scheduling for career mentorship sessions, saving 150+ hours of admin time a year at zero added cost.",
    detail:
      "Built a Microsoft Bookings configuration to automate scheduling for 1:1 mentorship sessions between employees and senior business leads, replacing manual admin coordination. Saved the HR team over 150 hours of admin time annually, running on a license Mattel already held — so at no added cost.",
    stack: ["Microsoft Bookings", "Process Automation", "HR Systems"],
    kind: "case-study",
  },
  {
    id: "mattel-governance",
    index: "07",
    name: "Data Governance — MattelPaedia → Collibra",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "Led the technical migration of Mattel's internal business glossary into Collibra, enabling scalable data governance documentation.",
    detail:
      "Led the technical mapping of MattelPaedia, Mattel's internal business glossary, into Collibra — resolving terminology overlaps and structuring definitions to support scalable data governance documentation across the business.",
    stack: ["Collibra", "Data Governance"],
    kind: "case-study",
  },
  {
    id: "pnl-analysis",
    index: "08",
    name: "Historical P&L Discrepancy Analysis",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "Reviewed historical Profit & Loss records to identify and flag data discrepancies using Excel and SQL.",
    detail:
      "Analysed historical Profit & Loss records to identify discrepancies against source data, using Excel for reconciliation and SQL to query and cross-check the underlying financial data.",
    stack: ["Excel", "SQL", "Financial Analysis"],
    kind: "case-study",
  },
  {
    id: "freelance",
    index: "09",
    name: "Freelance — Trade Business Site",
    role: "Independent Client Work",
    period: "2025 – present",
    summary:
      "A React/Next.js site for a plumbing & boiler engineering client, shipped and iterated with continuous deployment.",
    detail:
      "Designed, built, and deployed a Next.js site on Vercel with CD wired to Git push/pull, so client-requested changes ship without manual deploys. Implemented on-page SEO — metadata, semantic structure, page speed — to improve local search visibility for trade services in the client's coverage area.",
    stack: ["React", "Next.js", "Vercel", "SEO"],
    kind: "code",
  },
  {
    id: "embers-eve",
    index: "10",
    name: "Embers Eve Productions",
    role: "Freelance — Wix Development",
    period: "2025",
    summary:
      "A Wix site for a friend's theatre production company, with Buy Me a Coffee donation integration.",
    detail:
      "Designed and built the website for Embers Eve Productions, a theatre production company, on Wix — including a Buy Me a Coffee integration so the company could accept donations directly through the site.",
    stack: ["Wix", "Buy Me a Coffee"],
    links: [{ label: "Live Site", href: "https://www.embereveproductions.com/" }],
    kind: "case-study",
  },
];

export const SKILLS = {
  Languages: ["Python", "JavaScript / TypeScript", "SQL", "Java", "PHP", "HTML / CSS"],
  "Tools & Platforms": [
    "React / Next.js",
    "AWS (Solutions Architect Associate — in progress)",
    "Kubernetes",
    "Git / GitHub",
    "Shopify",
    "Jira",
  ],
  Practices: [
    "Agile / Scrum delivery",
    "Data governance & documentation",
    "Code review",
    "Stakeholder communication",
  ],
};

export const LINKS = {
  github: "https://github.com/SeanavC",
  linkedin: "https://linkedin.com/in/seanav-chattopadhyay-82968525b",
  email: "cseanav@gmail.com",
  resume: "/Seanav_Chattopadhyay_CV.pdf",
};

export const NAV_SECTIONS = [
  { id: "home", label: "Home", coord: "00" },
  { id: "about", label: "About", coord: "01" },
  { id: "work", label: "Work", coord: "02" },
  { id: "skills", label: "Skills", coord: "03" },
  { id: "contact", label: "Contact", coord: "04" },
];
