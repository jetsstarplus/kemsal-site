"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Building2, ClipboardCheck, LineChart, Sparkles } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: "intro",
    tag: "Welcome to KEMSAL",
    title: "Precision in Construction. Certainty in Cost.",
    description: "Leading quantity surveying and project management for Kenya's future—delivering disciplined cost control, speed, and clarity from feasibility to handover.",
    cta: { label: "Explore Our Work", href: "/projects" },
    icon: <Sparkles size={28} />,
    accent: "from-primary via-primary-strong to-slate-900",
    stats: [
      { value: "2000+", label: "Housing Units" },
      { value: "15+", label: "Counties" },
      { value: "98%", label: "QS Accuracy" },
    ],
  },
  {
    id: "qs",
    tag: "Quantity Surveying",
    title: "Accurate Estimates. Controlled Budgets.",
    description: "From feasibility through to final accounts—our QS services deliver traceable BoQs, rigorous tender management, and real-time cost dashboards.",
    cta: { label: "View QS Services", href: "/services" },
    icon: <ClipboardCheck size={28} />,
    accent: "from-emerald-600 via-emerald-700 to-slate-900",
    stats: [
      { value: "4.5%", label: "Avg Variance" },
      { value: "100+", label: "Projects" },
      { value: "12%", label: "Savings" },
    ],
  },
  {
    id: "pm",
    tag: "Project Management",
    title: "On Time. On Budget. Every Time.",
    description: "End-to-end construction management with clear schedules, proactive risk control, and seamless stakeholder communication.",
    cta: { label: "Learn More", href: "/services" },
    icon: <Building2 size={28} />,
    accent: "from-amber-500 via-amber-600 to-slate-900",
    stats: [
      { value: "95%", label: "On-Time Delivery" },
      { value: "Multi", label: "Party Alignment" },
      { value: "Zero", label: "Scope Creep" },
    ],
  },
  {
    id: "research",
    tag: "Research & Advisory",
    title: "Data-Driven Investment Decisions.",
    description: "Market intelligence, feasibility studies, and cost databases that give investors the clarity they need to move forward with confidence.",
    cta: { label: "Explore Research", href: "/services" },
    icon: <LineChart size={28} />,
    accent: "from-sky-500 via-sky-600 to-slate-900",
    stats: [
      { value: "7", label: "SEZ Studies" },
      { value: "National", label: "Coverage" },
      { value: "High", label: "Decision Clarity" },
    ],
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className={`absolute inset-0 bg-linear-to-br ${slide.accent}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(245,179,1,0.15),transparent_40%)]" />
      <div className="absolute -left-32 top-1/4 h-64 w-96 -rotate-12 rounded-[80px] bg-white/5 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rotate-12 rounded-full bg-amber-400/10 blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="section-shell relative z-10 flex min-h-[85vh] flex-col justify-center py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="max-w-4xl space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-white backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                {slide.icon}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">{slide.tag}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-display text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="max-w-2xl text-lg text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {slide.description}
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slide.stats.map((stat, i) => (
                <div key={i} className="text-white">
                  <p className="font-display text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href={slide.cta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {slide.cta.label}
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="section-shell flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                aria-label="Next slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
