"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Compass,
  Handshake,
  ShieldCheck,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  Building2,
  TrendingUp,
  Calendar,
  MapPin,
  Lightbulb,
  Heart,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Accuracy",
    detail: "Audit-ready QS outputs with clear assumptions and traceable calculations.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Speed",
    detail: "Schedules that keep decisions flowing and construction sites moving forward.",
    icon: <Compass size={24} />,
  },
  {
    title: "Partnership",
    detail: "Transparent communication with clients, contractors, and authorities at every stage.",
    icon: <Handshake size={24} />,
  },
  {
    title: "Innovation",
    detail: "Modern tools and methodologies that enhance efficiency and project outcomes.",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Integrity",
    detail: "Honest assessments and ethical practices that build lasting trust.",
    icon: <Heart size={24} />,
  },
  {
    title: "Excellence",
    detail: "Commitment to delivering quality that exceeds industry standards.",
    icon: <Award size={24} />,
  },
];

const highlights = [
  {
    title: "Expert Leadership",
    description:
      "Led by experienced quantity surveyors and project managers with a strong track record across housing, infrastructure, and development programmes in Kenya and East Africa.",
    icon: <Award size={28} />,
    stats: "10+ Years of Delivery",
  },
  {
    title: "Proven Methodology",
    description:
      "We apply structured processes for feasibility studies, cost planning, tender analysis, risk control, valuations, final accounts, and technical audits to ensure consistent, auditable outcomes.",
    icon: <Target size={28} />,
    stats: "Audit-Ready Processes",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with clients, consultants, contractors, financiers, and public agencies to maintain alignment on scope, cost, schedule, and quality throughout the project lifecycle.",
    icon: <Users size={28} />,
    stats: "Multi-Stakeholder Delivery",
  },
];

const stats = [
  { label: "Years in Business", value: 10, suffix: "+", icon: <Calendar size={20} /> },
  { label: "Projects Delivered", value: 100, suffix: "+", icon: <Building2 size={20} /> },
  { label: "Client Retention", value: 95, suffix: "%", icon: <TrendingUp size={20} /> },
  { label: "Counties Served", value: 15, suffix: "+", icon: <MapPin size={20} /> },
];

const timeline = [
  { year: "2014", title: "Foundation", description: "KEMSAL Consultants established in Nairobi" },
  { year: "2016", title: "First Major Project", description: "Awarded first government housing contract" },
  { year: "2018", title: "Regional Expansion", description: "Extended services to 10+ counties" },
  { year: "2020", title: "Research Division", description: "Launched development research consultancy" },
  { year: "2023", title: "100+ Projects", description: "Milestone of 100 completed projects" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-primary-strong py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="section-shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About Us</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-white md:text-6xl">
              Building Kenya&apos;s Future, {" "}
              <span className="bg-linear-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                One Project at a Time
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              KEMSAL Consultants Ltd. is a Kenyan professional firm focused on quantity surveying,
              project management, and development research. We combine on-the-ground agility with
              international-quality standards to deliver projects with clarity, accountability, and
              measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
              >
                <div className="mx-auto mb-2 w-fit text-primary">{stat.icon}</div>
                <p className="font-display text-3xl text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
          <h2 className="mt-3 font-display text-4xl text-slate-900">What Sets KEMSAL Apart</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="glass-panel h-full space-y-4 p-8 transition-shadow hover:shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary-strong text-white shadow-lg shadow-primary/25">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
                <div className="flex items-center gap-2 pt-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">{item.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-linear-to-br from-slate-900 to-primary-strong p-10 text-white"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <Target size={28} className="text-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Vision</p>
              <h3 className="mt-3 font-display text-3xl">
                Building confidence in every Kenyan project.
              </h3>
              <p className="mt-4 text-white/80">
                We envision a Kenya where every development project—from affordable housing to
                industrial parks—is delivered with precision, transparency, and sustainable impact
                for communities, investors, and the public sector.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white p-10 shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Compass size={28} className="text-primary" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Mission</p>
              <h3 className="mt-3 font-display text-3xl text-slate-900">
                Disciplined delivery, transparent partnership.
              </h3>
              <p className="mt-4 text-muted">
                To provide world-class quantity surveying and project management services that
                empower developers, government agencies, and investors to achieve their construction
                goals on time, within budget, and with full confidence in the quality and integrity
                of delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Values</p>
          <h2 className="mt-3 font-display text-4xl text-slate-900">The Principles That Guide Us</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-panel flex h-full items-start gap-4 p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg text-slate-900">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted">{value.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Journey</p>
            <h2 className="mt-3 font-display text-4xl text-slate-900">A Decade of Growth</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-primary via-primary/50 to-transparent md:block" />

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative md:flex md:items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`glass-panel p-6 ${
                        idx % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-display text-xl text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-white md:block" />
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-slate-900 via-slate-800 to-primary-strong py-20">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-4xl text-white">Ready to Work Together?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Let&apos;s discuss how KEMSAL can bring precision, transparency, and expertise to your
              next project.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-strong"
              >
                Get in Touch
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
