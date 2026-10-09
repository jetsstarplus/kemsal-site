import type { Metadata } from "next";
import { TeamPage } from "@/components/pages/team-page";

export const metadata: Metadata = {
  title: "Our Team | KEMSAL Consultants Ltd.",
  description:
    "Meet the KEMSAL Consultants team delivering cost management, project oversight, and development advisory with discipline and accountability.",
  alternates: {
    canonical: "/about/team",
  },
  openGraph: {
    title: "Our Team | KEMSAL Consultants Ltd.",
    description:
      "Learn about the professionals behind KEMSAL’s quantity surveying, project management, and research delivery work.",
    url: "https://kemsal.co.ke/about/team",
    type: "website",
    images: [
      {
        url: "/team/james-wanjiru.svg",
        width: 1200,
        height: 630,
        alt: "KEMSAL team member profile preview",
      },
    ],
  },
  twitter: {
    title: "Our Team | KEMSAL Consultants Ltd.",
    description:
      "Meet the professionals behind KEMSAL’s client-focused delivery and advisory work.",
    images: ["/team/james-wanjiru.svg"],
  },
};

export default function Page() {
  return <TeamPage />;
}
