import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact KEMSAL Consultants Ltd.",
  description:
    "Speak to KEMSAL Consultants Ltd. about your next quantity surveying, project management, or construction advisory requirement in Kenya.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact KEMSAL Consultants Ltd.",
    description:
      "Discuss your project with KEMSAL Consultants Ltd. for quantity surveying, cost management, and project coordination support.",
    url: "https://kemsal.co.ke/contact",
    type: "website",
    images: [
      {
        url: "/projects/kehancha-estate/image_3.jpeg",
        width: 1200,
        height: 630,
        alt: "KEMSAL project delivery and construction oversight preview",
      },
    ],
  },
  twitter: {
    title: "Contact KEMSAL Consultants Ltd.",
    description:
      "Get in touch with KEMSAL for project management, cost consultancy, and construction supervision support.",
    images: ["/projects/kehancha-estate/image_3.jpeg"],
  },
};

export default function Page() {
  return <ContactPage />;
}
