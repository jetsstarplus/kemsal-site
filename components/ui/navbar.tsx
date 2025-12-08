'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Phone, Menu, X, ArrowRight } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky inset-x-0 top-0 z-40 border-b border-white/50 backdrop-blur-xl transition-all duration-200 ${
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

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-strong md:inline-flex"
          >
            <Phone size={16} />
            Schedule a Call
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-outline bg-white text-slate-700 transition hover:border-primary hover:text-primary md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="sync">
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              key="mobile-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Menu Header */}
                <div className="flex items-center justify-between border-b border-outline p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                      <Building2 size={20} />
                    </div>
                    <div className="leading-tight">
                      <p className="text-xs uppercase tracking-[0.15em] text-muted">KEMSAL</p>
                      <p className="font-display font-semibold text-slate-900">Consultants</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-outline text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-5">
                  <ul className="space-y-1">
                    {links.map((link, idx) => {
                      const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`group flex items-center justify-between rounded-xl px-4 py-3.5 font-medium transition ${
                              active
                                ? "bg-primary/10 text-primary"
                                : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                            }`}
                          >
                            {link.label}
                            <ArrowRight
                              size={16}
                              className={`transition-transform ${
                                active ? "text-primary" : "text-slate-400 group-hover:translate-x-1 group-hover:text-primary"
                              }`}
                            />
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Menu Footer */}
                <div className="border-t border-outline p-5">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-strong"
                  >
                    <Phone size={18} />
                    Schedule a Call
                  </Link>
                  <p className="mt-4 text-center text-xs text-muted">
                    Quantity Surveying • Project Management • Research
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
