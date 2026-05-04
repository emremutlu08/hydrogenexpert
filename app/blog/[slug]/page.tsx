import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogAnalytics } from "@/components/BlogAnalytics";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CopyMarkdownButton } from "@/components/CopyMarkdownButton";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PostVisual } from "@/components/PostVisual";
import { getPostEnhancement } from "@/lib/post-enhancements";
import { formatPostContent } from "@/lib/post-content";
import { buildPostMarkdown } from "@/lib/post-markdown";
import { getPublishedPostBySlug, getPublishedPostSlugs } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildPublisherSchema,
} from "@/lib/structured-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_METADATA_TITLE_OVERRIDES: Record<string, string> = {
  "shopify-hydrogen-product-description-ssr-seo":
    "Shopify Hydrogen Product Descriptions: SSR SEO",
  "shopify-hydrogen-variant-selection-fallback":
    "Shopify Hydrogen Variant URLs and SEO Fallbacks",
};

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

function getSafeCoverVisual(coverImage: string | null) {
  if (!coverImage) {
    return { type: "none" as const };
  }

  const isApproved =
    coverImage.startsWith("/curated-images/") || coverImage.startsWith("/brand/case-studies/");

  if (!isApproved) {
    return { type: "none" as const };
  }

  return {
    type: "code-card" as const,
    src: coverImage,
    alt: "Approved technical hero image used for a HydrogenExpert article.",
    title: "Approved technical hero image used for a HydrogenExpert article.",
  };
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

  const enhancement = getPostEnhancement(post.slug);

  return buildMetadata({
    title: BLOG_METADATA_TITLE_OVERRIDES[post.slug] ?? post.title,
    description:
      post.meta_description ||
      "Merchant-focused Shopify Hydrogen advice covering speed, migration planning, and storefront growth.",
    path: `/blog/${post.slug}`,
    type: "article",
    ogImage: enhancement.ogImage ? absoluteUrl(enhancement.ogImage) : undefined,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const enhancement = getPostEnhancement(post.slug);
  const hasInlineFaq = /(^|\n)##\s+FAQ\b|<h2[^>]*>\s*FAQ\s*<\/h2>/i.test(post.content);
  const visibleFaq = hasInlineFaq ? undefined : enhancement.faq;
  const heroVisual =
    enhancement.heroVisual.type !== "none"
      ? enhancement.heroVisual
      : getSafeCoverVisual(post.cover_image);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      "@type": "Person",
      name: OWNER.name,
      url: OWNER.linkedIn,
    },
    url: absoluteUrl(`/blog/${post.slug}`),
    description: post.meta_description,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    publisher: buildPublisherSchema({
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl(SITE_LOGO_PATH),
    }),
    image: enhancement.ogImage ? absoluteUrl(enhancement.ogImage) : undefined,
  };

  const faqSchema = visibleFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: visibleFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );

  const formattedContent = formatPostContent(post.content);
  const markdownVersion = buildPostMarkdown(post, {
    faq: visibleFaq,
    internalLinks: enhancement.internalLinks,
    externalLinks: enhancement.externalLinks,
    closingPitch: enhancement.closingPitch,
  });

  return (
    <>
      <JsonLd data={asSchemaArray(articleSchema, breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <article className="mx-auto max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <BlogAnalytics slug={post.slug} />
          <p className="eyebrow editorial-kicker mt-8">Shopify Hydrogen Journal</p>
          <h1 className="page-title mt-6">
            {post.title}
          </h1>
          <div className="mt-5 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#10b981]">
              {"By Emre Mutlu, creator of the world's first English Shopify Hydrogen course on Udemy."}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-neutral-500">
                <span>
                  Published{" "}
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "recently"}
                </span>
                <span>
                  Last updated{" "}
                  {new Date(post.updated_at || post.published_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                {post.reading_time ? <span>{post.reading_time} min read</span> : null}
              </div>
              <CopyMarkdownButton markdown={markdownVersion} />
            </div>
          </div>
          <div className="card-soft mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
              TL;DR
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              {post.excerpt ||
                post.meta_description ||
                "Merchant-friendly Shopify Hydrogen guidance, structured to be easier to read, skim, and apply in production."}
            </p>
          </div>
        </article>

        {heroVisual.type !== "none" ? <PostVisual visual={heroVisual} /> : null}

        <article className="mx-auto max-w-4xl">
          <div
            className="article-html mt-10"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
          {visibleFaq?.length ? (
            <section className="surface-card mt-10 space-y-6">
              <div className="max-w-3xl">
                <p className="eyebrow">FAQ</p>
                <h2 className="section-heading mt-3">Short answers AI engines and merchants can lift quickly.</h2>
              </div>
              <div className="grid gap-4">
                {visibleFaq.map((item) => (
                  <details
                    key={item.question}
                    className="agency-accordion rounded-[1.2rem] border border-black/8 bg-white px-5 py-4"
                  >
                    <summary className="cursor-pointer text-base font-semibold text-[#171717]">
                      {item.question}
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}
          {enhancement.internalLinks?.length ? (
            <section className="card-soft mt-10 space-y-5">
              <div>
                <p className="eyebrow">Internal links</p>
                <h2 className="subsection-title">Where this topic connects across the site.</h2>
              </div>
              <div className="authority-links">
                {enhancement.internalLinks.map((item) => (
                  <a key={item.href} href={item.href} className="authority-link-card">
                    <p className="authority-link-card__label">HydrogenExpert</p>
                    <h3 className="authority-link-card__title">{item.label}</h3>
                    <p className="authority-link-card__body">{item.note}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
          {enhancement.externalLinks?.length ? (
            <section className="card-soft mt-10 space-y-5">
              <div>
                <p className="eyebrow">External references</p>
                <h2 className="subsection-title">Official sources behind the technical framing.</h2>
              </div>
              <div className="authority-links">
                {enhancement.externalLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="authority-link-card"
                  >
                    <p className="authority-link-card__label">Reference</p>
                    <h3 className="authority-link-card__title">{item.label}</h3>
                    <p className="authority-link-card__body">{item.note}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
          {enhancement.closingPitch ? (
            <p className="mt-10 text-lg leading-8 text-neutral-700">{enhancement.closingPitch}</p>
          ) : null}
          <div data-blog-scroll-marker className="h-16 w-full" />
        </article>

        <CTASection
          primaryLink="upwork"
          subtext="If this article sounds like your store’s situation, I can help you turn the insight into a clear Hydrogen scope and launch plan."
          sourceKind={`blog_post:${post.slug}`}
        />
      </div>
    </>
  );
}
