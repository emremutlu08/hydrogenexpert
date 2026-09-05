import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SelectedWorkGrid } from "@/components/SelectedWorkGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { CASE_STUDIES } from "@/data/caseStudies";
import { CASE_STUDY_PACKAGE_RELEVANCE } from "@/lib/hydrogen-packages";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Shopify Portfolio Case Studies for Hydrogen and Liquid Builds",
  description:
    "Shopify case studies across Hydrogen and Liquid work for EveShop, Bayam Jewelry, Rebel Bunny, Kirazev, and Clohi.",
  path: "/case-studies",
});

const faqs = [
  {
    question: "Why is EveShop the main portfolio case?",
    answer:
      "Because it combines the strongest proof points: large-scale Shopify Hydrogen delivery, React Native mobile commerce involvement, and a documented audience context of 400K+ web users plus 100K+ mobile users.",
  },
  {
    question: "What makes Bayam and Rebel Bunny different as Hydrogen projects?",
    answer:
      "Bayam is a high-AOV luxury discovery and trust UX problem. Rebel Bunny is a content-commerce and limited-drop storytelling problem where commerce, education, origin content, and partner interest need to live together.",
  },
  {
    question: "Why include Kirazev and Clohi if HydrogenExpert sells Hydrogen services?",
    answer:
      "Because they prove Shopify judgment. Some stores need Hydrogen, while others are better served by fast, maintainable Liquid builds. The examples show how the choice follows the catalog, customer journey, and maintenance needs.",
  },
  {
    question: "Why do some cases have testimonials and others do not?",
    answer:
      "The Rebel Bunny case includes public Upwork feedback. Each project also describes my role, implementation, and storefront context, with screenshots to explore.",
  },
] as const;

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
] as const;

const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);
const faqSchema = buildFaqPageSchema(faqs);

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Proof"
          title="Real stores, real constraints, real storefront decisions"
          description="One proof page, five different storefront pressures: large-scale beauty retail, luxury jewelry, social-first DTC, home goods Liquid, and international apparel Liquid."
          body="Explore the business problem, my role, and the implementation behind each store. Start with the project closest to your catalog and customer journey."
          reviewedAt="2026-09-05"
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Find the storefront pressure closest to yours."
            description="Open a project to see its technical decisions, storefront screenshots, and delivery context."
          />
          <SelectedWorkGrid />
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Decision proof"
            title="What each case helps decide."
            description="Compare the custom storefront work with the Liquid builds to see which approach fits your needs."
            className="max-w-5xl"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="rounded-[1.15rem] border border-black/8 bg-white p-5 transition hover:border-[#10b981]"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                  {study.clientName}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  {CASE_STUDY_PACKAGE_RELEVANCE[study.id]}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6">
          {CASE_STUDIES.map((study) => (
            <article id={study.id} key={study.id} className="card scroll-mt-32 space-y-5">
              <p className="eyebrow">{study.role}</p>
              <h2 className="subsection-title">{study.caseStudyTitle}</h2>
              <p className="max-w-4xl text-base leading-8 text-neutral-600">{study.context}</p>
              <p className="max-w-4xl text-base leading-8 text-neutral-700">{study.outcome}</p>
              <Link href={`/case-studies/${study.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]">
                Read the {study.clientName} case study
              </Link>
            </article>
          ))}
        </section>

        <FaqSection title="Case study questions that usually matter after the first scroll." faqs={faqs} />

        <section className="card-soft space-y-5">
          <div className="max-w-3xl">
            <p className="eyebrow">Commercial next steps</p>
            <h2 className="subsection-title mt-3">Connect proof to the right buying path.</h2>
          </div>
          <div className="authority-links">
            {[
              {
                href: "/shopify-hydrogen-experts",
                label: "Senior Shopify Hydrogen expertise",
                note: "Use this when the next step is direct implementation or one accountable specialist.",
              },
              {
                href: "/headless-shopify-agency",
                label: "Headless Shopify storefront support",
                note: "Use this when stakeholders are comparing a headless agency path with senior direct ownership.",
              },
              {
                href: "/shopify-hydrogen-seo",
                label: "Shopify Hydrogen SEO-safe implementation",
                note: "Use this when crawlable content, metadata, schema, and route continuity matter.",
              },
              {
                href: "/contact",
                label: "Request Scope Review",
                note: "Send the store URL and the constraint behind the project.",
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">HydrogenExpert</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          headline="Use the closest proof to scope the next move"
          subtext="If your store has similar constraints, I can help you decide whether the next step is Hydrogen, Liquid cleanup, support, or no rebuild."
          sourceKind="case_studies_cta"
        />
      </div>
    </>
  );
}
