import type { Article } from "../../../lib/articles";
import {
  COMMERCIAL_INTENT_OWNERS,
  HIRING_INTENT_OWNER_PATH,
  normalizeCommercialLinks,
} from "../../search-intent";

import { REFRESH_DATE } from "./shared";
import * as shopifyHydrogenNextjs from "./shopify-hydrogen-nextjs";
import * as shopifyHydrogenCmsVisualBuilder from "./shopify-hydrogen-cms-visual-builder";
import * as shopifyAppsInHydrogenCompatibilityChecklist from "./shopify-apps-in-hydrogen-compatibility-checklist";
import * as shopifyHydrogenAnalyticsMigration from "./shopify-hydrogen-analytics-migration";
import * as shopifyStorefrontMcpUcpAiReadiness from "./shopify-storefront-mcp-ucp-ai-readiness";
import * as shopifyHydrogenB2bWholesaleGuide from "./shopify-hydrogen-b2b-wholesale-guide";
import * as hydrogenDeploymentChecklistOxygenPreviewProductionQa from "./hydrogen-deployment-checklist-oxygen-preview-production-qa";
import * as shopifyHydrogenMarketsI18nSeo from "./shopify-hydrogen-markets-i18n-seo";
import * as shopifyHydrogenSearchFiltersProductDiscovery from "./shopify-hydrogen-search-filters-product-discovery";
import * as shopifyHydrogenSeoChecklist from "./shopify-hydrogen-seo-checklist";

const TRAFFIC_GAP_ARTICLE_MODULES = [
  shopifyHydrogenNextjs,
  shopifyHydrogenCmsVisualBuilder,
  shopifyAppsInHydrogenCompatibilityChecklist,
  shopifyHydrogenAnalyticsMigration,
  shopifyStorefrontMcpUcpAiReadiness,
  shopifyHydrogenB2bWholesaleGuide,
  hydrogenDeploymentChecklistOxygenPreviewProductionQa,
  shopifyHydrogenMarketsI18nSeo,
  shopifyHydrogenSearchFiltersProductDiscovery,
  shopifyHydrogenSeoChecklist,
] as const;

/**
 * These ten articles hold the best Search Console positions on the site
 * (roughly 6 to 10), while the commercial pages sit near 20. None of them
 * linked to the hiring owner, so the strongest pages passed their
 * authority nowhere. Guarantee the link at assembly time.
 */
const CANONICAL_HIRING_LINK = {
  href: HIRING_INTENT_OWNER_PATH,
  label: COMMERCIAL_INTENT_OWNERS[HIRING_INTENT_OWNER_PATH].linkLabel,
} as const;

function withCanonicalHiringLink(links: readonly Article["links"][number][]) {
  const deduped = normalizeCommercialLinks(links);

  return deduped.some((link) => link.href === CANONICAL_HIRING_LINK.href)
    ? deduped
    : [...deduped, CANONICAL_HIRING_LINK];
}

export const TRAFFIC_GAP_ARTICLES = TRAFFIC_GAP_ARTICLE_MODULES.map(({ draft, refresh }) => {
  return {
    ...draft,
    updatedAt: "updatedAt" in refresh ? refresh.updatedAt : REFRESH_DATE,
    summary: refresh.summary,
    takeaways: refresh.takeaways,
    sections: [...draft.sections, ...refresh.sections],
    faq: refresh.faq,
    links: withCanonicalHiringLink(draft.links),
  };
}) satisfies readonly Article[];
