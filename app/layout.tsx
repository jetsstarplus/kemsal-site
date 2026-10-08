import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemsal.co.ke"),
  title: {
    default: "KEMSAL Consultants Ltd.",
    template: "%s | KEMSAL Consultants Ltd.",
  },
  description:
    "KEMSAL Consultants Ltd. is a Kenyan quantity surveying, project management, and research firm delivering cost control, development advisory, and construction oversight across Kenya.",
  applicationName: "KEMSAL Consultants Ltd.",
  keywords: [
    "KEMSAL Consultants Ltd.",
    "quantity surveying Kenya",
    "project management Kenya",
    "construction cost management",
    "cost consultancy Kenya",
    "development research Kenya",
    "affordable housing Kenya",
    "construction project advisory",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://kemsal.co.ke",
    title: "KEMSAL Consultants Ltd.",
    siteName: "KEMSAL Consultants Ltd.",
    description:
      "Precision in construction and cost management across Kenya, with project management, quantity surveying, and research support for public and private sector clients.",
    images: [
      {
        url: "/main-site-og.jpeg",
        width: 1200,
        height: 630,
        alt: "KEMSAL Consultants project and development portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KEMSAL Consultants Ltd.",
    description:
      "Kenyan quantity surveying, project management, and research consultancy for housing, infrastructure, and investment decisions.",
    images: ["/main-site-og.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${heading.variable} ${body.variable} bg-base text-slate-900 antialiased`}>
        <div className="relative min-h-screen bg-linear-to-br from-surface to-base text-slate-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.09),transparent_35%)]" />
          <Navbar />
          <main className="relative z-10 pb-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
