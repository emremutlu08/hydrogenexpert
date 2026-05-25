import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, VERIFIED_PROFILE_URLS, absoluteUrl, getSchemaIds } from "@/lib/site";
import { asSchemaArray, buildBreadcrumbListSchema, buildPublisherSchema } from "@/lib/structured-data";
import { RESOURCE_CLUSTERS } from "@/features/traffic-foundation";
import { getOgImageForRoute } from "@/lib/og-images";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Resources | Guides, Issues, Templates & Proof",
  description:
    "Start here for Shopify Hydrogen guides, production notes, issue fixes, templates, examples, services, case studies, and course resources.",
  path: "/resources",
  ogImage: absoluteUrl(getOgImageForRoute("/resources")),
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
] as const;

export default function ResourcesPage() {
  const schemaIds = getSchemaIds();
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(item.href) })),
  );
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shopify Hydrogen Resources",
    url: absoluteUrl("/resources"),
    description:
      "A discovery hub for Shopify Hydrogen guides, examples, issue fixes, templates, case studies, services, and course resources.",
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
          eyebrow="Start here"
          title="Shopify Hydrogen resources, production notes, templates, and proof."
          description="One hub for the pages that help a merchant, founder, developer, or student decide what to read next."
          body="Use the clusters below when a question starts broad: fit, cost, services, examples, issue symptoms, copyable templates, course resources, and production proof."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Topic clusters"
            title="Choose the cluster closest to the decision in front of you."
            description="Every cluster gives at least three internal paths so new readers can move from broad research to a concrete next step."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {RESOURCE_CLUSTERS.map((cluster) => (
              <article key={cluster.id} id={cluster.id} className="card-soft space-y-5">
                <div>
                  <p className="eyebrow">Cluster</p>
                  <h2 className="subsection-title">{cluster.title}</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{cluster.description}</p>
                </div>
                <div className="grid gap-3">
                  {cluster.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-[1.1rem] border border-black/8 bg-white p-4 transition hover:border-[#10b981]"
                    >
                      <h3 className="text-base font-semibold text-[#171717]">{item.label}</h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{item.note}</p>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedLinks
          eyebrow="Discovery map"
          title="The main traffic foundation pages."
          links={getRelatedLinksForPath("/resources")}
        />
      </div>
    </>
  );
}
