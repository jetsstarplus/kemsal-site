export type NewsCategory = "News" | "Presentation" | "Engagement";

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml?: string;
  date: string;
  category: NewsCategory;
  author: string;
  featuredImage?: string;
  link?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "higher-education-presentation",
    slug: "higher-education-presentation-kenya",
    title: "KEMSAL team presents to Higher Education stakeholders on construction cost discipline",
    excerpt:
      "Our directors and project specialists shared practical insights on value control, contract administration and project governance for higher education and institutional developments.",
    content:
      "KEMSAL Consultants participated in a higher education engagement focused on improving cost certainty, procurement control, and project governance for institutional developments. The discussion highlighted the importance of disciplined quantity surveying and transparent project oversight in complex, multi-stakeholder environments.",
    date: "2025-02-18",
    category: "Presentation",
    author: "KEMSAL Consultants",
    featuredImage: "/projects/kehancha-estate/hero.jpg",
    link: "/news",
  },
  {
    id: "housing-sector-engagement",
    slug: "housing-sector-engagement-cost-planning",
    title: "Housing and infrastructure briefing on resilient cost planning and delivery strategy",
    excerpt:
      "The KEMSAL team contributed to a sector conversation on housing development, programme budgeting and procurement discipline for fast-moving public and private projects.",
    content:
      "During a briefing with development stakeholders, the team explored how effective cost planning, technical audits and contract administration support the successful delivery of affordable housing and infrastructure programmes. The engagement reinforced the need for early-stage financial clarity and risk-aware decision making.",
    date: "2025-01-12",
    category: "Engagement",
    author: "KEMSAL Consultants",
    featuredImage: "/projects/lumumba-affordable-housing/hero.jpg",
    link: "/news",
  },
  {
    id: "construction-market-update",
    slug: "construction-market-update-2025",
    title: "Market update on cost trends, delivery pressure and project controls in Kenya",
    excerpt:
      "Our team shared an analysis of material pricing, project risk and procurement dynamics shaping construction delivery decisions across the Kenyan market.",
    content:
      "The session drew attention to current cost trends, the importance of value engineering and the role of structured project controls in mitigating commercial risk. It was designed to help clients and partners make informed decisions in a highly dynamic delivery environment.",
    date: "2024-11-05",
    category: "News",
    author: "KEMSAL Consultants",
    featuredImage: "/projects/epza-business-parks/hero.jpg",
    link: "/news",
  },
];

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function getFeaturedImageFromContent(post: any): string | undefined {
  const rawContent = post.content?.rendered || post.content || "";
  const match = String(rawContent).match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return match?.[1] || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || post.featured_image;
}

function normalizeNewsItem(post: any): NewsItem {
  const title = stripHtml(post.title?.rendered || post.title || "Untitled update");
  const rawExcerpt = post.excerpt?.rendered || post.excerpt || "";
  const rawContent = post.content?.rendered || post.content || "";
  const excerpt = stripHtml(rawExcerpt || rawContent);
  const content = stripHtml(rawContent || rawExcerpt || "");
  const categories = Array.isArray(post.categories) ? post.categories : [];
  const typeName = typeof post.type === "string" ? post.type : "post";

  const categoryName =
    typeName === "presentation"
      ? "Presentation"
      : typeName === "engagement"
        ? "Engagement"
        : categories.includes(4)
          ? "Presentation"
          : categories.includes(5)
            ? "Engagement"
            : "News";

  const slug = String(post.slug ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));

  return {
    id: String(post.id ?? title),
    slug,
    title,
    excerpt: excerpt || "Read more about this update from KEMSAL Consultants.",
    content: content || excerpt || "This update is currently being prepared for publication.",
    contentHtml: rawContent || rawExcerpt || "",
    date: post.date || new Date().toISOString(),
    category: categoryName as NewsCategory,
    author: post.author_name || "KEMSAL Consultants",
    featuredImage: getFeaturedImageFromContent(post),
    link: `/news/${slug}`,
  };
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  if (!wordpressUrl) {
    return newsItems.map((item) => ({ ...item, link: item.link || "/news" }));
  }

  try {
    const endpoint = `${wordpressUrl.replace(/\/+$/, "")}/wp-json/wp/v2/posts?per_page=6&_embed`;
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return newsItems.map((item) => ({ ...item, link: item.link || "/news" }));
    }

    const payload = await response.json();

    if (!Array.isArray(payload)) {
      return newsItems.map((item) => ({ ...item, link: item.link || "/news" }));
    }

    return payload.map(normalizeNewsItem);
  } catch {
    return newsItems.map((item) => ({ ...item, link: item.link || "/news" }));
  }
}

export async function getNewsItemBySlug(slug: string): Promise<NewsItem | null> {
  const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  if (!wordpressUrl) {
    const match = newsItems.find((item) => item.slug === slug);
    if (!match) return null;
    return { ...match, link: `/news/${match.slug}` };
  }

  try {
    const endpoint = `${wordpressUrl.replace(/\/+$/, "")}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });

    if (!response.ok) {
      const match = newsItems.find((item) => item.slug === slug);
      return match ? { ...match, link: `/news/${match.slug}` } : null;
    }

    const payload = await response.json();
    const post = Array.isArray(payload) ? payload[0] : null;

    if (!post) {
      const match = newsItems.find((item) => item.slug === slug);
      return match ? { ...match, link: `/news/${match.slug}` } : null;
    }

    return normalizeNewsItem(post);
  } catch {
    const match = newsItems.find((item) => item.slug === slug);
    return match ? { ...match, link: `/news/${match.slug}` } : null;
  }
}

export async function getPostComments(postId: number): Promise<Array<{ id: number; author: string; content: string; date: string }>> {
  const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  if (!wordpressUrl || !postId) {
    return [];
  }

  try {
    const endpoint = `${wordpressUrl.replace(/\/+$/, "")}/wp-json/wp/v2/comments?post=${postId}&per_page=50`;
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return [];
    }

    const payload = await response.json();

    if (!Array.isArray(payload)) {
      return [];
    }

    return payload.map((comment: any) => ({
      id: Number(comment.id ?? 0),
      author: comment.author_name || "Commenter",
      content: comment.content?.rendered || comment.content || "",
      date: comment.date || new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}
