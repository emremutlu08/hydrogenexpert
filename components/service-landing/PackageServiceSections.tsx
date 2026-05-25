import {
  AiAssistedWorkflowSection,
  AuditScopeReviewSection,
  HydrogenBuildPackages,
  LiquidHydrogenDecisionSection,
  PriceDriversSection,
  PricingFaqSection,
  TwoKBuildBoundarySection,
} from "@/components/HydrogenPackages";
import { LiquidCleanupMiniOffer } from "@/components/LiquidCleanupMiniOffer";
import { ScopeReviewBriefTemplates } from "@/components/ScopeReviewBriefTemplates";
import type { ServicePackage } from "@/lib/services";

export function PackageServiceSections({ service }: { service: ServicePackage }) {
  const isPackageCommercialPage =
    service.slug === "shopify-hydrogen-cost" ||
    service.slug === "custom-hydrogen-storefront-development";
  const isCostPage = service.slug === "shopify-hydrogen-cost";
  const isCustomBuildPage = service.slug === "custom-hydrogen-storefront-development";

  return (
    <>
      {service.slug === "hydrogen-strategy-fit-audit" ? <AuditScopeReviewSection /> : null}

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

      {isCostPage ? (
        <>
          <PriceDriversSection />
          <TwoKBuildBoundarySection />
          <LiquidHydrogenDecisionSection />
          <LiquidCleanupMiniOffer />
          <ScopeReviewBriefTemplates />
          <AiAssistedWorkflowSection />
          <PricingFaqSection />
        </>
      ) : null}

      {isCustomBuildPage ? (
        <>
          <TwoKBuildBoundarySection />
          <AiAssistedWorkflowSection />
          <PricingFaqSection />
        </>
      ) : null}
    </>
  );
}
