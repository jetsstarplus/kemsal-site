"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const methodologyStages = [
  {
    title: "Inception / Feasibility Stage",
    description:
      "We advise on project expenditure by phase, assess budget constraints, compare alternative materials and designs, and appraise the economic and physical realities affecting implementation. This stage produces an informed initial project budget and confirms whether the concept is feasible in principle.",
    bullets: [
      "Preliminary cost studies and budget guidance",
      "Comparative review of design, material, and construction options",
      "Assessment of market conditions, price trends, and project constraints",
      "Initial budget preparation and feasibility advice",
    ],
    icon: <Gauge size={28} />,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Design Stage",
    description:
      "Our quantity surveyors outline the cost implications of design decisions and provide effective cost control mechanisms throughout the design process. We help maintain a balanced design, ensure cost limits are respected, and advise on procurement approaches and appropriate contract forms.",
    bullets: [
      "Cost plan development and design-stage cost control",
      "Advice on cost-effective design solutions",
      "Selection of suitable procurement route and contract form",
      "Economic review of project alternatives and design options",
    ],
    icon: <FileText size={28} />,
    color: "from-primary to-primary-strong",
  },
  {
    title: "Tender Documentation Stage",
    description:
      "We prepare accurate tender documents based on the chosen appointment method. This includes detailed measurement and preparation of Bills of Quantities, approximate quantities, schedules of rates, specifications, and conditions for carrying out the works. We also manage tender evaluation and recommend the most suitable contractor.",
    bullets: [
      "Preparation of Bills of Quantities and tender schedules",
      "Specification and contract documentation",
      "Advice on contractor selection and tender procedures",
      "Tender analysis and recommendation reporting",
    ],
    icon: <ClipboardList size={28} />,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Works Supervision",
    description:
      "During construction, our role shifts to post-contract administration. We monitor cost, check expenditure against the approved budget, assess interim valuations, evaluate claims, advise on fluctuations, and prepare the final account for settlement between client and contractor.",
    bullets: [
      "Cost checks, budget tracking, and control during construction",
      "Interim valuations and advice on financial commitments",
      "Evaluation of contractual claims and dispute support",
      "Measurement of provisional items and final account reconciliation",
    ],
    icon: <ShieldCheck size={28} />,
    color: "from-sky-500 to-sky-600",
  },
];

const projectManagementScope = [
  "Pre- and post-contract coordination and management of project activities",
  "Efficient cost control, timely completion, and high-quality project delivery",
  "Feasibility studies with specialists to define technical and financial viability",
  "Transaction advisory support for complex infrastructure and project transactions",
  "Investment appraisal to guide prudent economic decisions and optimize returns",
  "Project scope definition and preparation of project master programmes",
  "Consultant appointment, design coordination, and communication procedures",
  "Risk analysis, value engineering, and mitigation planning",
  "Procurement support, condition surveys, and technical audits",
  "Client representation for stakeholders who require surrogate project oversight",
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary-strong to-slate-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(245,179,1,0.18),transparent_40%)]" />
        <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="section-shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Methodology</p>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              How KEMSAL Undertakes Works
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/80">
              Our methodology is built around disciplined project control, transparent communication, and cost-conscious decision-making from inception to completion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="space-y-20">
          {methodologyStages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${stage.color} text-white shadow-lg`}>
                  {stage.icon}
                </div>
                <h2 className="mt-6 font-display text-3xl text-slate-900">{stage.title}</h2>
                <p className="mt-4 text-muted">{stage.description}</p>
                <div className="mt-6 space-y-3">
                  {stage.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="mt-0.5 text-emerald-500" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-3xl bg-slate-50 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center justify-between border-b border-outline pb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Stage {idx + 1}</span>
                    <Building2 size={20} className="text-primary" />
                  </div>
                  <div className="mt-6 space-y-5">
                    {stage.bullets.map((bullet, bulletIdx) => (
                      <div key={bullet} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {bulletIdx + 1}
                        </div>
                        <p className="text-sm text-slate-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Project Management</p>
            <h2 className="mt-3 font-display text-4xl text-slate-900">Driving efficient, timely, and quality project delivery</h2>
            <p className="mt-4 text-muted">
              In this role, KEMSAL coordinates pre- and post-contract activities to ensure that project objectives are met in the areas of cost efficiency, time control, and scope quality.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectManagementScope.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase size={18} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-4xl bg-linear-to-br from-slate-900 via-slate-800 to-primary-strong p-12 text-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Our Operating Principle</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Delivering value with clarity, quality, and accountability
            </h2>
            <p className="mt-6 text-lg text-slate-200">
              From feasibility to final account, KEMSAL applies a disciplined and transparent approach so clients can make informed decisions with confidence, protect project budgets, and complete works to the required standard.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Discuss your project
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
