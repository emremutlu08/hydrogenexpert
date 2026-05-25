import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CopyChecklistButton } from "@/components/CopyChecklistButton";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { getOgImageForRoute } from "@/lib/og-images";
import { buildMetadata } from "@/lib/seo";
import { OWNER, absoluteUrl, getSchemaIds } from "@/lib/site";
import { asSchemaArray, buildBreadcrumbListSchema } from "@/lib/structured-data";
import { HYDROGEN_TEMPLATES } from "@/features/traffic-foundation";

export const metadata = buildMetadata({
  title: "Free Shopify Hydrogen Templates & Checklists | Copyable QA",
  description:
    "Copyable Shopify Hydrogen templates for scope briefs, route maps, SEO migration, launch QA, PDP requirements, analytics, content models, and support handoff.",
  path: "/shopify-hydrogen-templates",
  ogImage: absoluteUrl(getOgImageForRoute("/shopify-hydrogen-templates")),
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Hydrogen templates", href: "/shopify-hydrogen-templates" },
] as const;

export default function ShopifyHydrogenTemplatesPage() {
  const schemaIds = getSchemaIds();
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(item.href) })),
  );
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Shopify Hydrogen templates and checklists",
    url: absoluteUrl("/shopify-hydrogen-templates"),
    numberOfItems: HYDROGEN_TEMPLATES.length,
    itemListElement: HYDROGEN_TEMPLATES.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: template.title,
      url: absoluteUrl(`/shopify-hydrogen-templates#${template.id}`),
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
          eyebrow="Free templates"
          title="Copyable Shopify Hydrogen checklists for real production work."
          description="Scope, route mapping, SEO migration, launch QA, PDP requirements, analytics events, content models, and post-launch support."
          body="Each checklist copies clean Markdown and fires a PII-free checklist_copy analytics event with only the template id and title."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Templates"
            title="Pick the artifact closest to the next decision."
            description="These are intentionally short enough to paste into a project brief, ticket, PR description, or launch runbook."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {HYDROGEN_TEMPLATES.map((template) => (
              <article key={template.id} id={template.id} className="card-soft flex h-full flex-col">
                <div>
                  <p className="eyebrow">Checklist</p>
                  <h2 className="subsection-title">{template.title}</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{template.summary}</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{template.bestFor}</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {template.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-neutral-600">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#10b981]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <CopyChecklistButton
                    templateId={template.id}
                    templateTitle={template.title}
                    checklist={template.checklist}
                  />
                  <Link
                    href={template.relatedIssueHref}
                    className="inline-flex min-h-11 items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                  >
                    Related issue
                  </Link>
                  <Link
                    href={template.relatedGuideHref}
                    className="inline-flex min-h-11 items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                  >
                    Related guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RelatedLinks links={getRelatedLinksForPath("/shopify-hydrogen-templates")} />
      </div>
    </>
  );
}
