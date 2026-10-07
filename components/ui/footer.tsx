import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Methodology", href: "/methodology" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/50 bg-surface/80 backdrop-blur-xl">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">KEMSAL Consultants Ltd.</p>
          <p className="max-w-sm text-sm text-muted">
            Precision in quantity surveying, project management, and development research across Kenya.
          </p>
          <div className="flex items-center gap-3 text-sm text-primary">
            <Linkedin size={18} />
            <span className="cursor-default">LinkedIn</span>
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
            <p>3rd Floor, KMA Centre, Mara Road, Upper Hill, Nairobi, Kenya</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <a href="tel:+254720899815" className="hover:text-primary">+254 (0) 720 899 815</a>
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
