import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Quantity Surveying, Project Management & Research in Kenya",
  description:
    "KEMSAL Consultants Ltd. helps developers, governments, and investors deliver projects with precision through quantity surveying, project management, research, and cost consultancy across Kenya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quantity Surveying, Project Management & Research in Kenya",
    description:
      "KEMSAL Consultants Ltd. helps developers, governments, and investors deliver projects with precision through quantity surveying, project management, research, and cost consultancy across Kenya.",
    url: "https://kemsal.co.ke/",
    type: "website",
    images: [
      {
        url: "/main-site-og.jpeg",
        width: 1200,
        height: 630,
        alt: "KEMSAL Consultants Ltd. home page preview",
      },
    ],
  },
  twitter: {
    title: "Quantity Surveying, Project Management & Research in Kenya",
    description:
      "KEMSAL Consultants Ltd. helps developers, governments, and investors deliver projects with precision through quantity surveying, project management, research, and cost consultancy across Kenya.",
    images: ["/main-site-og.jpeg"],
  },
};

export default function Page() {
  return <HomePage />;
}
