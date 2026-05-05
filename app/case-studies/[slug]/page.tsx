import type { Metadata } from "next";
import Link from "next/link";
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
import { absoluteUrl, OWNER, SITE_LOGO_PATH } from "@/lib/site";
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
    image: study.heroImage?.src
      ? absoluteUrl(study.heroImage.src)
      : study.logo.src
        ? absoluteUrl(study.logo.src)
        : undefined,
    publisherLogo: absoluteUrl(SITE_LOGO_PATH),
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

          <CaseStudyTestimonial testimonial={study.testimonial} />

          <section className="surface-card space-y-6">
            <SectionHeader
              eyebrow="Proof brief"
              title="What this case proves, and what it does not prove."
              description="The site uses case context as proof without inventing metrics, testimonials, partner status, or platform claims."
              className="max-w-5xl"
            />
            <div className="grid gap-4 lg:grid-cols-3">
              <ProofList
                title="Before constraint"
                items={[
                  study.context,
                  ...study.constraints.slice(0, 2),
                ]}
              />
              <ProofList
                title="What Emre owned"
                items={[
                  study.role,
                  study.implementation,
                ]}
              />
              <ProofList
                title="What changed"
                items={study.results.length ? study.results : [study.outcome]}
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.35rem] border border-black/8 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10b981]">
                  Commercial proof
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{study.outcome}</p>
              </div>
              <div className="rounded-[1.35rem] border border-black/8 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10b981]">
                  What this does not prove
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-700">
                  {getCaseStudyLimitation(study.id)}
                </p>
              </div>
            </div>
          </section>

          <section className="card-soft space-y-5">
            <div className="max-w-3xl">
              <p className="eyebrow">Relevant paths</p>
              <h2 className="subsection-title mt-3">Turn this proof into a scoped next step.</h2>
            </div>
            <div className="authority-links">
              {getCaseStudyLinks(study.id).map((item) => (
                <Link key={item.href} href={item.href} className="authority-link-card">
                  <p className="authority-link-card__label">HydrogenExpert</p>
                  <h3 className="authority-link-card__title">{item.label}</h3>
                  <p className="authority-link-card__body">{item.note}</p>
                </Link>
              ))}
            </div>
          </section>
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

function getCaseStudyLimitation(studyId: "eveshop" | "bayam" | "rebel-bunny") {
  const limitations = {
    eveshop:
      "It does not prove that every large catalog retailer should move to Hydrogen. It proves production experience in a complex retail context, while the fit still depends on budget, maintenance capacity, SEO risk, and the current theme constraint.",
    bayam:
      "It does not prove that every luxury jewelry or watch brand needs a custom storefront. It proves that Hydrogen can support premium discovery when the catalog and brand surface require more control than a generic theme path.",
    "rebel-bunny":
      "It does not prove that every DTC education brand needs Hydrogen. It proves that a custom storefront can be useful when commerce, education, partner interest, and mobile brand presentation need to move together.",
  } as const;

  return limitations[studyId];
}

function getCaseStudyLinks(studyId: "eveshop" | "bayam" | "rebel-bunny") {
  const links = {
    eveshop: [
      {
        href: "/shopify-hydrogen-for-large-catalog-retail",
        label: "Large catalog retail",
        note: "Vertical proof page tied to this retail context.",
      },
      {
        href: "/liquid-to-hydrogen-migration",
        label: "Migration service",
        note: "Route, SEO, analytics, app, and launch-risk planning.",
      },
      {
        href: "/shopify-hydrogen-for-beauty-brands",
        label: "Beauty brands",
        note: "Conservative beauty/cosmetics angle based on real context.",
      },
    ],
    bayam: [
      {
        href: "/shopify-hydrogen-for-luxury-jewelry",
        label: "Luxury jewelry",
        note: "Vertical proof page tied to Bayam context.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom storefront",
        note: "When premium catalog UX earns custom implementation.",
      },
      {
        href: "/shopify-hydrogen-agency-usa",
        label: "US agency alternative",
        note: "US-intent page with New York relevance but no fake office claim.",
      },
    ],
    "rebel-bunny": [
      {
        href: "/shopify-hydrogen-for-dtc-education-brands",
        label: "DTC education brands",
        note: "Vertical proof page tied to this commerce and education context.",
      },
      {
        href: "/shopify-hydrogen-support-retainer",
        label: "Support retainer",
        note: "Ongoing senior support for live Hydrogen storefronts.",
      },
      {
        href: "/custom-shopify-hydrogen-storefront",
        label: "Custom storefront",
        note: "When brand, content, and commerce need one storefront system.",
      },
    ],
  } as const;

  return links[studyId];
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
