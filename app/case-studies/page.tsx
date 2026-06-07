import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyMetricGrid } from "@/components/case-study/CaseStudyMetricGrid";
import { CaseStudyScreenshots } from "@/components/case-study/CaseStudyScreenshots";
import { CaseStudyTechStack } from "@/components/case-study/CaseStudyTechStack";
import { CaseStudyTestimonial } from "@/components/case-study/CaseStudyTestimonial";
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
      "Because they prove Shopify judgment. Some stores need Hydrogen, while others are better served by fast, maintainable Liquid builds. Showing both makes the sales argument more honest and more useful.",
  },
  {
    question: "Why do some cases have testimonials and others do not?",
    answer:
      "Because only verified or approved feedback belongs on the page. Rebel Bunny has public Upwork feedback; other cases stay focused on approved role, constraint, stack, and outcome context.",
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
          body="This page uses only approved public proof: role, constraint, stack, visuals, and outcome context. Quotes, metrics, and deeper evidence stay off the page unless they are public or explicitly approved."
          reviewedAt="2026-05-25"
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Find the storefront pressure closest to yours."
            description="Each case now has a dedicated URL for deeper context, technical decisions, approved visuals, and launch constraints."
          />
          <SelectedWorkGrid />
        </section>

        <section className="grid gap-8">
          {CASE_STUDIES.map((study, index) => (
            <article id={study.id} key={study.id} className="card scroll-mt-32 space-y-8">
              <CaseStudyHero
                clientName={study.clientName}
                tagline={study.tagline}
                role={study.role}
                industry={study.industry}
                liveUrl={study.liveUrl}
                logo={study.logo}
                heroImage={study.heroImage}
              />
              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
              >
                Read full case study
              </Link>

              <div className="grid gap-x-8 gap-y-10 xl:grid-cols-2 xl:items-start">
                <div>
                  <p className="eyebrow">Case {index + 1}</p>
                  <h3 className="subsection-title mt-3">Problem</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#10b981]">
                    {study.portfolioAngle}
                  </p>
                  <p className="mt-3 rounded-[1rem] border border-black/8 bg-[#f6f7f7] px-4 py-3 text-sm leading-7 text-neutral-700">
                    <strong className="text-neutral-900">Package relevance:</strong>{" "}
                    {CASE_STUDY_PACKAGE_RELEVANCE[study.id]}
                  </p>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{study.problem}</p>
                </div>

                <div>
                  <p className="eyebrow">Approach</p>
                  <h3 className="subsection-title mt-3">What I focused on</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{study.approach}</p>
                </div>

                <div className="rounded-[1.5rem] border border-black/8 bg-[#f6f7f7] p-6 md:p-8">
                  <p className="eyebrow">Outcome</p>
                  <h3 className="subsection-title mt-3">What changed and why it matters</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-700">{study.outcome}</p>
                </div>

                <CaseStudyScreenshots screenshots={study.screenshots} />

                {study.metrics.length ? (
                  <section className="space-y-4">
                    <div>
                      <p className="eyebrow">Metrics</p>
                      <h3 className="subsection-title mt-3">Supported proof points</h3>
                    </div>
                    <CaseStudyMetricGrid metrics={study.metrics} />
                  </section>
                ) : null}

                <CaseStudyTechStack stack={study.techStack} />
              </div>

              <CaseStudyTestimonial testimonial={study.testimonial} />
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
                href: "/shopify-hydrogen-developer",
                label: "Production Shopify Hydrogen storefront work",
                note: "Use this when the next step is direct senior implementation support.",
              },
              {
                href: "/shopify-hydrogen-expert",
                label: "Senior Shopify Hydrogen development",
                note: "Use this when the project needs one accountable specialist before scope expands.",
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
