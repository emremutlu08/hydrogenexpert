import type { ContentSourceMetadata } from "../../content-sources";
import { SHOPIFY_CONTENT_LAST_VERIFIED, SOURCE_PACKS } from "../../content-sources";

import type { ServicePackageBase } from "./base";

export const SERVICE_SOURCE_METADATA = {
  "shopify-hydrogen-agency-alternative": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "headless-shopify-agency-alternative": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-developer": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: [
      "official_shopify_fact",
      "emre_experience",
      "commercial_opinion",
      "case_study_fact",
    ],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-expert": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-experts": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-strategy-fit-audit": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "liquid-to-hydrogen-migration": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenGithubDeployments,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-seo": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "seo_hypothesis"],
    sourceMap: [
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.googleHelpfulContent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "shopify-hydrogen-cost": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.headlessBuildOptions,
      SOURCE_PACKS.packDigitalHydrogen,
      SOURCE_PACKS.weaverseHydrogen,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "custom-hydrogen-storefront-development": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.packDigitalHydrogen,
      SOURCE_PACKS.weaverseHydrogen,
      SOURCE_PACKS.customerAccountApi,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-performance-seo-ux-optimization": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenDataFetching,
      SOURCE_PACKS.hydrogenSeo,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.hydrogenConsent,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
  "hydrogen-support-retainer": {
    lastVerified: SHOPIFY_CONTENT_LAST_VERIFIED,
    claimTypes: ["official_shopify_fact", "emre_experience", "commercial_opinion"],
    sourceMap: [
      SOURCE_PACKS.hydrogenFundamentals,
      SOURCE_PACKS.hydrogenGithubDeployments,
      SOURCE_PACKS.hydrogenAnalytics,
      SOURCE_PACKS.caseStudyEvidence,
      SOURCE_PACKS.emreProductionExperience,
    ],
  },
} as const satisfies Record<ServicePackageBase["slug"], ContentSourceMetadata>;
