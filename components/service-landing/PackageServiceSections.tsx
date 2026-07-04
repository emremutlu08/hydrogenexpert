import {
  AiAssistedWorkflowSection,
  AuditScopeReviewSection,
  EnterpriseScopeBoundarySection,
  HydrogenToolingDecisionSection,
  HydrogenBuildPackages,
  HydrogenOwnershipCostSection,
  IntegrationComplexityBoundarySection,
  LiquidHydrogenDecisionSection,
  MigrationSeoRiskChecklistSection,
  PackageReadinessSection,
  PriceDriversSection,
  PricingFaqSection,
  ScopeReviewInputsSection,
  SeniorSpecialistAgencyComparisonSection,
  TwoKBuildBoundarySection,
} from "@/components/HydrogenPackages";
import { LiquidCleanupMiniOffer } from "@/components/LiquidCleanupMiniOffer";
import { ScopeReviewBriefTemplates } from "@/components/ScopeReviewBriefTemplates";
import type { ServicePackage } from "@/features/services/registry";

export function PackageServiceSections({ service }: { service: ServicePackage }) {
  const isPackageCommercialPage =
    service.slug === "shopify-hydrogen-cost" ||
    service.slug === "custom-hydrogen-storefront-development";
  const isCostPage = service.slug === "shopify-hydrogen-cost";
  const isCustomBuildPage = service.slug === "custom-hydrogen-storefront-development";
  const isAgencyComparisonPage =
    service.slug === "shopify-hydrogen-agency-alternative" ||
    service.slug === "headless-shopify-agency-alternative";
  const isMigrationPage = service.slug === "liquid-to-hydrogen-migration";
  const isSeoPage = service.slug === "shopify-hydrogen-seo";
  const isAuditPage = service.slug === "hydrogen-strategy-fit-audit";
  const isSupportPage = service.slug === "hydrogen-support-retainer";

  return (
    <>
      {service.slug === "hydrogen-strategy-fit-audit" ? <AuditScopeReviewSection /> : null}

      {isAgencyComparisonPage ? <SeniorSpecialistAgencyComparisonSection /> : null}

      {isPackageCommercialPage ? (
        <HydrogenBuildPackages
          title={
            isCostPage
              ? "Package comparison for fixed-scope Hydrogen storefronts."
              : "Start with a package before custom scope expands."
          }
          description={
            isCostPage
              ? "A clear first version can be scoped around pages, product flow, cart behavior, checkout handoff, SEO baseline, and launch QA."
              : "Starter and Standard builds keep the first launch focused. Growth and Custom scopes add complexity only when the business case is clear."
          }
        />
      ) : null}

      {isAuditPage || isMigrationPage ? <ScopeReviewInputsSection /> : null}

      {isMigrationPage || isSeoPage ? <MigrationSeoRiskChecklistSection /> : null}

      {isCostPage ? (
        <>
          <PriceDriversSection />
          <PackageReadinessSection />
          <TwoKBuildBoundarySection />
          <EnterpriseScopeBoundarySection />
          <HydrogenToolingDecisionSection />
          <LiquidHydrogenDecisionSection />
          <HydrogenOwnershipCostSection />
          <IntegrationComplexityBoundarySection />
          <LiquidCleanupMiniOffer />
          <ScopeReviewBriefTemplates />
          <AiAssistedWorkflowSection />
          <PricingFaqSection />
        </>
      ) : null}

      {isCustomBuildPage ? (
        <>
          <TwoKBuildBoundarySection />
          <PackageReadinessSection />
          <EnterpriseScopeBoundarySection />
          <HydrogenToolingDecisionSection />
          <IntegrationComplexityBoundarySection />
          <AiAssistedWorkflowSection />
          <PricingFaqSection />
        </>
      ) : null}

      {isSupportPage ? <HydrogenOwnershipCostSection /> : null}
    </>
  );
}
