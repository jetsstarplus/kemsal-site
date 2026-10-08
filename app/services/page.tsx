import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Construction Cost Management & Project Management Services",
  description:
    "KEMSAL provides quantity surveying, construction project management, and research services for developers, investors, institutions, and public-sector clients across Kenya.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Construction Cost Management & Project Management Services",
    description:
      "Explore KEMSAL’s quantity surveying, project controls, and research services designed to keep projects on budget, on program, and aligned with client goals.",
    url: "https://kemsal.co.ke/services",
    type: "website",
    images: [
      {
        url: "/projects/upper-kanyakwar-affordable-housing/Project-3-Image-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Upper Kanyakwar Affordable Housing project preview",
      },
    ],
  },
  twitter: {
    title: "Construction Cost Management & Project Management Services",
    description:
      "Quantity surveying, project management, and research support for Kenya’s next development and infrastructure projects.",
    images: ["/projects/upper-kanyakwar-affordable-housing/Project-3-Image-1.jpeg"],
  },
};

export default function Page() {
  return <ServicesPage />;
}
