import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { AuditScopeOutcomeSections } from "@/components/service-landing/AuditServiceSections";
import {
  AuditOfferSection,
  ContextualProofSection,
  DecisionLogicSection,
  OfferSnapshotSection,
  PricingRowsSection,
  ProofNotesSection,
  RelatedPathsSection,
  ServiceInclusionSection,
  ShortAnswerSection,
  UniqueServiceSection,
  WrongFitSection,
} from "@/components/service-landing/CommonServiceSections";
import {
  buildDeveloperResponsibilitiesSchema,
  buildDeveloperSearchIntentSchema,
  DeveloperHiringDecisionSection,
  DeveloperIntroSections,
  DeveloperProofSections,
} from "@/components/service-landing/DeveloperServiceSections";
import { PackageServiceSections } from "@/components/service-landing/PackageServiceSections";
import {
  AuditCostArticleLinkSection,
  DeveloperArticleLinksSection,
  ExpertArticleLinksSection,
} from "@/components/service-landing/ServiceArticleSections";
import { getServiceCta } from "@/components/service-landing/ServiceLandingUtils";
import { getPublicArticleBySlugForDate } from "@/lib/articles";
import type { ServicePackage } from "@/lib/services";
import { absoluteUrl, getSchemaIds } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

interface ServiceLandingPageProps {
  service: ServicePackage;
}

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const schemaIds = getSchemaIds();
  const serviceCta = getServiceCta(service);
  const publicDeveloperArticle = getPublicArticleBySlugForDate(
    "how-to-hire-shopify-hydrogen-developer",
  );
  const publicExperiencedArticle = getPublicArticleBySlugForDate(
    "experienced-shopify-hydrogen-developers",
  );
  const publicExpertsArticle = getPublicArticleBySlugForDate(
    "shopify-hydrogen-experts-production-experience",
  );
  const publicCostArticle = getPublicArticleBySlugForDate(
    "shopify-hydrogen-development-cost-developer-agency-audit",
  );
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name, href: service.pagePath },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const serviceSchema = buildServiceSchema({
    name: service.name,
    url: absoluteUrl(service.pagePath),
    description: service.metaDescription,
    providerName: "HydrogenExpert",
    providerUrl: absoluteUrl("/"),
    providerId: schemaIds.professionalService,
    serviceType: service.name,
  });
  const faqSchema = buildFaqPageSchema(service.faq);
  const developerResponsibilitiesSchema =
    service.slug === "shopify-hydrogen-developer"
      ? buildDeveloperResponsibilitiesSchema()
      : null;
  const developerSearchIntentSchema =
    service.slug === "shopify-hydrogen-developer" ? buildDeveloperSearchIntentSchema() : null;
  const sourceLinks = service.sourceMap.filter((source) => source.url);

  return (
    <>
      <JsonLd
        data={asSchemaArray(
          serviceSchema,
          breadcrumbSchema,
          faqSchema,
          developerResponsibilitiesSchema,
          developerSearchIntentSchema,
        )}
      />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />

        <PageIntroSection
          eyebrow="Shopify Hydrogen service"
          title={service.heroTitle}
          description={service.summary}
          body={service.commercialIntent}
          reviewedAt="2026-05-25"
        />

        <ShortAnswerSection service={service} />
        <PackageServiceSections service={service} />
        <DeveloperIntroSections service={service} />
        <ServiceInclusionSection service={service} />
        <OfferSnapshotSection service={service} />
        <PricingRowsSection service={service} />
        <AuditOfferSection service={service} />
        <UniqueServiceSection service={service} />
        <DeveloperHiringDecisionSection service={service} />
        <DecisionLogicSection service={service} />
        <WrongFitSection service={service} />
        <ProofNotesSection service={service} />
        <ContextualProofSection service={service} />
        <DeveloperProofSections service={service} sourceLinks={sourceLinks} />
        <AuditScopeOutcomeSections service={service} />

        <DeveloperArticleLinksSection
          service={service}
          articles={[publicDeveloperArticle, publicExperiencedArticle, publicExpertsArticle]}
        />
        <ExpertArticleLinksSection
          service={service}
          articles={[publicExpertsArticle, publicExperiencedArticle, publicDeveloperArticle]}
        />
        <AuditCostArticleLinkSection service={service} article={publicCostArticle} />

        <RelatedPathsSection service={service} />

        <FaqSection title="Common buyer questions." faqs={service.faq} />

        <CTASection
          headline={serviceCta.headline}
          subtext={serviceCta.subtext}
          sourceKind={`service:${service.slug}`}
          primaryLabel={serviceCta.primaryLabel}
        />

        <p className="sr-only">{serviceCta.srOnly}</p>
      </div>
    </>
  );
}
