import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { IntentOwnershipSection } from "@/components/IntentOwnershipSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { STATIC_PAGE_SOURCE_METADATA } from "@/features/content-sources";
import { COMMERCIAL_INTENT_OWNERS } from "@/features/search-intent";
import { HYDROGEN_EXAMPLES } from "@/features/traffic-foundation";
import { getOgImageForRoute } from "@/lib/og-images";
import { buildMetadata } from "@/lib/seo";
import { OWNER, absoluteUrl, getSchemaIds } from "@/lib/site";
import { asSchemaArray, buildBreadcrumbListSchema } from "@/lib/structured-data";

const examplesIntent = COMMERCIAL_INTENT_OWNERS["/shopify-hydrogen-examples"];

export const metadata = buildMetadata({
  title: examplesIntent.metaTitle,
  description: examplesIntent.metaDescription,
  path: examplesIntent.path,
  ogImage: absoluteUrl(getOgImageForRoute("/shopify-hydrogen-examples")),
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Hydrogen examples", href: "/shopify-hydrogen-examples" },
] as const;
const pageSourceMetadata = STATIC_PAGE_SOURCE_METADATA["/shopify-hydrogen-examples"];

export default function ShopifyHydrogenExamplesPage() {
  const schemaIds = getSchemaIds();
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(item.href) })),
  );
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shopify Hydrogen examples",
    url: absoluteUrl("/shopify-hydrogen-examples"),
    numberOfItems: HYDROGEN_EXAMPLES.length,
    itemListElement: HYDROGEN_EXAMPLES.map((example, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: example.title,
      url: example.source.href,
    })),
    author: {
      "@type": "Person",
      "@id": schemaIds.person,
      name: OWNER.name,
    },
  };

  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, itemListSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Example directory"
          title={examplesIntent.heroTitle}
          description={examplesIntent.heroDescription}
          body={examplesIntent.heroBody}
          reviewedAt={pageSourceMetadata.lastVerified}
        />

        <IntentOwnershipSection intentOwner={examplesIntent} />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Examples"
            title={examplesIntent.offerTitle}
            description="Use these examples to learn what the pattern teaches, then follow the internal link when the pattern becomes a production requirement."
          />
          <div className="grid gap-5">
            {HYDROGEN_EXAMPLES.map((example, index) => (
              <article key={example.id} id={example.id} className="card-soft">
                <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
                  <div>
                    <div className="feature-number">{index + 1}</div>
                    <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#10b981]">
                      Example
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h2 className="subsection-title mt-0">{example.title}</h2>
                      <p className="mt-4 text-base leading-8 text-neutral-600">{example.summary}</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.15rem] border border-black/8 bg-white p-5">
                        <p className="authority-link-card__label">Why it matters</p>
                        <p className="mt-3 text-sm leading-7 text-neutral-600">{example.whyItMatters}</p>
                      </div>
                      <div className="rounded-[1.15rem] border border-black/8 bg-white p-5">
                        <p className="authority-link-card__label">Takeaway</p>
                        <p className="mt-3 text-sm leading-7 text-neutral-600">{example.takeaway}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={example.source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
                      >
                        {example.source.label}
                      </a>
                      <Link
                        href={example.related.href}
                        className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                      >
                        {example.related.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedLinks links={getRelatedLinksForPath("/shopify-hydrogen-examples")} />

        <CTASection
          headline={examplesIntent.cta.headline}
          subtext={examplesIntent.cta.subtext}
          sourceKind="intent:shopify-hydrogen-examples"
          primaryLabel={examplesIntent.cta.primaryLabel}
        />
      </div>
    </>
  );
}
