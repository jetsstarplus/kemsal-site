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
  title: "KEMSAL Consultants Ltd.",
  description: "Precision in construction and cost management across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
