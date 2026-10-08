"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectBase } from "@/lib/projects";

interface ProjectCarouselProps {
  projects: ProjectBase[];
}

function ProjectCard({ project }: { project: ProjectBase }) {
  return (
    <div className="group w-[380px] shrink-0 overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            {project.location}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate projects for seamless infinite loop
  const duplicatedProjects = [...projects, ...projects, ...projects];
  const cardWidth = 380;
  const gap = 24;
  const totalWidth = projects.length * (cardWidth + gap);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-base to-transparent" />

      {/* Infinite scrolling track */}
      <motion.div
        className="flex w-max gap-6 py-4"
        animate={{
          x: isPaused ? undefined : [-totalWidth, 0],
        }}
        transition={{
          x: {
            duration: projects.length * 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{ width: "max-content" }}
      >
        {duplicatedProjects.map((project, idx) => (
          <ProjectCard key={`${project.slug}-${idx}`} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
