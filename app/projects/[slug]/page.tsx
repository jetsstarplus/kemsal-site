import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, LineChart } from "lucide-react";
import { projects } from "@/lib/projects";
import { getProjectBySlugWithGallery } from "@/lib/projects.server";
import { GalleryGrid } from "@/components/ui/gallery-grid";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlugWithGallery(slug);
  if (!project) return {};
  return {
    title: `${project.title} | KEMSAL Consultants Ltd.`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlugWithGallery(slug);
  if (!project) return notFound();

  return (
    <div className="section-shell space-y-10">
      <div className="flex items-center gap-3 text-sm text-primary">
        <Link href="/projects" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{project.category}</p>
          <h1 className="font-display text-4xl text-slate-900">{project.title}</h1>
          <p className="text-sm font-semibold text-slate-900">{project.summary}</p>
          <p className="text-sm text-muted">{project.description}</p>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <MapPin size={16} className="text-primary" />
            {project.location}
          </div>
        </div>
        <div className="image-frame h-64 w-full">
          <div
            className="absolute inset-0 rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${project.heroImage})` }}
          />
          <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-slate-900/40 via-primary/25 to-transparent" />
          <div className="absolute -left-6 -top-6 h-16 w-16 rotate-6 rounded-2xl bg-white/15 backdrop-blur" />
          <div className="absolute -right-10 bottom-6 h-24 w-32 -rotate-6 rounded-3xl bg-amber-400/25 blur-xl" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel space-y-4 p-6">
          <h2 className="font-display text-xl text-slate-900">Our Role</h2>
          <p className="text-sm text-muted">{project.role}</p>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span key={service} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-panel space-y-4 p-6">
          <h2 className="font-display text-xl text-slate-900">Key Metrics</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-outline bg-white/70 p-3 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{metric.label}</p>
                <p className="text-lg font-semibold text-slate-900">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm text-primary">
            <ShieldCheck size={16} />
            <span>Audit-ready QS outputs and traceable controls.</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-primary">
            <LineChart size={16} />
            <span>Transparent dashboards for stakeholders.</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-slate-900">Gallery</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Project Gallery</p>
        </div>
        <GalleryGrid images={project.gallery} />
      </div>
    </div>
  );
}
