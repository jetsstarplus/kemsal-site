import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "Explore KEMSAL Consultants Ltd.’s portfolio of affordable housing, residential, commercial, institutional, and research-led projects across Kenya.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "KEMSAL Project Portfolio",
    description:
      "See how KEMSAL Consultants Ltd. delivers strategic, cost-conscious construction and development projects across Kenya.",
    url: "https://kemsal.co.ke/projects",
    type: "website",
    images: [
      {
        url: "/projects/lumumba-affordable-housing/floor_plan_1.png",
        width: 1200,
        height: 630,
        alt: "Lumumba Affordable Housing project preview",
      },
    ],
  },
  twitter: {
    title: "KEMSAL Project Portfolio",
    description:
      "Explore KEMSAL’s affordable housing, institutional, and strategic development projects across Kenya.",
    images: ["/projects/lumumba-affordable-housing/floor_plan_1.png"],
  },
};

export default function Page() {
  return <ProjectsPage />;
}
