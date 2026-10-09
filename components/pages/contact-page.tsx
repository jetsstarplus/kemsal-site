"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="section-shell space-y-10 pt-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="font-display text-4xl text-slate-900">Let’s discuss your project.</h1>
        <p className="max-w-3xl text-lg text-muted">
          Share your brief, and we’ll propose the cost and delivery controls that fit. We typically respond within one business day.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          className="glass-panel w-full space-y-4 p-4 sm:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-900">
              <span>Full name</span>
              <input className="w-full rounded-xl border border-outline bg-white px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Your name" />
            </label>
            <label className="space-y-2 text-sm text-slate-900">
              <span>Company</span>
              <input className="w-full rounded-xl border border-outline bg-white px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Company or organization" />
            </label>
            <label className="space-y-2 text-sm text-slate-900">
              <span>Email</span>
              <input type="email" className="w-full rounded-xl border border-outline bg-white px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="you@example.com" />
            </label>
            <label className="space-y-2 text-sm text-slate-900">
              <span>Phone</span>
              <input className="w-full rounded-xl border border-outline bg-white px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Mobile number" />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-900">
            <span>Project summary</span>
            <textarea className="h-32 w-full rounded-xl border border-outline bg-white px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Brief description, goals, and timeline" />
          </label>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-strong"
          >
            Send message
          </button>
          <p className="text-xs text-muted">Form is non-functional in this preview. Connect to your preferred email or CRM when ready.</p>
        </motion.form>

        <motion.div
          className="glass-panel w-full space-y-5 p-4 sm:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Phone size={16} className="text-primary" />
              +254 (0) 720 899 815
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Phone size={16} className="text-primary" />
              +254 (0) 713 809 029
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Mail size={16} className="text-primary" />
              info@kemsal.com
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Location</p>
            <div className="flex items-start gap-2 text-sm text-muted">
              <MapPin size={16} className="text-primary" />
              <span>Highway Heights, 7th Floor, Office 1 and 2, Marcus Garvey Road, Off Argwings Kodhek Road</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <iframe
              src="https://www.google.com/maps?q=Highway%20Heights%20Marcus%20Garvey%20Road%20Off%20Argwings%20Kodhek%20Road%20Nairobi&output=embed"
              className="h-[260px] w-full max-w-full border-0 sm:h-80 md:h-[420px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
