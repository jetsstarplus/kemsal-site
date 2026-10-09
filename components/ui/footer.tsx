import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Methodology", href: "/methodology" },
  { label: "Projects", href: "/projects" },
  { label: "News & Engagements", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/50 bg-surface/80 backdrop-blur-xl">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ">
              <Image
                src="/plain-logo.png"
                alt="KEMSAL Consultants Ltd. logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">KEMSAL Consultants Ltd.</p>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Precision in quantity surveying, project management, and development research across Kenya.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary">
            <a href="https://www.linkedin.com/company/kemsal-consultants-ltd/?originalSubdomain=ke" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary-strong">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/kemsalconsultants/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary-strong">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a href="https://x.com/KemsalL61267" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary-strong">
              <Twitter size={18} />
              <span>X</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-muted">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-primary" />
            <p>Highway Heights, 7th Floor, Office 1 and 2, Marcus Garvey Road, Off Argwings Kodhek Road</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <a href="tel:+254720899815" className="hover:text-primary">+254 (0) 720 899 815</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <a href="tel:+254713809029" className="hover:text-primary">+254 (0) 713 809 029</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            <a href="mailto:info@kemsal.com" className="hover:text-primary">info@kemsal.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/40 bg-white/50 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} KEMSAL Consultants Ltd. All rights reserved.
      </div>
    </footer>
  );
}
