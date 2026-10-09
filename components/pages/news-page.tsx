import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper, Presentation } from "lucide-react";
import { getNewsItems, newsItems } from "@/lib/news";

export async function NewsPage() {
  const items = await getNewsItems();
  const resolvedItems = items.length > 0 ? items : newsItems;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-primary-strong py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">News & Engagements</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-white md:text-6xl">
              Thought leadership, updates, and sector engagement
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              This newsroom captures the conversations, presentations, and stakeholder engagements that
              keep our team connected to the projects, institutions, and communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Latest Updates</p>
            <h2 className="mt-3 font-display text-4xl text-slate-900">Recent news and presentations</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 md:flex">
            <Newspaper size={16} className="text-primary" />
            WordPress-ready content feed
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {resolvedItems.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
              <div className="relative h-52 overflow-hidden bg-slate-100">
                {item.featuredImage ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={item.featuredImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center bg-linear-to-br from-primary/10 via-white to-amber-100 text-primary">
                    <Presentation size={44} />
                  </div>
                )}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                  {item.category}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  <Calendar size={14} className="text-primary" />
                  {new Date(item.date).toLocaleDateString("en-KE", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>

                <h3 className="font-display text-2xl leading-snug text-slate-900">{item.title}</h3>
                <p className="text-sm leading-7 text-muted">{item.excerpt}</p>

                <Link
                  href={item.link || "/news"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
