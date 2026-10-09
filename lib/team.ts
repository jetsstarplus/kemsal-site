export type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  summary: string;
  bio: string;
  focusAreas: string[];
  qualifications: string[];
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "olivia-sally-otieno",
    name: "Olivia Sally Otieno",
    role: "Director",
    specialty: "Quantity Surveying & Project Management",
    summary:
      "Directs KEMSAL’s strategic delivery across feasibility, project cost control, contract administration, and high-value public and private sector development work.",
    bio:
      "Olivia Sally Otieno is a registered quantity surveyor and construction project manager with a strong record in feasibility studies, cost planning, procurement support, tender documentation, and project governance. Her leadership style blends technical discipline with practical stakeholder management, enabling clients to navigate complex delivery environments with confidence, financial clarity, and measurable value.",
    focusAreas: [
      "Feasibility studies",
      "Project cost control",
      "Tender documentation",
      "Contract administration",
    ],
    qualifications: [
      "Ph.D. in Construction Management (ongoing), University of Nairobi",
      "M.A. in Construction Management, University of Nairobi",
      "B.A. in Building Economics, University of Nairobi",
      "Registered Quantity Surveyor, BORAQS",
    ],
    image: "/team/olivia-otieno.svg",
  },
  {
    id: "charity-juma",
    name: "Charity Juma",
    role: "Senior Quantity Surveyor",
    specialty: "Cost Management & Contract Delivery",
    summary:
      "Delivers cost planning, tender evaluation, and contract-based financial control that keeps development and infrastructure projects commercially disciplined from inception to close-out.",
    bio:
      "Charity Juma brings a strong foundation in construction cost management, tender preparation, valuation, and contract administration. Her work supports clients in managing project risk, maintaining cost transparency, and ensuring that delivery remains aligned to budget, scope, and schedule across a wide range of construction assignments.",
    focusAreas: [
      "Cost planning",
      "Tender evaluation",
      "Interim valuations",
      "FIDIC/PPOA/JBC contracts",
    ],
    qualifications: [
      "M.A. in Construction Management, University of Nairobi",
      "B. Quantity Surveying, University of Nairobi",
      "Registered Quantity Surveyor, BORAQS",
      "Member, IQSK and AAK",
    ],
    image: "/team/charity-juma.svg",
  },
  {
    id: "gabriel-odhiambo",
    name: "Gabriel Odiwuor Odhiambo",
    role: "Quantity Surveyor",
    specialty: "Commercial Management & Project Support",
    summary:
      "Provides practical commercial support across estimating, cost reporting, and contract-sensitive project delivery for residential, commercial, and institutional developments.",
    bio:
      "Gabriel Odiwuor Odhiambo brings hands-on quantity surveying experience and a strong construction management foundation to project delivery. His work spans cost estimation, value tracking, contract administration, and project reporting, helping teams maintain commercial control while supporting efficient implementation on site.",
    focusAreas: [
      "BoQ preparation",
      "Cost estimates",
      "Project reporting",
      "Commercial support",
    ],
    qualifications: [
      "B. Quantity Surveying, University of Nairobi",
      "Master’s in Construction Management (ongoing), University of Nairobi",
      "Member, IQSK and MAAK (QS)",
    ],
    image: "/team/gabriel-odhiambo.svg",
  },
  {
    id: "samwel-nachami",
    name: "Samwel Gideon Nachami",
    role: "Quantity Surveyor",
    specialty: "Cost Advice & Construction Administration",
    summary:
      "Supports complex development and infrastructure projects through cost analysis, tender documentation, and disciplined contract administration.",
    bio:
      "Samwel Gideon Nachami is a quantity surveyor with a strong understanding of feasibility studies, cost planning, interim valuations, financial appraisals, and contract management. He contributes practical commercial insight and structured reporting to both public and private sector assignments, helping clients maintain accountability and control throughout project execution.",
    focusAreas: [
      "Cost analysis",
      "Tender documentation",
      "Cash-flow planning",
      "Contract interpretation",
    ],
    qualifications: [
      "B. Quantity Surveying, University of Nairobi",
      "M.A. in Construction Management (ongoing), University of Nairobi",
      "Registered Quantity Surveyor, BORAQS",
      "Member, IQSK and AAK",
    ],
    image: "/team/samwel-nachami.svg",
  },
];
