import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { getOgImageForRoute } from "@/lib/og-images";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, VERIFIED_PROFILE_URLS, absoluteUrl, getSchemaIds } from "@/lib/site";
import { asSchemaArray, buildBreadcrumbListSchema, buildPublisherSchema } from "@/lib/structured-data";
import { HYDROGEN_ISSUE_CATEGORIES } from "@/features/traffic-foundation";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Issue Library | Symptoms, Fixes & Notes",
  description:
    "Shopify Hydrogen issue library for SEO, performance, PDP, collection, cart, checkout, and metaobject fixes.",
  path: "/shopify-hydrogen-issues",
  ogImage: absoluteUrl(getOgImageForRoute("/shopify-hydrogen-issues")),
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Hydrogen issue library", href: "/shopify-hydrogen-issues" },
] as const;

export default function ShopifyHydrogenIssuesPage() {
  const schemaIds = getSchemaIds();
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(item.href) })),
  );
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shopify Hydrogen Issue Library",
    url: absoluteUrl("/shopify-hydrogen-issues"),
    description:
      "Production Hydrogen issue symptoms mapped to fixes, related production notes, and checklists.",
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
          eyebrow="Issue library"
          title="Shopify Hydrogen symptoms mapped to production fixes."
          description="A practical index for SEO, performance, cart, PDP, collection, and metaobject issues that show up after a custom storefront gets real traffic."
          body="Each card starts with the symptom, names the fix direction, and points to a production note plus the checklist that should be used before the next release."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Issue categories"
            title="Find the symptom, then follow the production note."
            description="Every category has at least three entries so the library works as an index rather than one-off blog navigation."
          />
          <div className="grid gap-6">
            {HYDROGEN_ISSUE_CATEGORIES.map((category) => (
              <article key={category.id} id={category.id} className="card-soft space-y-5">
                <div className="max-w-4xl">
                  <p className="eyebrow">Issue category</p>
                  <h2 className="subsection-title">{category.title}</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{category.description}</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                  {category.entries.map((entry) => (
                    <div key={entry.title} className="flex h-full flex-col rounded-[1.2rem] border border-black/8 bg-white p-5">
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171717]">
                        {entry.title}
                      </h3>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#10b981]">
                        Symptom
                      </p>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{entry.symptom}</p>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#10b981]">
                        Fix
                      </p>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{entry.fix}</p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        <Link
                          href={entry.post.href}
                          className="inline-flex min-h-10 items-center rounded-full bg-[#171717] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#10b981]"
                        >
                          {entry.post.label}
                        </Link>
                        <Link
                          href={entry.template.href}
                          className="inline-flex min-h-10 items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                        >
                          {entry.template.label}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedLinks links={getRelatedLinksForPath("/shopify-hydrogen-issues")} />
      </div>
    </>
  );
}
