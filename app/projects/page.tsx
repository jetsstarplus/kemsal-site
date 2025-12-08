"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

const categories = ["All", "Affordable Housing", "Commercial", "Residential", "Institutional", "Research/Consultancy"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="section-shell space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Projects</p>
        <h1 className="font-display text-4xl text-slate-900">Experience across housing, commercial, and research mandates.</h1>
        <p className="max-w-3xl text-lg text-muted">
          Select a category to see representative projects. Each engagement pairs disciplined QS outputs with visible project controls for stakeholders.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const activeState = category === active;
          return (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeState ? "border-primary bg-primary text-white" : "border-outline bg-white text-primary hover:border-primary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project, idx) => (
          <motion.div
            key={project.title}
            className="glass-panel h-full space-y-3 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
          >
            <div className="image-frame h-44 w-full">
              <div
                className="absolute inset-0 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-slate-900/40 via-primary/25 to-transparent" />
              <div className="absolute left-4 top-4 h-10 w-10 rotate-6 rounded-xl bg-white/15 backdrop-blur" />
              <div className="absolute right-6 bottom-4 h-16 w-20 -rotate-6 rounded-2xl bg-amber-400/25 blur-lg" />
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">{project.category}</p>
            <Link href={`/projects/${project.slug}`} className="block">
              <h2 className="font-display text-2xl text-slate-900 transition hover:text-primary">{project.title}</h2>
            </Link>
            <p className="text-sm text-muted">{project.summary}</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <MapPin size={16} className="text-primary" />
              {project.location}
            </div>
            <p className="text-xs text-muted">Explore the case study for role, services, metrics, and gallery.</p>
            <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-primary underline-offset-4 transition hover:underline">
              View details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
