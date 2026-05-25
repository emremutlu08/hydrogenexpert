import type { ServiceOfferSnapshot, ServicePackageBase } from "./base";

export const SERVICE_OFFER_SNAPSHOTS = {
  "shopify-hydrogen-agency-alternative": {
    entryPoint: "Hydrogen scope review or senior scoping sprint",
    typicalTimeline: "Free first pass first; deeper scope timing depends on risk",
    expectedOutput: "A clear decision path: audit, migration, build, optimization, support, Liquid, or no rebuild",
    qualification: "Best when stakeholders are comparing agency options but need Hydrogen-specific judgment first.",
  },
  "headless-shopify-agency-alternative": {
    entryPoint: "Headless architecture decision review",
    typicalTimeline: "1-2 weeks depending on catalog, integrations, and SEO risk",
    expectedOutput: "Liquid vs Hydrogen vs other headless recommendation with risk notes",
    qualification: "Best when the brand wants headless but has not proved the custom storefront case yet.",
  },
  "shopify-hydrogen-developer": {
    entryPoint: "Senior development support or implementation scope",
    typicalTimeline: "Focused package timelines depend on approved routes, design readiness, integrations, and launch QA",
    expectedOutput: "Production-ready Hydrogen routes, components, Storefront API work, QA, and launch support",
    qualification: "Best when Hydrogen is already likely and the team needs senior implementation ownership.",
  },
  "shopify-hydrogen-expert": {
    entryPoint: "Expert-fit review, direct senior support, or scope review",
    typicalTimeline: "2-5 business days for first-pass review; paid review only when risk is unclear",
    expectedOutput: "Clear recommendation on direct expert support, audit, agency scope, Liquid cleanup, or no rebuild",
    qualification: "Best when the buyer wants one accountable Hydrogen specialist before committing scope.",
  },
  "shopify-hydrogen-experts": {
    entryPoint: "Expert-fit review, scope review, or senior implementation scope",
    typicalTimeline: "3-5 business days for first-pass evaluation; paid review only when risk is unclear",
    expectedOutput: "Vendor-path recommendation with proof, risk, SEO, implementation, and maintenance notes",
    qualification: "Best when stakeholders are comparing Hydrogen experts, agencies, and direct senior support.",
  },
  "hydrogen-strategy-fit-audit": {
    entryPoint: "Free first-pass scope review or optional paid Scope & Risk Review",
    typicalTimeline: "Free first pass first; 2-4 business days when paid risk review is needed",
    expectedOutput: "Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild recommendation",
    qualification: "Best before a fixed-scope build when requirements or launch risks may affect the estimate.",
  },
  "liquid-to-hydrogen-migration": {
    entryPoint: "Migration scope and route-risk planning",
    typicalTimeline: "2-4 weeks for planning; implementation depends on route count, integrations, SEO risk, and catalog complexity",
    expectedOutput: "Migration plan, route map, storefront implementation, analytics checks, QA, and launch support",
    qualification: "Best when the current Liquid theme is truly blocking the buying experience or feature velocity.",
  },
  "shopify-hydrogen-seo": {
    entryPoint: "Hydrogen SEO audit or implementation cleanup",
    typicalTimeline: "1-3 weeks depending on route count and product-state complexity",
    expectedOutput: "Metadata, canonical, JSON-LD, sitemap, robots, SSR content, and crawl-consistency fixes",
    qualification: "Best when a Hydrogen storefront is live or close to launch and search signals need discipline.",
  },
  "shopify-hydrogen-cost": {
    entryPoint: "Free scope review for Starter, Standard, Growth, or Custom fit",
    typicalTimeline: "Depends on route count, design readiness, integrations, migration risk, and launch QA",
    expectedOutput: "Package fit, budget drivers, risk notes, and recommended next step",
    qualification: "Best when stakeholders need to understand why a build is $2K, $3K-$3.5K, $4.5K-$5K, or custom.",
  },
  "custom-hydrogen-storefront-development": {
    entryPoint: "Starter, Standard, Growth, or Custom build scope",
    typicalTimeline: "Package timeline depends on templates, components, integrations, and migration risk",
    expectedOutput: "Lean Hydrogen storefront surfaces, product flows, cart behavior, checkout handoff, performance and launch QA",
    qualification: "Best when theme constraints block a real product, content, or mobile buying journey but the first launch should stay fixed-scope.",
  },
  "hydrogen-performance-seo-ux-optimization": {
    entryPoint: "Performance, SEO, and UX cleanup sprint",
    typicalTimeline: "1-4 weeks depending on diagnosis and implementation depth",
    expectedOutput: "Prioritized fixes for SSR, data loading, Storefront API queries, media, metadata, and UX friction",
    qualification: "Best when the Hydrogen storefront is live but slow, fragile, hard to crawl, or hard to grow.",
  },
  "hydrogen-support-retainer": {
    entryPoint: "Monthly senior Hydrogen support",
    typicalTimeline: "Monthly retainer after initial codebase review",
    expectedOutput: "Recurring feature work, bug fixes, release support, integration help, and technical planning",
    qualification: "Best when the storefront direction is stable and the team needs continuity after launch.",
  },
} as const satisfies Record<ServicePackageBase["slug"], ServiceOfferSnapshot>;
