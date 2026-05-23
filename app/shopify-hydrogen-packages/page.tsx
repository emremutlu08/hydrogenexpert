import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import {
  AiAssistedWorkflowSection,
  HydrogenBuildPackages,
  LiquidHydrogenDecisionSection,
  PriceDriversSection,
  PricingFaqSection,
  TwoKBuildBoundarySection,
} from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ScopeReviewBriefTemplates } from "@/components/ScopeReviewBriefTemplates";
import { CASE_STUDIES } from "@/data/caseStudies";
import {
  CASE_STUDY_PACKAGE_RELEVANCE,
  HYDROGEN_BUILD_PACKAGES,
  PRICING_FAQS,
} from "@/lib/hydrogen-packages";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Packages | $2K-$5K Storefront Builds",
  description:
    "Fixed-scope Shopify Hydrogen storefront packages from $2K-$5K. Starter, Standard, and Growth builds priced by project requirements, not traffic or pageviews.",
  path: "/shopify-hydrogen-packages",
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Shopify Hydrogen Packages", href: "/shopify-hydrogen-packages" },
] as const;

const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

const packageListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shopify Hydrogen build packages",
  itemListElement: HYDROGEN_BUILD_PACKAGES.map((buildPackage, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${buildPackage.name} - ${buildPackage.price}`,
    description: buildPackage.bestFor,
    url: absoluteUrl("/shopify-hydrogen-packages#packages"),
  })),
};

const internalLinks = [
  { href: "/shopify-hydrogen-cost", label: "Cost" },
  { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront" },
  { href: "/when-not-to-use-hydrogen", label: "When Not to Use Hydrogen" },
  { href: "/case-studies", label: "Proof" },
  { href: "/shopify-hydrogen-agency-usa", label: "US-friendly collaboration" },
] as const;

export default function ShopifyHydrogenPackagesPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, packageListSchema, buildFaqPageSchema(PRICING_FAQS))} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Fixed-scope Hydrogen packages"
          title="Shopify Hydrogen packages from $2K-$5K"
          description="Launch a lean custom Hydrogen storefront without hiring a full agency."
          body="Starter, Standard, and Growth packages are priced by project requirements: routes, templates, components, integrations, migration risk, SEO needs, analytics, and launch QA. They are not priced by traffic or pageviews."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Why fixed scope"
            title="Start with the smallest storefront that can prove the direction."
            description="A first Hydrogen launch should not become a full migration by default. Fixed scope keeps the first version focused around core ecommerce pages, product flow, cart behavior, Shopify checkout handoff, and clean performance."
            className="max-w-5xl"
          />
          <div className="flex flex-wrap gap-3">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <HydrogenBuildPackages />
        <PriceDriversSection />
        <ScopeReviewBriefTemplates />
        <TwoKBuildBoundarySection />
        <LiquidHydrogenDecisionSection />
        <AiAssistedWorkflowSection />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Proof"
            title="Package relevance across real storefront work."
            description="The portfolio is mapped to the new buying path so a buyer can tell which proof supports Starter, Standard, Growth, Custom, or Liquid decisions."
            className="max-w-5xl"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="rounded-[1.2rem] border border-black/8 bg-white p-5 transition hover:border-[#10b981]"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                  Package relevance
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#171717]">{study.clientName}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {CASE_STUDY_PACKAGE_RELEVANCE[study.id]}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <PricingFaqSection />

        <CTASection
          headline="Request a fixed-scope Hydrogen review."
          subtext="Send the store URL, product count, design status, needed pages, and must-have features. I will tell you whether the project fits Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild."
          sourceKind="packages_cta"
          primaryLabel="Request Scope Review"
        />
      </div>
    </>
  );
}
