"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, BriefcaseBusiness, Sparkles } from "lucide-react";
import { teamMembers } from "@/lib/team";

export function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="section-shell py-20">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-strong"
        >
          <ArrowLeft size={16} />
          Back to About
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our Team
            </p>
            <h1 className="mt-4 font-display text-5xl text-slate-900 md:text-6xl">
              Experienced professionals
              <span className="block bg-linear-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                guiding every decision.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-3 text-primary">
              <Sparkles size={20} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                Leadership & expertise
              </span>
            </div>
            <p className="mt-4 text-lg text-slate-700">
              Our team combines practical construction insight, cost discipline, and advisory
              depth to help clients make sound decisions from concept through completion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-900/75 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                    {member.specialty}
                  </p>
                  <h2 className="mt-2 font-display text-2xl leading-tight">{member.name}</h2>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    <BriefcaseBusiness size={14} />
                    {member.role}
                  </div>
                </div>

                <p className="text-sm leading-6 text-slate-700">{member.summary}</p>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Focus Areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Qualifications
                  </p>
                  {member.qualifications.map((qualification) => (
                    <div key={qualification} className="flex items-start gap-2 text-sm text-slate-700">
                      <BadgeCheck size={15} className="mt-0.5 shrink-0 text-primary" />
                      <span>{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
