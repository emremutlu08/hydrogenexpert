import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyMetricGrid } from "@/components/case-study/CaseStudyMetricGrid";
import { CaseStudyScreenshots } from "@/components/case-study/CaseStudyScreenshots";
import { CaseStudyTechStack } from "@/components/case-study/CaseStudyTechStack";
import { CaseStudyTestimonial } from "@/components/case-study/CaseStudyTestimonial";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, OWNER } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildCaseStudyArticleSchema,
  buildCreativeWorkSchema,
} from "@/lib/structured-data";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

const LAST_UPDATED = "2026-04-25";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return buildMetadata({
      title: "Shopify Hydrogen Case Study Not Found | Emre Mutlu",
      description:
        "This Shopify Hydrogen case study could not be found. Explore production storefront proof across retail, luxury ecommerce, and DTC.",
      path: `/case-studies/${slug}`,
    });
  }

  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
    type: "article",
    ogImage: study.heroImage?.src ? absoluteUrl(study.heroImage.src) : undefined,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const path = `/case-studies/${study.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.clientName, href: path },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const articleSchema = buildCaseStudyArticleSchema({
    headline: study.metaTitle,
    url: absoluteUrl(path),
    description: study.metaDescription,
    authorName: OWNER.name,
    datePublished: LAST_UPDATED,
    dateModified: LAST_UPDATED,
  });
  const creativeWorkSchema = buildCreativeWorkSchema({
    name: `${study.clientName} Shopify Hydrogen case study`,
    url: absoluteUrl(path),
    description: study.metaDescription,
    creatorName: OWNER.name,
    dateModified: LAST_UPDATED,
  });

  return (
    <>
      <JsonLd data={asSchemaArray(articleSchema, creativeWorkSchema, breadcrumbSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />

        <article className="space-y-10">
          <CaseStudyHero
            clientName={study.clientName}
            tagline={study.tagline}
            role={study.role}
            industry={study.industry}
            liveUrl={study.liveUrl}
            logo={study.logo}
            heroImage={study.heroImage}
          />

          <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Context</p>
              <h1 className="section-heading mt-3 text-[2.25rem] md:text-[3rem]">
                {study.clientName} Shopify Hydrogen case study
              </h1>
            </div>
            <p className="text-base leading-8 text-neutral-600">{study.context}</p>
          </section>

          <section className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[1.35rem] border border-black/8 bg-[#f6f7f7] p-6">
              <p className="eyebrow">Problem</p>
              <p className="mt-4 text-base leading-8 text-neutral-700">{study.problem}</p>
            </div>
            <div className="rounded-[1.35rem] border border-black/8 bg-white p-6">
              <p className="eyebrow">Approach</p>
              <p className="mt-4 text-base leading-8 text-neutral-700">{study.approach}</p>
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-3">
            <ProofList title="Constraints" items={study.constraints} />
            <ProofList title="Technical decisions" items={study.technicalDecisions} />
            <ProofList title="SEO and performance risks" items={study.seoPerformanceRisks} />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div className="space-y-5">
              <SectionHeader
                eyebrow="Implementation"
                title="What shipped and why it mattered."
                description={study.implementation}
                className="max-w-4xl"
              />
              <div className="rounded-[1.35rem] border border-black/8 bg-[#171717] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8df1cb]">
                  Result
                </p>
                <p className="mt-4 text-base leading-8 text-neutral-200">{study.outcome}</p>
              </div>
              <div className="grid gap-3">
                {study.results.map((result) => (
                  <div key={result} className="rounded-[1.1rem] border border-black/8 bg-white p-4">
                    <p className="text-sm leading-7 text-neutral-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <CaseStudyScreenshots screenshots={study.screenshots} />
              {study.metrics.length ? (
                <section className="space-y-4">
                  <p className="eyebrow">Metrics</p>
                  <CaseStudyMetricGrid metrics={study.metrics} />
                </section>
              ) : null}
              <CaseStudyTechStack stack={study.techStack} />
            </div>
          </section>

          <section className="surface-card space-y-6">
            <SectionHeader
              eyebrow="Proof slots"
              title="Reserved for approved proof only."
              description="These slots show exactly what can strengthen the case later without publishing unsupported metrics, screenshots, or quotes today."
              className="max-w-5xl"
            />
            <div className="grid gap-4 md:grid-cols-3">
              {study.placeholderProofSlots.map((slot) => (
                <article key={slot.label} className="rounded-[1.2rem] border border-dashed border-black/20 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10b981]">
                    {slot.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{slot.note}</p>
                </article>
              ))}
            </div>
          </section>

          <CaseStudyTestimonial testimonial={study.testimonial} />
        </article>

        <CTASection
          primaryLink="upwork"
          headline="Need a Hydrogen case written into an implementation plan?"
          subtext="Send the storefront pressure, current stack, and what the business needs to prove. I can help you scope the Hydrogen path without adding fake certainty."
          sourceKind={`case_study:${study.slug}`}
        />
      </div>
    </>
  );
}

function ProofList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <section className="rounded-[1.35rem] border border-black/8 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10b981]">{title}</p>
      <ul className="editorial-list mt-5">
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
