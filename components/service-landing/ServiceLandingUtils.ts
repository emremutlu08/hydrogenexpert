import type { ServicePackage } from "@/features/services/registry";
import { OWNER } from "@/lib/site";

export function getServiceCta(service: ServicePackage) {
  if (service.slug === "shopify-hydrogen-developer") {
    return {
      headline: "Need a senior Shopify Hydrogen developer?",
      subtext:
        "Send your current store URL and the commercial pressure behind the work. I will tell you whether senior Hydrogen development, scope review, Liquid cleanup, or no rebuild is the safer next step.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu provides senior Shopify Hydrogen development, audit, migration, SEO, and storefront optimization support for Shopify Plus and growth-stage brands.",
    };
  }

  if (service.slug === "shopify-hydrogen-experts") {
    return {
      headline: "Comparing Shopify Hydrogen experts?",
      subtext:
        "Send your current store URL, the expert or agency options you are comparing, and what feels risky about the rebuild. I will help you decide whether the safer next step is scope review, direct senior support, broader agency scope, Liquid cleanup, or no rebuild.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu helps Shopify Plus and growth-stage brands evaluate Shopify Hydrogen experts, production proof, migration risk, SEO, and implementation scope.",
    };
  }

  if (service.slug === "shopify-hydrogen-expert") {
    return {
      headline: "Need one senior Shopify Hydrogen expert?",
      subtext:
        "Send your current store URL, what feels risky, and whether you are comparing an expert, agency, or internal build. I will help you decide whether direct senior support, scope review, Liquid cleanup, or no rebuild is the safer next step.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu provides senior Shopify Hydrogen expert support for custom storefront architecture, Storefront API work, SEO-safe migration, performance, and launch-risk review.",
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

  if (service.slug === "shopify-hydrogen-cost") {
    return {
      headline: "Need to qualify a $2K-$5K first-build budget before scope expands?",
      subtext:
        "Send the current store URL, budget range, product count, design status, needed pages, and must-have features. I will tell you whether the project fits Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
      primaryLabel: "Request Scope Review",
      srOnly:
        "Emre Mutlu provides Shopify Hydrogen package pricing, scope review, rebuild planning, and senior storefront advisory for Shopify brands.",
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
