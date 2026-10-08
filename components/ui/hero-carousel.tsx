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
    tag: "KEMSAL Project Journey",
    title: "From Need to Delivered Value.",
    description:
      "We shape housing, infrastructure, and institutional projects through disciplined planning, cost control, and delivery oversight that keeps every stakeholder aligned.",
    cta: { label: "Explore Our Work", href: "/projects" },
    icon: <Sparkles size={24} />,
    accent: "from-slate-900 via-primary-strong to-slate-900",
    journey: ["Vision", "Planning", "Delivery"],
    images: [
      {
        src: "/projects/lumumba-affordable-housing/Project-1-Image-1.jpeg",
        alt: "Affordable housing project progress",
        position: "right-[5%] top-[12%] lg:right-[8%] xl:right-[10%] 2xl:right-[12%]",
        size: "w-[260px] h-[340px] lg:w-[310px] lg:h-[410px] xl:w-[380px] xl:h-[500px] 2xl:w-[420px] 2xl:h-[560px]",
        rotate: "rotate-2",
        delay: 0.2,
      },
      {
        src: "/projects/kanyakwar-estate/kanyakwar.png",
        alt: "Project masterplan and housing vision",
        position: "right-[25%] bottom-[12%] lg:right-[34%] xl:right-[36%]",
        size: "w-[180px] h-[220px] lg:w-[220px] lg:h-[270px] xl:w-[250px] xl:h-[300px]",
        rotate: "-rotate-6",
        delay: 0.4,
      },
      {
        src: "/projects/kehancha-estate/kehancha.jpg",
        alt: "Project site and team coordination",
        position: "right-[2%] bottom-[16%] lg:right-[4%] lg:bottom-[12%]",
        size: "w-[120px] h-[150px] lg:w-[150px] lg:h-[190px] xl:w-[170px] xl:h-[210px]",
        rotate: "rotate-6",
        delay: 0.6,
      },
    ],
    stats: [
      { value: "100+", label: "Projects" },
      { value: "15+", label: "Counties" },
      { value: "10Y+", label: "Experience" },
    ],
  },
  {
    id: "qs",
    tag: "Quantity Surveying",
    title: "Clarity in Cost. Confidence in Delivery.",
    description:
      "Our quantity surveying work keeps budgets honest, contracts governable, and final accounts transparent from feasibility to close-out.",
    cta: { label: "View QS Services", href: "/services" },
    icon: <ClipboardCheck size={24} />,
    accent: "from-emerald-900 via-emerald-700 to-slate-900",
    journey: ["Feasibility", "Tendering", "Final Accounts"],
    images: [
      {
        src: "/projects/lumumba-affordable-housing/floor_plan_1.png",
        alt: "Quantity surveying and floor planning",
        position: "right-[6%] top-[12%] lg:right-[10%] xl:right-[12%]",
        size: "w-[270px] h-[330px] lg:w-[320px] lg:h-[400px] xl:w-[390px] xl:h-[480px]",
        rotate: "-rotate-2",
        delay: 0.2,
      },
      {
        src: "/projects/lumumba-affordable-housing/image_2.jpg",
        alt: "Residential scheme drawings",
        position: "right-[26%] bottom-[8%] lg:right-[36%] xl:right-[38%]",
        size: "w-[190px] h-[240px] lg:w-[230px] lg:h-[290px] xl:w-[270px] xl:h-[330px]",
        rotate: "rotate-6",
        delay: 0.4,
      },
      {
        src: "/projects/upper-kanyakwar-affordable-housing/Project-3-Image-1.jpeg",
        alt: "Affordable housing layout and site insight",
        position: "right-[2%] bottom-[14%] lg:right-[4%] lg:bottom-[12%]",
        size: "w-[130px] h-[160px] lg:w-[160px] lg:h-[200px] xl:w-[180px] xl:h-[220px]",
        rotate: "-rotate-3",
        delay: 0.5,
      },
    ],
    stats: [
      { value: "12%", label: "Average Savings" },
      { value: "4.5%", label: "Variance" },
      { value: "100%", label: "Traceability" },
    ],
  },
  {
    id: "pm",
    tag: "Project Management",
    title: "A Managed Journey from Site Start to Handover.",
    description:
      "We coordinate design teams, contractors, and stakeholders to keep projects moving with fewer surprises, better communication, and stronger accountability.",
    cta: { label: "Learn More", href: "/services" },
    icon: <Building2 size={24} />,
    accent: "from-amber-900 via-amber-700 to-slate-900",
    journey: ["Mobilisation", "Execution", "Handover"],
    images: [
      {
        src: "/projects/advent-towers-riverside/Project-2-Image-1.jpeg",
        alt: "Residential tower project under development",
        position: "right-[4%] top-[11%] lg:right-[9%] xl:right-[12%]",
        size: "w-[300px] h-[390px] lg:w-[350px] lg:h-[470px] xl:w-[420px] xl:h-[560px]",
        rotate: "rotate-2",
        delay: 0.2,
      },
      {
        src: "/projects/west-kenya-union-apartments/Project-17-Image-2.png",
        alt: "Multi-unit residential project progress",
        position: "right-[25%] bottom-[12%] lg:right-[33%] xl:right-[35%]",
        size: "w-[180px] h-[220px] lg:w-[220px] lg:h-[270px] xl:w-[260px] xl:h-[330px]",
        rotate: "-rotate-6",
        delay: 0.35,
      },
      {
        src: "/projects/upper-kanyakwar-affordable-housing/Project-3-Image-1.jpeg",
        alt: "Affordable housing development execution",
        position: "right-[2%] bottom-[15%] lg:right-[4%] lg:bottom-[12%]",
        size: "w-[130px] h-[170px] lg:w-[165px] lg:h-[210px] xl:w-[190px] xl:h-[235px]",
        rotate: "rotate-6",
        delay: 0.5,
      },
    ],
    stats: [
      { value: "95%", label: "On-Time Oversight" },
      { value: "Multi", label: "Stakeholders" },
      { value: "Zero", label: "Unplanned Drift" },
    ],
  },
  {
    id: "research",
    tag: "Research & Advisory",
    title: "Evidence That Moves Projects Forward.",
    description:
      "We turn market intelligence, feasibility studies, and cost data into actionable decisions for investors, developers, and public-sector partners.",
    cta: { label: "Explore Research", href: "/services" },
    icon: <LineChart size={24} />,
    accent: "from-sky-900 via-sky-700 to-slate-900",
    journey: ["Research", "Appraisal", "Impact"],
    images: [
      {
        src: "/projects/dedan-kimathi-science-technology-park/Project-15-Image-1.png",
        alt: "Commercial planning and investment case",
        position: "right-[5%] top-[11%] lg:right-[10%] xl:right-[12%]",
        size: "w-[280px] h-[330px] lg:w-[330px] lg:h-[390px] xl:w-[400px] xl:h-[470px]",
        rotate: "-rotate-1",
        delay: 0.2,
      },
      {
        src: "/projects/epza-commercial-development-athi-river/Project-12-Image-1.png",
        alt: "Industrial and commercial development planning",
        position: "right-[25%] bottom-[10%] lg:right-[34%] xl:right-[36%]",
        size: "w-[180px] h-[220px] lg:w-[210px] lg:h-[260px] xl:w-[250px] xl:h-[310px]",
        rotate: "rotate-6",
        delay: 0.4,
      },
      {
        src: "/projects/eldoret-eco-industrial-park/Project-8-Image-1.png",
        alt: "Industrial park concept and infrastructure vision",
        position: "right-[2%] bottom-[16%] lg:right-[4%] lg:bottom-[12%]",
        size: "w-[130px] h-[160px] lg:w-[160px] lg:h-[200px] xl:w-[180px] xl:h-[220px]",
        rotate: "-rotate-4",
        delay: 0.55,
      },
    ],
    stats: [
      { value: "7", label: "Strategic Studies" },
      { value: "National", label: "Reach" },
      { value: "Clear", label: "Decision-making" },
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
      <div className="pointer-events-none absolute inset-0">
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(245,179,1,0.2),transparent_50%)]" />

        {/* Animated shapes */}
        <motion.div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
          animate={{ scale: [1.2, 1, 1.25], opacity: [0.6, 0.35, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[18%] top-[18%] h-24 w-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, -24, 0], x: [0, 10, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
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
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <AnimatePresence mode="sync">
          {slide.images.map((img, idx) => (
            <motion.div
              key={slide.id + "-img-" + idx}
              className={`absolute ${img.position} ${img.size} ${img.rotate}`}
              initial={{ opacity: 0, scale: 0.82, x: 24, y: 46 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: [0, -10, 0],
              }}
              exit={{ opacity: 0, scale: 0.9, x: -14, y: -20 }}
              transition={{
                duration: 0.9,
                delay: img.delay,
                ease: [0.22, 1, 0.36, 1],
                y: {
                  duration: 7 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.6,
                },
              }}
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
            className="pointer-events-auto relative z-30 max-w-2xl space-y-8"
            initial={{ opacity: 0, x: 45, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, y: -12, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tag Badge */}
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-[0_0_30px_rgba(255,255,255,0.12)] backdrop-blur-md"
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

            {/* Project Journey Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slide.journey.map((item, idx) => (
                <motion.div
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.08, duration: 0.45 }}
                >
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/80 text-[9px] text-white">
                    {idx + 1}
                  </span>
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-10 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              {slide.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.45 }}
                >
                  <motion.div
                    className="absolute -left-4 top-0 h-full w-1 rounded-full bg-linear-to-b from-primary to-amber-500"
                    animate={{ opacity: [0.7, 1, 0.7], scaleY: [1, 1.08, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  />
                  <p className="font-display text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </p>
                </motion.div>
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
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-2xl shadow-black/25 transition-all hover:-translate-y-1 hover:shadow-primary/20"
              >
                {slide.cta.label}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/15"
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
                    className="group relative cursor-pointer"
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
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                  aria-label={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>

                {/* Prev/Next */}
                <button
                  onClick={prev}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 hover:scale-105"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 hover:scale-105"
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
