"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
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
          className="glass-panel space-y-4 p-6"
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
          className="glass-panel space-y-5 p-6"
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
              <Mail size={16} className="text-primary" />
              info@kemsal.com
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Location</p>
            <div className="flex items-start gap-2 text-sm text-muted">
              <MapPin size={16} className="text-primary" />
              <span>3rd Floor, KMA Centre, Mara Road, Upper Hill, Nairobi, Kenya</span>
            </div>
          </div>
          <div className="rounded-2xl bg-linear-to-br from-slate-900 to-primary-strong p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold">Map placeholder</p>
            <p className="text-xs text-white/70">Embed your preferred mapping provider or static map image here.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
