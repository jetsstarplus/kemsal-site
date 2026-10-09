import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MessageSquareText } from "lucide-react";
import { getNewsItemBySlug, getPostComments } from "@/lib/news";

export async function generateStaticParams() {
  const { getNewsItems } = await import("@/lib/news");
  const items = await getNewsItems();

  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsItemBySlug(slug);

  if (!post) {
    return {
      title: "News article | KEMSAL Consultants Ltd.",
    };
  }

  return {
    title: `${post.title} | KEMSAL Consultants Ltd.`,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kemsal.co.ke/news/${post.slug}`,
      type: "article",
      images: post.featuredImage ? [post.featuredImage] : ["/main-site-og.jpeg"],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsItemBySlug(slug);

  if (!post) {
    return (
      <div className="section-shell py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">News</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Article not found</h1>
        <Link href="/news" className="mt-8 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={16} />
          Back to news
        </Link>
      </div>
    );
  }

  const comments = await getPostComments(Number(post.id) || 0);

  return (
    <article className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-primary-strong py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="section-shell relative z-10">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft size={16} />
            Back to news
          </Link>

          <div className="mx-auto mt-8 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{post.category}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-white md:text-6xl">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {new Date(post.date).toLocaleDateString("en-KE", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mx-auto max-w-5xl">
          {post.featuredImage ? (
            <div className="relative mb-10 h-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
            </div>
          ) : null}

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-10">
            <div
              className="wp-content prose prose-slate max-w-none prose-headings:font-display prose-h2:text-3xl prose-h3:text-2xl prose-p:text-base prose-p:leading-8 prose-li:leading-7 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || post.content }}
            />
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 pt-6">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <MessageSquareText className="text-primary" size={20} />
            <h2 className="font-display text-3xl text-slate-900">Comments</h2>
          </div>

          {comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{comment.author}</p>
                    <time className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      {new Date(comment.date).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <div
                    className="text-sm leading-7 text-slate-700"
                    dangerouslySetInnerHTML={{ __html: comment.content }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-600">There are no comments yet for this article.</p>
          )}
        </div>
      </section>
    </article>
  );
}
