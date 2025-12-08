export type ProjectBase = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  description: string;
  role: string;
  services: string[];
  metrics: { label: string; value: string }[];
  folder: string;
  heroImage: string;
};

export const projects: ProjectBase[] = [
  {
    slug: "lumumba-affordable-housing",
    title: "Lumumba Affordable Housing",
    category: "Affordable Housing",
    location: "Kisumu",
    summary: "Over 500 units with precise cost control and phase scheduling.",
    description:
      "Comprehensive QS and PMO support for a multi-phase affordable housing scheme, balancing speed with cost certainty and transparent dashboards for stakeholders.",
    role: "Lead Quantity Surveyor & PMO overseeing BoQs, procurement phasing, and variance control.",
    services: ["BoQs & cost planning", "Tendering & procurement", "Valuations and contract administration", "Cost reporting dashboards"],
    metrics: [
      { label: "Units delivered", value: "500+" },
      { label: "Cost variance", value: "4.5%" },
      { label: "Counties", value: "Kisumu" },
    ],
    folder: "lumumba-affordable-housing",
    heroImage: "/projects/lumumba-affordable-housing/lumumba.png",
  },
  {
    slug: "kanyakwar-estate",
    title: "Kanyakwar Estate",
    category: "Affordable Housing",
    location: "Kisumu",
    summary: "High-density scheme with efficient material procurement strategies.",
    description:
      "High-density housing delivered on compressed timelines with disciplined procurement cycles and transparent site reporting for investors and authorities.",
    role: "QS lead coordinating procurement, valuations, and schedule-risk alignment.",
    services: ["Procurement strategy", "Schedule-risk alignment", "Valuations", "Quality and cost controls"],
    metrics: [
      { label: "Phases", value: "3" },
      { label: "Procurement savings", value: "6%" },
      { label: "Delivery", value: "On-schedule" },
    ],
    folder: "kanyakwar-estate",
    heroImage: "/projects/kanyakwar-estate/kanyakwar.png",
  },
  {
    slug: "kehancha-estate",
    title: "Kehancha Estate",
    category: "Residential",
    location: "Migori County",
    summary: "Estate rollout emphasizing speed without compromising quality checks.",
    description:
      "Residential estate program with strict QA/QC gates, disciplined BoQs, and contractor alignment to maintain speed while protecting quality benchmarks.",
    role: "QS and PM support focused on QA/QC gates and cost discipline.",
    services: ["BoQs & cost control", "QA/QC coordination", "Contractor alignment", "Risk and change control"],
    metrics: [
      { label: "QA/QC gates", value: "12" },
      { label: "Variance", value: "<5%" },
      { label: "Stakeholders", value: "Multi-party" },
    ],
    folder: "kehancha-estate",
    heroImage: "/projects/kehancha-estate/kehancha.jpg",
  },
  {
    slug: "epza-business-parks",
    title: "EPZA Business Parks",
    category: "Research/Consultancy",
    location: "Nationwide",
    summary: "Feasibility and cost benchmarking for special economic zone expansion.",
    description:
      "Feasibility studies and cost databases that informed SEZ expansion decisions, giving investors clarity on benchmarks and procurement models.",
    role: "Research and cost advisory with benchmarking and investment-grade reporting.",
    services: ["Feasibility studies", "Cost databases", "Benchmarking", "Investment-grade reporting"],
    metrics: [
      { label: "Sites reviewed", value: "7" },
      { label: "Benchmark set", value: "Yes" },
      { label: "Decision clarity", value: "High" },
    ],
    folder: "epza-business-parks",
    heroImage: "/projects/epza-business-parks/epza.svg",
  },
];
export function getProjectBySlug(slug: string): ProjectBase | undefined {
  return projects.find((p) => p.slug === slug);
}
