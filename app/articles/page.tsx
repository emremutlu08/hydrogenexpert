import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackedContentLink } from "@/components/TrackedInternalLink";
import { getPublicArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, VERIFIED_PROFILE_URLS, absoluteUrl, getSchemaIds } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildPublisherSchema,
} from "@/lib/structured-data";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Articles | Hiring, Cost, SEO & Migration Guides",
  description:
    "Evergreen Shopify Hydrogen articles for merchants evaluating developer hiring, agency alternatives, migration risk, SEO, cost, and fit decisions.",
  path: "/articles",
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
] as const;

const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default async function ArticlesPage() {
  const articles = await getPublicArticles();
  const schemaIds = getSchemaIds();
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shopify Hydrogen Articles",
    url: absoluteUrl("/articles"),
    description:
      "Evergreen guides for merchants evaluating Shopify Hydrogen hiring, cost, SEO, migration, and fit decisions.",
    author: {
      "@type": "Person",
      "@id": schemaIds.person,
      name: OWNER.name,
    },
    publisher: buildPublisherSchema({
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl(SITE_LOGO_PATH),
      id: schemaIds.organization,
      sameAs: VERIFIED_PROFILE_URLS,
    }),
  };

  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, collectionSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Evergreen guides"
          title="Shopify Hydrogen Articles"
          description="Evergreen guides for Shopify Plus and growth-stage brands evaluating Hydrogen, headless Shopify, senior developer support, migration risk, SEO, cost, and storefront ownership."
          body={
            <>
              <span>
                The blog is reserved for production notes and first-hand implementation learnings.
                Articles are structured decision guides for merchants and teams evaluating Shopify
                Hydrogen.
              </span>{" "}
              <Link
                href="/blog"
                className="font-medium text-[#171717] underline decoration-black/20 underline-offset-4 transition hover:text-[#10b981]"
              >
                For first-hand storefront notes, read the Shopify Hydrogen Blog.
              </Link>
            </>
          }
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Merchant decision library"
            title="Hiring, evaluation, cost, migration, SEO, and fit guidance."
            description="Only articles that have reached their publish date appear here. Scheduled guides stay hidden until publication."
          />

          {articles.length ? (
            <div className="grid gap-5">
              {articles.map((article) => (
                <article key={article.slug} className="card-soft space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#10b981]/25 bg-[#10b981]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                      {article.category}
                    </span>
                    <time
                      dateTime={article.updatedAt}
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500"
                    >
                      Updated{" "}
                      {new Date(article.updatedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="subsection-title">
                    <TrackedContentLink
                      href={`/articles/${article.slug}`}
                      contentType="article"
                      slug={article.slug}
                      className="transition hover:text-[#10b981]"
                    >
                      {article.title}
                    </TrackedContentLink>
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-neutral-600">
                    {article.description}
                  </p>
                  <TrackedContentLink
                    href={`/articles/${article.slug}`}
                    contentType="article"
                    slug={article.slug}
                    className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
                  >
                    Read article
                  </TrackedContentLink>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.25rem] border border-black/8 bg-white p-6">
              <h2 className="subsection-title">Scheduled articles are queued for publication.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">
                The first evergreen guide is scheduled for May 8, 2026 at 10:00 Europe/Istanbul.
                Until then, future article URLs stay hidden from the index, sitemap, related links,
                and public article pages.
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
