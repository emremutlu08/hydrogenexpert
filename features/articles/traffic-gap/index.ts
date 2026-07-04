import type { Article } from "../../../lib/articles";

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

export const TRAFFIC_GAP_ARTICLES = TRAFFIC_GAP_ARTICLE_MODULES.map(({ draft, refresh }) => {
  return {
    ...draft,
    updatedAt: REFRESH_DATE,
    summary: refresh.summary,
    takeaways: refresh.takeaways,
    sections: [...draft.sections, ...refresh.sections],
    faq: refresh.faq,
  };
}) satisfies readonly Article[];
