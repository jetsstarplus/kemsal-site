"use client";

import { motion } from "framer-motion";
import { Award, Compass, Handshake, ShieldCheck, Users } from "lucide-react";

const values = [
  { title: "Accuracy", detail: "Audit-ready QS outputs with clear assumptions.", icon: <ShieldCheck size={18} /> },
  { title: "Speed", detail: "Schedules that keep decisions flowing and sites moving.", icon: <Compass size={18} /> },
  { title: "Partnership", detail: "Transparent communication with clients, contractors, and authorities.", icon: <Handshake size={18} /> },
];

const highlights = [
  {
    title: "Leadership",
    description: "Led by certified quantity surveyors and project managers with multi-sector experience across Kenya.",
    icon: <Award className="text-primary" size={22} />,
  },
  {
    title: "Methodology",
    description: "Documented processes for BoQs, valuations, risk reviews, and stakeholder reporting ensure repeatable quality.",
    icon: <ShieldCheck className="text-primary" size={22} />,
  },
  {
    title: "Collaboration",
    description: "We work shoulder-to-shoulder with architects, engineers, and contractors to keep scope, cost, and quality aligned.",
    icon: <Users className="text-primary" size={22} />,
  },
];

export default function AboutPage() {
  return (
    <div className="section-shell space-y-12">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">About</p>
        <h1 className="font-display text-4xl text-slate-900">KEMSAL Consultants Ltd.</h1>
        <p className="max-w-3xl text-lg text-muted">
          A Kenyan firm focused on quantity surveying, project management, and development research. We combine on-the-ground agility with standards that withstand rigorous scrutiny.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.title}
            className="glass-panel h-full space-y-3 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h2 className="font-display text-xl text-slate-900">{item.title}</h2>
            <p className="text-sm text-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Vision</p>
            <h3 className="font-display text-3xl text-slate-900">Building confidence in every Kenyan project.</h3>
            <p className="text-sm text-muted">
              We believe disciplined cost control, transparent reporting, and partnership-driven delivery create sustainable impact—whether in affordable housing, institutional builds, or industrial parks.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                className="glass-panel h-full space-y-2 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
              >
                <div className="flex items-center gap-2 text-primary">
                  {value.icon}
                  <p className="text-sm font-semibold text-slate-900">{value.title}</p>
                </div>
                <p className="text-xs text-muted">{value.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
