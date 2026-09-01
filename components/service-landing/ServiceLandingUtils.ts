import type { ServicePackage } from "@/features/services/registry";
import {
  getCommercialIntentOwner,
  isCommercialIntentPath,
} from "@/features/search-intent";
import { OWNER } from "@/lib/site";

export function getServiceCta(service: ServicePackage) {
  if (isCommercialIntentPath(service.pagePath)) {
    const intentOwner = getCommercialIntentOwner(service.pagePath);

    return {
      ...intentOwner.cta,
      srOnly: `${OWNER.name} provides senior Shopify Hydrogen support for ${intentOwner.intent.toLowerCase()}`,
    };
  }

  if (service.slug === "hydrogen-strategy-fit-audit") {
    return {
      headline: "Need a clear Hydrogen scope review before rebuild budget moves?",
      subtext:
        "Send your current store URL, what feels slow or limiting, and why Hydrogen is being discussed. I will tell you whether the next step is free scope review, paid risk review, full audit, Liquid cleanup, focused optimization, or no rebuild.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu provides Shopify Hydrogen scope reviews, migration planning, SEO review, and senior storefront advisory for Shopify brands.",
    };
  }

  if (service.slug === "shopify-hydrogen-seo") {
    return {
      headline: "Need a Hydrogen SEO review before traffic or rankings are at risk?",
      subtext:
        "Send the current store URL, planned route changes, and the SEO pressure behind the work. I will tell you whether the safer next step is an SEO audit, migration review, focused cleanup, or no rebuild.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu provides Shopify Hydrogen SEO review, metadata, canonical, sitemap, structured data, and crawlability support for custom Shopify storefronts.",
    };
  }

  if (service.slug === "liquid-to-hydrogen-migration") {
    return {
      headline: "Need a Liquid to Hydrogen migration plan that protects SEO and launch stability?",
      subtext:
        "Send the current theme, store URL, and what feels limiting. I will tell you whether migration, Liquid cleanup, focused optimization, or no rebuild is the safer next step.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu provides Liquid to Hydrogen migration planning, route mapping, SEO preservation, and senior storefront implementation support.",
    };
  }

  return {
    headline: "Need senior Hydrogen support for this storefront decision?",
    subtext:
      "Send the current store URL and the commercial pressure behind the work. I will help you choose the safer next step: audit, migration, custom build, optimization, support, Liquid cleanup, or no rebuild.",
    primaryLabel: "Request Scope Review",
    srOnly: `${OWNER.name} provides senior Shopify Hydrogen service support for Shopify Plus and growth-stage storefronts.`,
  };
}
