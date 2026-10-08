"use client";

import Link from "next/link";
import { motion, animate, useMotionValue, useTransform, useInView, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Building2, ClipboardCheck, LineChart, CheckCircle2, Users, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { ProjectCarousel } from "@/components/ui/project-carousel";

const services = [
  {
    title: "Quantity Surveying",
    description: "Pre-contract and post-contract quantity surveying covering feasibility studies, estimating, tender documents, BoQs, contract administration, valuations, claims, final accounts, and technical post-performance evaluation.",
    icon: <ClipboardCheck size={24} />,
    features: ["Feasibility & Cost Planning", "Tender & Contract Administration", "Valuations & Final Accounts"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Construction Project Management",
    description: "Scope definition, investment appraisal, procurement, risk analysis, value engineering, condition surveys, technical audits, and client representation across all phases of project delivery.",
    icon: <Building2 size={24} />,
    features: ["Scope & Procurement Control", "Risk & Value Engineering", "Client Representation & Audits"],
    color: "from-primary to-primary-strong",
  },
  {
    title: "Research & Advisory",
    description: "Target studies, cost surveys, feasibility work, and market intelligence to support informed investment, infrastructure, and development decisions for clients and financiers.",
    icon: <LineChart size={24} />,
    features: ["Target Studies", "Cost Surveys", "Investment & Market Appraisal"],
    color: "from-amber-500 to-amber-600",
  },
];

const whyUs = [
  { icon: <Shield size={20} />, title: "Audit-Ready Outputs", description: "Traceable QS delivery that stands up to client, lender, and regulator scrutiny." },
  { icon: <Zap size={20} />, title: "Speed & Precision", description: "Fast decisions and disciplined execution without compromising cost or quality." },
  { icon: <Users size={20} />, title: "Stakeholder Alignment", description: "Clear communication across developers, contractors, consultants, and authorities." },
  { icon: <CheckCircle2 size={20} />, title: "Proven Track Record", description: "10+ years delivering 100+ projects across Kenya and East Africa." },
];

const featuredProjects = projects.slice(0, 10);

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 1.4, ease: "easeOut" });
    }
  }, [inView, motionValue, value]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  return (
    <motion.span ref={ref} className="text-5xl font-display font-bold">
      {display}
      {suffix}
    </motion.span>
  );
}

export function HomePage() {
  return (
    <div className="space-y-0">
      <div className="">
        <HeroCarousel />
      </div>

      <section className="section-shell relative z-20 -mt-8">
        <motion.div
          className="grid gap-px overflow-hidden rounded-3xl bg-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.15)] md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: 10, suffix: "+", label: "Years in Business" },
            { value: 100, suffix: "+", label: "Projects Delivered" },
            { value: 15, suffix: "+", label: "Counties Served" },
            { value: 95, suffix: "%", label: "Client Retention" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="section-shell space-y-12 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.p>
          <motion.h2
            className="mt-3 font-display text-4xl text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comprehensive Construction Solutions
          </motion.h2>
          <motion.p
            className="mt-4 text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            KEMSAL supports developers, investors, and public-sector clients across Kenya with disciplined quantity surveying, project management, and research grounded in transparency, control, and measurable outcomes.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-linear-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
              
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.color} text-white shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="font-display text-xl text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              
              <div className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="section-shell">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why KEMSAL</p>
                <h2 className="mt-3 font-display text-4xl text-slate-900">Building Kenya&apos;s Future with Precision</h2>
                <p className="mt-4 text-muted">
                  We combine deep local insight with international-quality standards to help clients deliver projects with confidence, from affordable housing to strategic investment decisions.
                </p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5"
              >
                About Our Team <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary-strong to-slate-900 p-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.3)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%)]" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
                
                <div className="relative space-y-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-200">Client Success</p>
                  <blockquote className="font-display text-2xl leading-relaxed">
                    &quot;KEMSAL&apos;s discipline in cost control saved us 12% on procurement while keeping our housing project on schedule.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/20" />
                    <div>
                      <p className="font-semibold">Project Director</p>
                      <p className="text-sm text-white/70">Affordable Housing Initiative</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-amber-400 p-6 shadow-xl">
                <p className="font-display text-3xl font-bold text-slate-900">12%</p>
                <p className="text-sm font-medium text-slate-800">Avg Savings</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Portfolio</p>
              <h2 className="mt-3 font-display text-4xl text-slate-900">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-primary hover:text-primary"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 w-full">
            <ProjectCarousel projects={featuredProjects} />
          </div>
        </div>
      </section>
    </div>
  );
}
