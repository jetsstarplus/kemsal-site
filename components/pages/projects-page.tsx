"use client";

import Link from "next/link";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Building2,
  Home,
  Landmark,
  Factory,
  FileSearch,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Users,
} from "lucide-react";
import { projects } from "@/lib/projects";

const categories = [
  { name: "All", icon: <Building2 size={16} /> },
  { name: "Affordable Housing", icon: <Home size={16} /> },
  { name: "Commercial", icon: <Factory size={16} /> },
  { name: "Residential", icon: <Home size={16} /> },
  { name: "Institutional", icon: <Landmark size={16} /> },
  { name: "Research/Consultancy", icon: <FileSearch size={16} /> },
];

const stats = [
  { label: "Projects Completed", value: 100, suffix: "+", icon: <CheckCircle2 size={20} /> },
  { label: "Years Experience", value: 10, suffix: "+", icon: <Calendar size={20} /> },
  { label: "Happy Clients", value: 85, suffix: "+", icon: <Users size={20} /> },
  { label: "Success Rate", value: 98, suffix: "%", icon: <TrendingUp size={20} /> },
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

export function ProjectsPage() {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-primary-strong py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="section-shell relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Portfolio</p>
            <h1 className="font-display text-5xl leading-tight text-white md:text-6xl">
              Projects That{" "}
              <span className="bg-linear-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Define Excellence
              </span>
            </h1>
            <p className="text-lg text-slate-300">
              Explore our portfolio of successful projects spanning affordable housing, commercial
              developments, institutional buildings, and strategic research initiatives across Kenya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mb-2 text-primary">{stat.icon}</div>
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
          className="mb-12"
        >
          <p className="mb-4 text-sm font-semibold text-slate-900">Filter by Category</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = category.name === active;
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setActive(category.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                      : "border-outline bg-white text-slate-700 hover:border-primary hover:text-primary"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex items-center gap-2"
        >
          <span className="text-sm text-muted">Showing</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {visible.length} projects
          </span>
          {active !== "All" && (
            <span className="text-sm text-muted">in {active}</span>
          )}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="glass-panel h-full overflow-hidden p-0 transition-shadow hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.heroImage})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                      <MapPin size={14} />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3 p-6">
                    <h2 className="font-display text-xl text-slate-900 transition-colors group-hover:text-primary">
                      {project.title}
                    </h2>
                    <p className="line-clamp-2 text-sm text-muted">{project.summary}</p>
                    
                    <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-primary">
                      View Case Study
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {visible.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-lg text-muted">No projects found in this category.</p>
            <button
              onClick={() => setActive("All")}
              className="mt-4 text-sm font-semibold text-primary hover:underline"
            >
              View all projects
            </button>
          </motion.div>
        )}
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
            <h2 className="font-display text-4xl text-white">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Let&apos;s discuss how we can bring your vision to life with precision cost management
              and expert project delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-strong"
              >
                Start a Conversation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
