import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getPublicArticleBySlug, getPublicArticleSlugsForDate } from "@/lib/articles";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, VERIFIED_PROFILE_URLS, absoluteUrl, getSchemaIds } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildPublisherSchema,
} from "@/lib/structured-data";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return getPublicArticleSlugsForDate().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublicArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Shopify Hydrogen Article Not Found | HydrogenExpert",
      description:
        "This Shopify Hydrogen article is not public yet. Read published HydrogenExpert articles and production notes instead.",
      path: `/articles/${slug}`,
      robots: { index: false, follow: false },
    });
  }

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/articles/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getPublicArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const schemaIds = getSchemaIds();
  const hasDecisionBrief = Boolean(article.summary?.length || article.takeaways?.length);
  const hasFaq = Boolean(article.faq?.length);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: article.title, href: `/articles/${article.slug}` },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      "@id": schemaIds.person,
      name: article.author,
      url: OWNER.linkedIn,
    },
    publisher: buildPublisherSchema({
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl(SITE_LOGO_PATH),
      id: schemaIds.organization,
      sameAs: VERIFIED_PROFILE_URLS,
    }),
    image: absoluteUrl("/og-default.svg"),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".card-soft p", ".article-decision-brief p", ".article-html h2", ".article-faq p"],
    },
    citation: article.sources?.map((source) => source.href),
    mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`),
    url: absoluteUrl(`/articles/${article.slug}`),
  };
  const faqSchema = hasFaq ? buildFaqPageSchema(article.faq ?? []) : null;
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": schemaIds.person,
    name: article.author,
    jobTitle: OWNER.title,
    url: OWNER.linkedIn,
    sameAs: VERIFIED_PROFILE_URLS,
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl(SITE_LOGO_PATH),
  };
  const relatedLinks = getRelatedLinksForPath(`/articles/${article.slug}`);

  return (
    <>
      <JsonLd
        data={asSchemaArray(articleSchema, breadcrumbSchema, faqSchema, personSchema, organizationSchema)}
      />
      <div className="page-shell">
        <article className="mx-auto max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow editorial-kicker mt-8">{article.category}</p>
          <h1 className="page-title mt-6">{article.h1}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-neutral-500">
            <span>By {article.author}</span>
            <time dateTime={article.publishAt}>
              Published{" "}
              {new Date(article.publishAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <time dateTime={article.updatedAt}>
              Updated{" "}
              {new Date(article.updatedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <div className="card-soft mt-8 space-y-4">
            {article.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>

          {hasDecisionBrief ? (
            <section className="article-decision-brief card-soft mt-8 space-y-6">
              <div>
                <p className="eyebrow">Decision brief</p>
                <h2 className="subsection-title">The short version before you scope work.</h2>
              </div>
              {article.summary?.length ? (
                <div className="space-y-4">
                  {article.summary.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-neutral-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
              {article.takeaways?.length ? (
                <dl className="grid gap-5 md:grid-cols-3">
                  {article.takeaways.map((item) => (
                    <div key={item.label} className="border-l border-neutral-200 pl-4">
                      <dt className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-500">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-neutral-800">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </section>
          ) : null}

          <div className="article-html mt-10">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.ordered ? (
                  <ol>
                    {section.ordered.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : null}
              </section>
            ))}
          </div>

          <section className="card-soft mt-10 space-y-5">
            <div>
              <p className="eyebrow">Next paths</p>
              <h2 className="subsection-title">Where this guide connects across HydrogenExpert.</h2>
            </div>
            <p className="text-base leading-8 text-neutral-700">{article.conclusion}</p>
            <div className="authority-links">
              {article.links.map((item) => (
                <Link key={item.href} href={item.href} className="authority-link-card">
                  <p className="authority-link-card__label">HydrogenExpert</p>
                  <h3 className="authority-link-card__title">{item.label}</h3>
                  <p className="authority-link-card__body">Continue with this supporting page.</p>
                </Link>
              ))}
            </div>
          </section>

          {hasFaq ? (
            <section className="article-faq card-soft mt-10 space-y-5">
              <div>
                <p className="eyebrow">Decision FAQ</p>
                <h2 className="subsection-title">Questions that usually decide the scope.</h2>
              </div>
              <div className="divide-y divide-neutral-200">
                {article.faq?.map((item) => (
                  <details key={item.question} className="group py-4">
                    <summary className="cursor-pointer list-none text-base font-semibold leading-7 text-neutral-950 outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-base leading-8 text-neutral-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {article.sources?.length ? (
            <section className="card-soft mt-10 space-y-5">
              <div>
                <p className="eyebrow">Sources</p>
                <h2 className="subsection-title">Source material behind this guide.</h2>
              </div>
              <p className="text-base leading-8 text-neutral-700">
                These articles and official references informed the public guidance on this page.
              </p>
              <div className="authority-links">
                {article.sources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="authority-link-card"
                  >
                    <p className="authority-link-card__label">
                      {item.external ? "External source" : "HydrogenExpert"}
                    </p>
                    <h3 className="authority-link-card__title">{item.label}</h3>
                    <p className="authority-link-card__body">
                      {item.note || "Reference used for this guide."}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <RelatedLinks
            eyebrow="Related guides"
            title="Related issues, templates, and next steps."
            links={relatedLinks}
            className="mt-10"
          />
        </article>

        <CTASection
          subtext="If this guide matches the decision in front of your team, send the store URL and the commercial pressure behind the work. I will help you choose the safest next scope."
          sourceKind={`article:${article.slug}`}
        />
      </div>
    </>
  );
}
