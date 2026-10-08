import type { Metadata } from "next";
import { MethodologyPage } from "@/components/pages/methodology-page";

export const metadata: Metadata = {
  title: "Our Methodology",
  description:
    "Learn how KEMSAL Consultants Ltd. manages feasibility, design, procurement, project delivery, and post-contract controls through a disciplined methodology for transparent project outcomes.",
  alternates: {
    canonical: "/methodology",
  },
  openGraph: {
    title: "KEMSAL Methodology",
    description:
      "Explore KEMSAL’s step-by-step methodology for cost control, procurement, delivery oversight, and accountability from inception to completion.",
    url: "https://kemsal.co.ke/methodology",
    type: "website",
    images: [
      {
        url: "/projects/upper-kanyakwar-affordable-housing/Project-3-Image-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Affordable housing and project control methodology preview",
      },
    ],
  },
  twitter: {
    title: "KEMSAL Methodology",
    description:
      "How KEMSAL Consultants Ltd. manages project feasibility, design control, tendering, and delivery oversight with discipline and accountability.",
    images: ["/projects/upper-kanyakwar-affordable-housing/Project-3-Image-1.jpeg"],
  },
};

export default function Page() {
  return <MethodologyPage />;
}
