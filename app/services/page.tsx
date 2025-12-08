"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardList,
  Clock3,
  HardHat,
  LineChart,
  Scale,
  Target,
  ArrowRight,
  CheckCircle2,
  FileText,
  Calculator,
  BarChart3,
  Shield,
  Users,
  Briefcase,
} from "lucide-react";

const services = [
  {
    title: "Quantity Surveying",
    description:
      "Pre- and post-contract expertise: BoQs, cost plans, tender evaluation, contract administration, valuations, value engineering, and final accounts aligned to international and Kenyan standards.",
    bullets: [
      "BoQ preparation & cost planning",
      "Tendering support and evaluation",
      "Contract administration & valuations",
      "Value engineering and final accounts",
    ],
    icon: <ClipboardList size={28} />,
    color: "from-emerald-500 to-emerald-600",
    details: [
      { icon: <FileText size={18} />, label: "Accurate BoQs", desc: "Detailed bills of quantities with transparent assumptions" },
      { icon: <Calculator size={18} />, label: "Cost Planning", desc: "Early-stage estimates to final account reconciliation" },
      { icon: <Scale size={18} />, label: "Contract Admin", desc: "Interim valuations, variations, and claims management" },
    ],
  },
  {
    title: "Construction Project Management",
    description:
      "Full lifecycle leadership: scope, schedule, quality, and stakeholder communication. Clear program controls, risk registers, and site governance to keep delivery on time and on budget.",
    bullets: [
      "Programme and schedule management",
      "Risk and change control",
      "Quality assurance and HSE coordination",
      "Stakeholder dashboards and reporting",
    ],
    icon: <HardHat size={28} />,
    color: "from-primary to-primary-strong",
    details: [
      { icon: <Clock3 size={18} />, label: "Schedule Control", desc: "Critical path management and milestone tracking" },
      { icon: <Shield size={18} />, label: "Risk Management", desc: "Proactive identification and mitigation strategies" },
      { icon: <Users size={18} />, label: "Coordination", desc: "Multi-party alignment and site governance" },
    ],
  },
  {
    title: "Research & Cost Surveys",
    description:
      "Feasibility studies, cost databases, and market analysis that inform bankable decisions for investors, developers, and public agencies.",
    bullets: [
      "Feasibility and business cases",
      "Benchmarking and cost databases",
      "Supply chain and market analysis",
      "Performance audits for existing assets",
    ],
    icon: <LineChart size={28} />,
    color: "from-amber-500 to-amber-600",
    details: [
      { icon: <BarChart3 size={18} />, label: "Feasibility Studies", desc: "Investment-grade analysis for informed decisions" },
      { icon: <Briefcase size={18} />, label: "Cost Databases", desc: "Benchmarking data across project types" },
      { icon: <Target size={18} />, label: "Market Intelligence", desc: "Supply chain and procurement insights" },
    ],
  },
];

const pillars = [
  { title: "Accuracy", icon: <Target size={20} />, detail: "QS rigor with transparent assumptions and auditable logs." },
  { title: "Speed", icon: <Clock3 size={20} />, detail: "Tight programs, rapid reporting, and fast stakeholder alignment." },
  { title: "Control", icon: <Scale size={20} />, detail: "Risk-aware decisions that balance cost, time, and quality." },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your project scope, constraints, and success criteria" },
  { step: "02", title: "Planning", desc: "Developing cost estimates, schedules, and procurement strategies" },
  { step: "03", title: "Execution", desc: "Active management with real-time monitoring and reporting" },
  { step: "04", title: "Delivery", desc: "Final accounts, lessons learned, and project closeout" },
];

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary-strong to-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(245,179,1,0.15),transparent_40%)]" />
        <div className="absolute -left-32 top-1/4 h-64 w-96 -rotate-12 rounded-[80px] bg-white/5 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rotate-12 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="section-shell relative z-10">
          <motion.div
            className="max-w-3xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Our Services</p>
            <h1 className="font-display text-5xl leading-tight">
              Discipline Across Cost, Delivery & Intelligence
            </h1>
            <p className="text-lg text-white/80">
              KEMSAL delivers quantity surveying, project management, and research as one integrated engine—so budgets, schedules, and site quality stay in sync from feasibility to handover.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-shell py-24">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className={`space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${service.color} text-white shadow-lg`}>
                  {service.icon}
                </div>
                <h2 className="font-display text-3xl text-slate-900">{service.title}</h2>
                <p className="text-muted">{service.description}</p>
                <div className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  Discuss your project <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`grid gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {service.details.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    className="group rounded-2xl bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                    initial={{ opacity: 0, x: idx % 2 === 1 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${service.color} text-white`}>
                        {detail.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{detail.label}</h4>
                        <p className="mt-1 text-sm text-muted">{detail.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.p>
            <motion.h2
              className="mt-3 font-display text-4xl text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How We Deliver Results
            </motion.h2>
            <motion.p
              className="mt-4 text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A proven methodology that ensures transparency, accountability, and successful project outcomes.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                className="relative rounded-2xl bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="font-display text-5xl font-bold text-primary/10">{item.step}</span>
                <h3 className="mt-2 font-display text-xl text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
                {idx < process.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white md:flex">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-shell py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Delivery Ethos</p>
            <h2 className="font-display text-4xl text-slate-900">Accuracy & Speed Are Non-Negotiable</h2>
            <p className="text-muted">
              We build audit-ready QS outputs, risk-aware programs, and simple dashboards that give executives and site teams the same view of reality.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5"
            >
              Learn About Our Team <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-slate-900">{pillar.title}</h3>
                  <p className="mt-1 text-muted">{pillar.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Get Started</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Ready to Discuss Your Project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Whether you need a full QS package, project management support, or feasibility analysis—we&apos;re here to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-primary shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
