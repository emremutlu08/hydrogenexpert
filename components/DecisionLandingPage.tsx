import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import {
  AuditScopeReviewSection,
  HydrogenOwnershipCostSection,
  HydrogenBuildPackages,
  IntegrationComplexityBoundarySection,
  LiquidHydrogenDecisionSection,
  MigrationSeoRiskChecklistSection,
  PackageReadinessSection,
  ScopeReviewInputsSection,
  SeniorSpecialistAgencyComparisonSection,
} from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import type { DecisionPageData } from "@/lib/decision-pages";
import { absoluteUrl, getSchemaIds } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

interface DecisionLandingPageProps {
  page: DecisionPageData;
  parent?: {
    href: string;
    label: string;
  };
}

const usFriendlyBenefits = [
  "Clear USD pricing",
  "Direct senior developer access",
  "No account manager layer",
  "Async-friendly updates",
  "Upwork-friendly collaboration if needed",
  "Faster fixed-scope delivery",
  "Lower overhead than a traditional agency",
] as const;

export function DecisionLandingPage({
  page,
  parent = { href: "/services", label: "Services" },
}: DecisionLandingPageProps) {
  const schemaIds = getSchemaIds();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: parent.label, href: parent.href },
    { label: page.navLabel, href: page.path },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const serviceSchema = buildServiceSchema({
    name: page.navLabel,
    url: absoluteUrl(page.path),
    description: page.metaDescription,
    providerName: "HydrogenExpert",
    providerUrl: absoluteUrl("/"),
    providerId: schemaIds.professionalService,
    serviceType: page.navLabel,
  });
  const faqSchema = page.faqs?.length ? buildFaqPageSchema(page.faqs) : null;

  return (
    <>
      <JsonLd data={asSchemaArray(serviceSchema, breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          body={page.body}
          reviewedAt={page.reviewedAt ?? "2026-05-25"}
        />

        <section className="surface-card space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
            Short answer
          </p>
          <p className="max-w-4xl text-lg leading-8 text-neutral-700">
            {page.description} Compare the commercial signal, next move, and caution together before treating Hydrogen as the default upgrade.
          </p>
        </section>

        {page.path === "/shopify-hydrogen-agency-usa" ? (
          <>
            <section className="surface-card space-y-6">
              <SectionHeader
                eyebrow="US-friendly"
                title="Why US brands still hire remote Hydrogen specialists."
                description="The collaboration model is commercial and practical: clear pricing, direct senior access, and async-friendly execution without pretending there is a US office."
                className="max-w-5xl"
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {usFriendlyBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-[1rem] border border-black/8 bg-white px-4 py-3 text-sm font-semibold leading-6 text-neutral-700"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
              <Link
                href="/shopify-hydrogen-packages"
                className="inline-flex min-h-11 w-fit items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
              >
                View $2K-$5K Hydrogen build packages
              </Link>
            </section>
            <HydrogenBuildPackages
              title="US-friendly fixed-scope Hydrogen build packages."
              description="Clear USD package ranges for English-speaking Shopify brands that want direct senior implementation without a local agency layer."
              compact
            />
          </>
        ) : null}

        {page.path === "/shopify-hydrogen-fit-audit" ? (
          <>
            <AuditScopeReviewSection />
            <ScopeReviewInputsSection />
            <PackageReadinessSection />
          </>
        ) : null}

        {page.path === "/shopify-hydrogen-agency-usa" ? (
          <SeniorSpecialistAgencyComparisonSection />
        ) : null}

        {page.path === "/shopify-hydrogen-vs-liquid" ? (
          <>
            <LiquidHydrogenDecisionSection />
            <HydrogenOwnershipCostSection />
            <ScopeReviewInputsSection />
          </>
        ) : null}

        {page.path === "/shopify-hydrogen-maintenance-cost" ? (
          <>
            <HydrogenOwnershipCostSection />
            <LiquidHydrogenDecisionSection />
          </>
        ) : null}

        {page.comparisonRows?.length ? (
          <section className="surface-card space-y-6">
            <SectionHeader
              eyebrow="Practical comparison"
              title="The differences that should change the decision."
              description="Use the comparison as a readiness filter. Liquid remains the default until a specific storefront constraint makes custom application ownership worth it."
              className="max-w-5xl"
            />
            <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-[#f7f7f7]">
                  <tr>
                    <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                      Dimension
                    </th>
                    <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                      Liquid default
                    </th>
                    <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                      Hydrogen tradeoff
                    </th>
                    <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                      Decision rule
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.comparisonRows.map((row) => (
                    <tr key={row.dimension} className="border-t border-black/8 align-top">
                      <td className="min-w-[12rem] px-5 py-4 font-semibold leading-7 text-neutral-800">
                        {row.dimension}
                      </td>
                      <td className="min-w-[16rem] px-5 py-4 leading-7 text-neutral-700">
                        {row.liquid}
                      </td>
                      <td className="min-w-[16rem] px-5 py-4 leading-7 text-neutral-700">
                        {row.hydrogen}
                      </td>
                      <td className="min-w-[18rem] px-5 py-4 leading-7 text-neutral-700">
                        {row.decisionRule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {page.path === "/shopify-hydrogen-for-large-catalog-retail" ? (
          <MigrationSeoRiskChecklistSection />
        ) : null}

        {page.path === "/shopify-hydrogen-for-dtc-education-brands" ||
        page.path === "/shopify-hydrogen-for-luxury-jewelry" ? (
          <PackageReadinessSection />
        ) : null}

        {page.path === "/shopify-hydrogen-for-large-catalog-retail" ||
        page.path === "/shopify-hydrogen-for-dtc-education-brands" ? (
          <IntegrationComplexityBoundarySection />
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hero-card space-y-5">
            <p className="dna-kicker text-[#8df1cb]">Positioning</p>
            <h2 className="font-display text-[2.25rem] leading-[1] text-white md:text-[3rem]">
              Source-grounded, proof-led, and not sold as a default upgrade.
            </h2>
            <p className="text-base leading-8 text-neutral-300">
              Platform claims are grounded in Shopify developer documentation. Commercial judgment is
              Emre&apos;s operator interpretation, and proof claims stay tied to approved case context.
            </p>
          </div>
          <div className="card-soft space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
              Decision filter
            </p>
            <ul className="editorial-list">
              {page.decisionRows.map((row) => (
                <li key={row.signal}>
                  <span>{row.signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {page.sections.map((section) => (
          <section
            key={section.title}
            className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
          >
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="section-heading mt-3 text-[2.35rem] md:text-[3rem]">
                {section.title}
              </h2>
            </div>
            <div className="space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Decision table"
            title="When this page is the right next step."
            description="Each row separates the commercial signal, the recommended move, and the caution that keeps Hydrogen from becoming a default answer."
            className="max-w-5xl"
          />
          <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#f7f7f7]">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Signal
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Move
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Caution
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.decisionRows.map((row) => (
                  <tr key={row.signal} className="border-t border-black/8 align-top">
                    <td className="min-w-[14rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.signal}
                    </td>
                    <td className="min-w-[14rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.move}
                    </td>
                    <td className="min-w-[14rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.caution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card-soft space-y-5">
          <div className="max-w-3xl">
            <p className="eyebrow">Related paths</p>
            <h2 className="subsection-title mt-3">Where to go next.</h2>
          </div>
          <div className="authority-links">
            {page.links.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">HydrogenExpert</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        {page.faqs?.length ? (
          <FaqSection
            title="Short answers for this Hydrogen decision."
            faqs={page.faqs}
          />
        ) : null}

        <CTASection
          headline={page.cta.headline}
          subtext={page.cta.subtext}
          sourceKind={page.cta.sourceKind}
        />
      </div>
    </>
  );
}
