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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791871717715!2d36.81235867481147!3d-1.2996876438993052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e926fd2f29%3A0xde98d53a4626b059!2sKMA%20Centre!5e0!3m2!1sen!2ske!4v1765254151628!5m2!1sen!2ske" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
        </motion.div>
      </div>
    </div>
  );
}
