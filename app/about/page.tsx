import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About KEMSAL Consultants Ltd.",
  description:
    "Learn about KEMSAL Consultants Ltd., a Kenyan quantity surveying, construction project management, and development research firm focused on disciplined delivery and measurable value.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About KEMSAL Consultants Ltd.",
    description:
      "Explore KEMSAL’s mission, values, methodology, and track record in quantity surveying and project management across Kenya.",
    url: "https://kemsal.co.ke/about",
    type: "website",
    images: [
      {
        url: "/projects/advent-towers-riverside/Project-2-Image-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Advent Towers Residential Suites development preview",
      },
    ],
  },
  twitter: {
    title: "About KEMSAL Consultants Ltd.",
    description:
      "Learn about KEMSAL’s mission, values, and delivery approach in quantity surveying and project management.",
    images: ["/projects/advent-towers-riverside/Project-2-Image-1.jpeg"],
  },
};

export default function Page() {
  return <AboutPage />;
}
