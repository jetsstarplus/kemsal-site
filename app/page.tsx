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
    description: "Cost estimation, BoQs, tender management, and rigorous contract administration rooted in international standards.",
    icon: <ClipboardCheck size={24} />,
    features: ["Accurate BoQs", "Tender Management", "Contract Admin"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Project Management",
    description: "End-to-end delivery with clear schedules, risk control, and transparent stakeholder communication.",
    icon: <Building2 size={24} />,
    features: ["Schedule Control", "Risk Management", "Site Coordination"],
    color: "from-primary to-primary-strong",
  },
  {
    title: "Research & Advisory",
    description: "Market intelligence, feasibility studies, and cost databases that guide confident investment decisions.",
    icon: <LineChart size={24} />,
    features: ["Feasibility Studies", "Cost Databases", "Investment Reports"],
    color: "from-amber-500 to-amber-600",
  },
];

const whyUs = [
  { icon: <Shield size={20} />, title: "Audit-Ready Outputs", description: "Traceable documentation that withstands scrutiny" },
  { icon: <Zap size={20} />, title: "Speed & Precision", description: "Fast turnaround without compromising accuracy" },
  { icon: <Users size={20} />, title: "Stakeholder Alignment", description: "Clear communication across all project parties" },
  { icon: <CheckCircle2 size={20} />, title: "Proven Track Record", description: "2000+ housing units delivered successfully" },
];

const featuredProjects = projects.slice(0, 4);

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

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Carousel */}
      <div className="">
        <HeroCarousel />
      </div>

      {/* Floating Stats Bar */}
      <section className="section-shell relative z-20 -mt-8">
        <motion.div
          className="grid gap-px overflow-hidden rounded-3xl bg-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.15)] md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: 2000, suffix: "+", label: "Housing Units Delivered" },
            { value: 98, suffix: "%", label: "QS Accuracy Rate" },
            { value: 15, suffix: "+", label: "Counties Served" },
            { value: 12, suffix: "%", label: "Avg Procurement Savings" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
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
            From cost planning to project delivery, we provide end-to-end expertise that keeps your construction projects on track.
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

      {/* Why Choose Us */}
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
                  We combine deep local expertise with international standards to deliver construction projects that exceed expectations.
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

      {/* Featured Projects */}
      <section className="py-24">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Portfolio</p>
              <h2 className="mt-3 font-display text-4xl text-slate-900">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-2 rounded-full border border-outline bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5 md:inline-flex"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <ProjectCarousel projects={featuredProjects} />
        </div>

        <div className="section-shell mt-6 md:hidden">
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-outline bg-white px-5 py-3 text-sm font-semibold text-primary"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-shell pb-24">
        <motion.div
          className="relative overflow-hidden rounded-4xl bg-linear-to-br from-primary via-primary-strong to-slate-900 p-12 text-white shadow-[0_40px_120px_rgba(15,23,42,0.4)] md:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(245,179,1,0.2),transparent_40%)]" />
          <div className="absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-amber-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Start Your Project
            </motion.p>
            <motion.h2
              className="mt-4 font-display text-4xl leading-tight md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Build with Confidence?
            </motion.h2>
            <motion.p
              className="mx-auto mt-6 max-w-xl text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let&apos;s discuss your project and design the cost and delivery controls that fit your goals. Our team is ready to help.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-primary shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
