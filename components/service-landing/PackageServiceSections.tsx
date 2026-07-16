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
import type { ServicePackage } from "@/features/services/registry";

export function PackageServiceSections({ service }: { service: ServicePackage }) {
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

      {isCustomBuildPage ? (
        <HydrogenBuildPackages
          title="Start with a package before custom scope expands."
          description="Starter and Standard builds keep the first launch focused. Growth and Custom scopes add complexity only when the business case is clear."
        />
      ) : null}

      {isAuditPage || isMigrationPage ? <ScopeReviewInputsSection /> : null}

      {isMigrationPage || isSeoPage ? <MigrationSeoRiskChecklistSection /> : null}

      {isCostPage ? (
        <>
          <PriceDriversSection />
          <TwoKBuildBoundarySection />
          <EnterpriseScopeBoundarySection />
          <LiquidHydrogenDecisionSection />
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
