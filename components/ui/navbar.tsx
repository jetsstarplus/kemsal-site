'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-30 border-b border-white/50 backdrop-blur-xl transition-all duration-200 ${
        scrolled ? "bg-surface/95 shadow-lg shadow-slate-900/5" : "bg-surface/80"
      }`}
    >
      <div
        className={`section-shell flex items-center justify-between transition-all duration-200 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
            <Building2 size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">KEMSAL</p>
            <p className="font-display text-lg font-semibold">Consultants Ltd.</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-primary"
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-strong sm:inline-flex"
        >
          <Phone size={16} />
          Schedule a Call
        </Link>
        <div className="md:hidden" />
      </div>
    </header>
  );
}
