export type Project = {
  id: string;
  index: string; // coordinate-style label, e.g. "01"
  name: string;
  role: string;
  period: string;
  summary: string;
  detail: string;
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
    id: "mattel",
    index: "03",
    name: "Data Governance & Commerce Infrastructure",
    role: "Software & Digital IT Intern — Mattel EMEA",
    period: "Jul 2024 – Jul 2025",
    summary:
      "A year-long placement spanning AI rollout, data governance, and live e-commerce — including a $3.5M+ product drop with zero tolerance for downtime.",
    detail:
      "Standardised MattelPaedia, Mattel's internal business glossary, resolving terminology overlaps and structuring definitions in Collibra to support scalable data governance. Built and maintained Mattel Creations' UK/DE storefronts in Liquid/JS, including custom APIs and Klaviyo integration. Validated backend JSON logs and Shopify distribution signals to protect data integrity for the Hot Wheels Overdrive subscription service through bi-weekly drops. Solo-delivered Mattel's EMEA Town Hall on MattelGPT after a co-presenter fell ill — introduced by the EMEA lead — helping drive adoption of the internal AI platform regionally.",
    stack: ["Data Governance", "Liquid / JS", "Shopify", "Collibra", "Klaviyo"],
    kind: "case-study",
  },
  {
    id: "freelance",
    index: "04",
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
