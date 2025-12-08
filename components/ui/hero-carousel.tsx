"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  ClipboardCheck,
  LineChart,
  Sparkles,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: "intro",
    tag: "Welcome to KEMSAL",
    title: "Precision in Construction. Certainty in Cost.",
    description:
      "Leading quantity surveying and project management for Kenya's future—delivering disciplined cost control, speed, and clarity from feasibility to handover.",
    cta: { label: "Explore Our Work", href: "/projects" },
    icon: <Sparkles size={24} />,
    accent: "from-slate-900 via-primary-strong to-slate-900",
    images: [
      {
        src: "/projects/kehancha-estate/kehancha.jpg",
        alt: "African construction workers on site",
        position: "right-[5%] top-[15%]",
        size: "w-72 h-96",
        rotate: "rotate-3",
        delay: 0.2,
      },
      {
        src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
        alt: "Structural steel framework",
        position: "right-[25%] bottom-[10%]",
        size: "w-56 h-72",
        rotate: "-rotate-6",
        delay: 0.4,
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
        alt: "Architectural blueprints and plans",
        position: "right-[2%] bottom-[20%]",
        size: "w-40 h-52",
        rotate: "rotate-6",
        delay: 0.6,
      },
    ],
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
    description:
      "From feasibility through to final accounts—our QS services deliver traceable BoQs, rigorous tender management, and real-time cost dashboards.",
    cta: { label: "View QS Services", href: "/services" },
    icon: <ClipboardCheck size={24} />,
    accent: "from-emerald-900 via-emerald-700 to-slate-900",
    images: [
      {
        src: "/projects/lumumba-affordable-housing/image_2.jpg",
        alt: "Architectural drawings and blueprints",
        position: "right-[8%] top-[12%]",
        size: "w-80 h-[400px]",
        rotate: "-rotate-2",
        delay: 0.2,
      },
      {
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
        alt: "Engineer reviewing structural plans",
        position: "right-[30%] bottom-[8%]",
        size: "w-52 h-64",
        rotate: "rotate-6",
        delay: 0.4,
      },
      {
        src: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=400&q=80",
        alt: "Construction measurement and surveying",
        position: "right-[3%] bottom-[15%]",
        size: "w-44 h-56",
        rotate: "-rotate-3",
        delay: 0.5,
      },
    ],
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
    description:
      "End-to-end construction management with clear schedules, proactive risk control, and seamless stakeholder communication.",
    cta: { label: "Learn More", href: "/services" },
    icon: <Building2 size={24} />,
    accent: "from-amber-900 via-amber-700 to-slate-900",
    images: [
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        alt: "Construction site with workers",
        position: "right-[6%] top-[10%]",
        size: "w-[320px] h-[420px]",
        rotate: "rotate-2",
        delay: 0.2,
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
        alt: "Project managers reviewing plans",
        position: "right-[32%] bottom-[12%]",
        size: "w-48 h-60",
        rotate: "-rotate-6",
        delay: 0.35,
      },
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
        alt: "High-rise building under construction",
        position: "right-[5%] bottom-[18%]",
        size: "w-40 h-52",
        rotate: "rotate-6",
        delay: 0.5,
      },
    ],
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
    description:
      "Market intelligence, feasibility studies, and cost databases that give investors the clarity they need to move forward with confidence.",
    cta: { label: "Explore Research", href: "/services" },
    icon: <LineChart size={24} />,
    accent: "from-sky-900 via-sky-700 to-slate-900",
    images: [
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        alt: "Cost analysis and financial planning",
        position: "right-[8%] top-[8%]",
        size: "w-[340px] h-[380px]",
        rotate: "-rotate-1",
        delay: 0.2,
      },
      {
        src: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&q=80",
        alt: "Technical drawings and specifications",
        position: "right-[35%] bottom-[10%]",
        size: "w-44 h-56",
        rotate: "rotate-6",
        delay: 0.4,
      },
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
        alt: "Modern commercial building",
        position: "right-[3%] bottom-[22%]",
        size: "w-48 h-60",
        rotate: "-rotate-4",
        delay: 0.55,
      },
    ],
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
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id + "-bg"}
          className={`absolute inset-0 bg-linear-to-br ${slide.accent}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(245,179,1,0.2),transparent_50%)]" />

        {/* Animated shapes */}
        <motion.div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.4, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal lines */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 w-[200%] -rotate-45 bg-white"
              style={{ top: `${i * 15}%`, left: "-50%" }}
            />
          ))}
        </div>
      </div>

      {/* Creative Image Gallery */}
      <div className="absolute inset-0 hidden lg:block">
        <AnimatePresence mode="sync">
          {slide.images.map((img, idx) => (
            <motion.div
              key={slide.id + "-img-" + idx}
              className={`absolute ${img.position} ${img.size} ${img.rotate}`}
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.8, delay: img.delay, ease: "easeOut" }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/30 to-amber-400/20 opacity-60 blur-2xl" />

              {/* Image container */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/40">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 400px"
                  priority={idx === 0}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-white/10" />
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-2 -top-2 h-8 w-8 rounded-lg bg-primary/80 backdrop-blur-sm" />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute right-[15%] top-[8%] h-20 w-20 rounded-full border-4 border-white/10"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-[40%] bottom-[25%] h-3 w-3 rounded-full bg-primary"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[12%] bottom-[40%] h-2 w-2 rounded-full bg-amber-400"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-center py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-content"}
            className="max-w-2xl space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tag Badge */}
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-primary to-amber-500 text-white shadow-lg">
                {slide.icon}
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                {slide.tag}
              </span>
            </motion.div>

            {/* Title with animated words */}
            <motion.h1
              className="font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {slide.title.split(". ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                  {i < slide.title.split(". ").length - 1 && "."}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {slide.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-10 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              {slide.stats.map((stat, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-4 top-0 h-full w-1 rounded-full bg-linear-to-b from-primary to-amber-500" />
                  <p className="font-display text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <Link
                href={slide.cta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-2xl shadow-black/25 transition-all hover:-translate-y-1 hover:shadow-primary/20"
              >
                {slide.cta.label}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/15"
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="section-shell">
            <div className="flex items-center justify-between">
              {/* Progress Dots */}
              <div className="flex items-center gap-4">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(i)}
                    className="group relative"
                    aria-label={`Go to slide ${i + 1}: ${s.tag}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === current
                          ? "w-12 bg-white"
                          : "w-6 bg-white/30 group-hover:bg-white/50"
                      }`}
                    />
                    {/* Progress bar for current slide */}
                    {i === current && !isPaused && (
                      <motion.div
                        className="absolute left-0 top-0 h-1 rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 7, ease: "linear" }}
                        key={current}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                  aria-label={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>

                {/* Prev/Next */}
                <button
                  onClick={prev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 hover:scale-105"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 hover:scale-105"
                  aria-label="Next slide"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            {/* Slide Counter */}
            <div className="mt-4 flex items-center gap-2 text-white/60">
              <span className="font-display text-2xl font-bold text-white">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">/</span>
              <span className="text-sm">{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-white/30 p-2">
          <motion.div
            className="h-3 w-1.5 rounded-full bg-white"
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
