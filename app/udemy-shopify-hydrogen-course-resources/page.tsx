import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackedProofLink } from "@/components/TrackedInternalLink";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, VERIFIED_PROFILE_URLS, absoluteUrl, getSchemaIds } from "@/lib/site";
import { asSchemaArray, buildBreadcrumbListSchema, buildPublisherSchema } from "@/lib/structured-data";
import { COURSE_MODULES } from "@/features/traffic-foundation";

export const metadata = buildMetadata({
  title: "Udemy Shopify Hydrogen Course Resources | HydrogenExpert",
  description:
    "Course companion for the Shopify Hydrogen Udemy course: topics mapped to HydrogenExpert guides, production notes, templates, and next steps.",
  path: "/udemy-shopify-hydrogen-course-resources",
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Udemy course resources", href: "/udemy-shopify-hydrogen-course-resources" },
] as const;

function LinkList({ title, links }: { title: string; links: readonly { href: string; label: string; note: string }[] }) {
  return (
    <div className="rounded-[1.15rem] border border-black/8 bg-white p-5">
      <p className="authority-link-card__label">{title}</p>
      <div className="mt-4 grid gap-3">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[1rem] border border-black/8 bg-[#f6f7f7] p-4 transition hover:border-[#10b981]"
          >
            <h3 className="text-base font-semibold text-[#171717]">{item.label}</h3>
            <p className="mt-2 text-sm leading-7 text-neutral-600">{item.note}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function UdemyShopifyHydrogenCourseResourcesPage() {
  const schemaIds = getSchemaIds();
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(item.href) })),
  );
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Udemy Shopify Hydrogen Course Resources",
    url: absoluteUrl("/udemy-shopify-hydrogen-course-resources"),
    description:
      "A companion resource map for Shopify Hydrogen course students moving from tutorial lessons to production storefront judgment.",
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
          eyebrow="Course companion"
          title="Udemy Shopify Hydrogen course resources for production follow-through."
          description="Course topics mapped to site guides, production notes, templates, and the next HydrogenExpert path."
          body="Use this page after a lesson when the tutorial version is clear but the production version needs SEO, route, data, launch, or maintenance judgment."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Udemy referral path"
            title="Move from course learning to real storefront decisions."
            description="The outbound course link is tracked as a proof link without sending personal data."
          />
          <div className="card-soft flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="subsection-title mt-0">Shopify Hydrogen course by Emre Mutlu</h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                Use the Udemy course for the learning path, then use these resource clusters when
                the work becomes a production storefront, migration, or QA decision.
              </p>
            </div>
            <TrackedProofLink
              href={OWNER.udemyUrl}
              label="Udemy Shopify Hydrogen course"
              sourceKind="udemy_course_resources"
              external
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            >
              Open Udemy course
            </TrackedProofLink>
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Course topics"
            title="Topic to guide to production note to checklist."
            description="Each module gives a learning outcome plus the internal pages that should be used when the lesson becomes real project work."
          />
          <div className="grid gap-5">
            {COURSE_MODULES.map((module, index) => (
              <article key={module.id} id={module.id} className="card-soft">
                <div className="grid gap-6 lg:grid-cols-[0.24fr_0.76fr]">
                  <div>
                    <div className="feature-number">{index + 1}</div>
                    <h2 className="subsection-title">{module.title}</h2>
                    <p className="mt-4 text-base leading-8 text-neutral-600">{module.outcome}</p>
                  </div>
                  <div className="grid gap-4 xl:grid-cols-3">
                    <LinkList title="Guides" links={module.guides} />
                    <LinkList title="Production notes" links={module.productionNotes} />
                    <LinkList title="Templates" links={module.templates} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedLinks links={getRelatedLinksForPath("/udemy-shopify-hydrogen-course-resources")} />
      </div>
    </>
  );
}
