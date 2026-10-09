import type { Metadata } from "next";
import { NewsPage } from "@/components/pages/news-page";

export const metadata: Metadata = {
  title: "News & Engagements | KEMSAL Consultants Ltd.",
  description:
    "Read about KEMSAL’s presentations, stakeholder engagements, and sector updates from Kenya’s quantity surveying and project management landscape.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "News & Engagements | KEMSAL Consultants Ltd.",
    description:
      "Read recent updates, presentations and engagement activity from the KEMSAL team.",
    url: "https://kemsal.co.ke/news",
    type: "website",
    images: [
      {
        url: "/main-site-og.jpeg",
        width: 1200,
        height: 630,
        alt: "KEMSAL News and engagements preview",
      },
    ],
  },
  twitter: {
    title: "News & Engagements | KEMSAL Consultants Ltd.",
    description: "Recent updates, presentations and stakeholder engagements from the KEMSAL team.",
    images: ["/main-site-og.jpeg"],
  },
};

export default function Page() {
  return <NewsPage />;
}
