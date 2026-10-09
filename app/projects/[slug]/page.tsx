import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  ShieldCheck,
  LineChart,
  CheckCircle2,
  Briefcase,
  Target,
  Building2,
} from "lucide-react";
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

  const pageUrl = `https://kemsal.co.ke/projects/${project.slug}`;
  const ogImage = new URL(project.heroImage, "https://kemsal.co.ke").toString();

  return {
    title: `${project.title} | KEMSAL Consultants Ltd.`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: `${project.title} | KEMSAL Consultants Ltd.`,
      description: project.summary,
      siteName: "KEMSAL Consultants Ltd.",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} project summary`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | KEMSAL Consultants Ltd.`,
      description: project.summary,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlugWithGallery(slug);
  if (!project) return notFound();

  const profileFields = [
    { label: "Project No.", value: project.projectNumber },
    { label: "Assignment Name", value: project.assignmentName },
    { label: "Approx. Value of Contract", value: project.contractValue },
    { label: "Country", value: project.country },
    { label: "Duration", value: project.duration },
    { label: "Procuring Entity", value: project.procuringEntity },
    { label: "Total Staff Months", value: project.staffMonths },
    { label: "Start Date", value: project.startDate },
    { label: "Completion Date", value: project.completionDate },
    { label: "Associated Consultants", value: project.associatedConsultants },
    { label: "Role on Assignment", value: project.roleOnAssignment },
    { label: "Consulting Firm", value: project.consultingFirm },
    { label: "Signatory", value: project.signatory },
  ].filter((field) => field.value);

  const glanceItems = [
    { label: "Country", value: project.country ?? "Kenya", accent: "bg-emerald-500/10 text-emerald-700" },
    { label: "Contract Value", value: project.contractValue ?? "—", accent: "bg-amber-500/10 text-amber-700" },
    { label: "Duration", value: project.duration ?? "—", accent: "bg-sky-500/10 text-sky-700" },
    { label: "Status", value: project.completionDate ?? "Ongoing", accent: "bg-violet-500/10 text-violet-700" },
  ];

  // Find next/prev projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />

        <div className="section-shell relative z-10 py-20 lg:py-32">
          {/* Back Link */}
          <Link
            href="/projects"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              {/* Category Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm">
                <Building2 size={14} />
                {project.category}
              </span>

              <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="text-lg text-slate-300">{project.summary}</p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.slice(0, 3).map((metric, idx) => {
                const gradientClasses = [
                  "bg-linear-to-br from-primary/30 via-primary/15 to-white/5",
                  "bg-linear-to-br from-amber-400/30 via-amber-300/15 to-white/5",
                  "bg-linear-to-br from-emerald-400/30 via-emerald-300/15 to-white/5",
                ];

                return (
                  <div
                    key={metric.label}
                    className={`rounded-2xl border border-white/10 ${gradientClasses[idx % gradientClasses.length]} p-5 backdrop-blur-sm`}
                  >
                    <p className="font-display text-2xl text-white md:text-3xl">{metric.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-slate-200">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-shell py-16 lg:py-24">
        <div className="mb-10 rounded-4xl border border-primary/10 bg-linear-to-r from-primary/5 via-slate-50 to-amber-100/60 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">At a glance</p>
              <h2 className="mt-2 font-display text-3xl text-slate-900">Project snapshot</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {glanceItems.map((item) => (
              <div key={item.label} className={`rounded-2xl border border-slate-200 ${item.accent} p-4`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">{item.label}</p>
                <p className="mt-3 font-display text-2xl text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Details */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <div className="space-y-4 rounded-4xl border border-slate-200 bg-linear-to-br from-slate-900 to-slate-800 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <h2 className="font-display text-2xl text-white">Project Overview</h2>
              <p className="text-slate-200 leading-relaxed">{project.description}</p>
            </div>

            {/* Our Role */}
            <div className="rounded-4xl bg-linear-to-br from-primary/5 via-slate-50 to-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/70">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <h2 className="font-display text-2xl text-slate-900">Our Role</h2>
              </div>
              <p className="mb-6 text-muted">{project.role}</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    <CheckCircle2 size={14} />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {project.narrativeDescription && (
              <div className="rounded-4xl border border-amber-200 bg-linear-to-br from-amber-50 to-white p-8 shadow-[0_20px_70px_rgba(251,191,36,0.08)]">
                <h2 className="font-display text-2xl text-slate-900">Narrative Description</h2>
                <p className="mt-4 text-muted leading-relaxed">{project.narrativeDescription}</p>
              </div>
            )}

            {project.actualServicesProvided && project.actualServicesProvided.length > 0 && (
              <div className="rounded-4xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-white p-8 shadow-[0_20px_70px_rgba(16,185,129,0.08)]">
                <h2 className="font-display text-2xl text-slate-900">Services Provided</h2>
                <ul className="mt-4 space-y-3">
                  {project.actualServicesProvided.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-muted">
                      <CheckCircle2 size={18} className="mt-0.5 text-primary" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl text-slate-900">Project Gallery</h2>
                <span className="text-sm text-muted">{project.gallery.length} images</span>
              </div>
              <GalleryGrid images={project.gallery} />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Key Metrics Card */}
            <div className="glass-panel space-y-5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="text-primary" size={18} />
                </div>
                <h3 className="font-display text-lg text-slate-900">Key Metrics</h3>
              </div>

              <div className="space-y-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
                  >
                    <span className="text-sm text-muted">{metric.label}</span>
                    <span className="font-display text-lg font-semibold text-slate-900">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {profileFields.length > 0 && (
              <div className="glass-panel space-y-4 rounded-4xl border border-sky-200 bg-linear-to-br from-sky-50 via-white to-slate-50 p-6 shadow-[0_20px_60px_rgba(14,165,233,0.08)]">
                <h3 className="font-display text-lg text-slate-900">Project Profile</h3>
                <div className="space-y-3">
                  {profileFields.map((field) => (
                    <div key={field.label} className="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{field.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quality Assurance Card */}
            <div className="glass-panel space-y-4 rounded-4xl border border-violet-200 bg-linear-to-br from-violet-50 to-white p-6 shadow-[0_20px_60px_rgba(139,92,246,0.08)]">
              <h3 className="font-display text-lg text-slate-900">Quality Assurance</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-primary/5 p-4">
                  <ShieldCheck size={20} className="mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Audit-Ready Outputs</p>
                    <p className="text-xs text-muted">
                      All QS deliverables meet audit standards with full traceability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-primary/5 p-4">
                  <LineChart size={20} className="mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Stakeholder Dashboards</p>
                    <p className="text-xs text-muted">
                      Transparent reporting for all project stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="rounded-3xl bg-linear-to-br from-slate-900 to-primary-strong p-6 text-white">
              <h3 className="font-display text-lg">Interested in Similar Work?</h3>
              <p className="mt-2 text-sm text-white/70">
                Let&apos;s discuss how we can apply our expertise to your project.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
              >
                Get in Touch
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="border-t border-outline bg-slate-50 py-12">
        <div className="section-shell">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-outline bg-white transition group-hover:border-primary group-hover:text-primary">
                  <ArrowLeft size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Previous</p>
                  <p className="font-semibold text-slate-900 transition group-hover:text-primary">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/projects"
              className="hidden rounded-full border border-outline bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary md:inline-flex"
            >
              View All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Next</p>
                  <p className="font-semibold text-slate-900 transition group-hover:text-primary">
                    {nextProject.title}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-outline bg-white transition group-hover:border-primary group-hover:text-primary">
                  <ArrowRight size={18} />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
