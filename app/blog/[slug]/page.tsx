import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogAnalytics } from "@/components/BlogAnalytics";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { getPublishedPostBySlug, getPublishedPostSlugs } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { OWNER, absoluteUrl } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Shopify Hydrogen Article Not Found | Emre Mutlu",
      description:
        "This Shopify Hydrogen article could not be found. Explore merchant-focused guidance on pricing, performance, and migration fit.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description:
      post.meta_description ||
      "Merchant-focused Shopify Hydrogen advice covering speed, migration planning, and storefront growth.",
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.published_at,
    author: {
      "@type": "Person",
      name: OWNER.name,
      url: OWNER.linkedIn,
    },
    url: absoluteUrl(`/blog/${post.slug}`),
    description: post.meta_description,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="page-shell">
        <article className="mx-auto max-w-4xl">
          <BlogAnalytics slug={post.slug} />
          <p className="eyebrow">Shopify Hydrogen Blog</p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-slate-900 md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            {post.published_at
              ? new Date(post.published_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Published"}
          </p>
          <div
            className="article-html mt-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div data-blog-scroll-marker className="h-16 w-full" />
        </article>

        <CTASection
          primaryLink="upwork"
          subtext="If this article sounds like your store’s situation, I can help you turn the insight into a clear Hydrogen scope and launch plan."
        />
      </div>
    </>
  );
}
