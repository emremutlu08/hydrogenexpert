import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { LiquidHydrogenDecisionSection } from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { LiquidCleanupMiniOffer } from "@/components/LiquidCleanupMiniOffer";
import { PageIntroSection } from "@/components/PageIntroSection";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "When Not to Use Shopify Hydrogen | Honest Merchant Guide",
  description:
    "Six scenarios where Shopify Hydrogen may be the wrong move and a stronger theme, cleaner app stack, or narrower UX cleanup is the safer business decision.",
  path: "/when-not-to-use-hydrogen",
});

const scenarios = [
  {
    title: "Your catalog is under 500 SKUs with standard product attributes",
    explanation:
      "A small catalog with consistent attributes (size, color, material) is exactly what Shopify themes are optimized for. The filtering, sorting, and product detail flow that Hydrogen unlocks are most valuable when your catalog has non-standard attributes, dynamic bundles, or merchandising logic that theme templates cannot express. A 300-SKU apparel store with straightforward variants does not hit those limits. The theme is the bottleneck nowhere in that journey.",
    alternatives: [
      "Invest in a premium theme (Impulse, Prestige, Empire)",
      "Hire a theme developer for 2-3 custom section builds",
      "Improve photography and copy before rebuilding the storefront",
    ],
  },
  {
    title: "Your biggest UX problem is checkout, not browsing",
    explanation:
      "Hydrogen controls the storefront experience up to the checkout handoff. Checkout itself stays on Shopify. If your conversion drops are happening at the cart, shipping selection, or payment step, a Hydrogen rebuild will not fix them. You will spend the build budget rebuilding the part of the funnel that was already working.",
    alternatives: [
      "Use Shopify Checkout Extensibility (app-based checkout customization)",
      "Audit your Shop Pay setup and accelerated checkout flow",
      "Test one-page checkout, express options, and cart UX in your current theme",
    ],
  },
  {
    title: "Your team has no frontend developer for ongoing changes",
    explanation:
      "Hydrogen produces a real application, not a theme. Ongoing changes require a developer who can read React, understand Remix loaders, and ship to Oxygen. If your team relies on merchandisers making theme edits through the admin or a freelancer once a quarter, a Hydrogen storefront will turn every small change into a scheduled dev ticket. That is operational drag you are not staffed for.",
    alternatives: [
      "Stay on a flexible theme that merchandisers can edit",
      "Hire a part-time Shopify developer before considering Hydrogen",
      "Use a CMS-driven theme setup (Shogun, Pagefly) for non-dev page building",
    ],
  },
  {
    title: "Your brand experience is driven by photography, not interaction",
    explanation:
      "Some brands sell through editorial photography and typographic restraint. A theme handles this beautifully. Hydrogen pays off when the experience has interaction complexity (configurators, filtered merchandising, multi-step product journeys). If your entire brand feels like a magazine spread, the performance gain Hydrogen offers is not visible to the shopper because they are scrolling images, not interacting with logic.",
    alternatives: [
      "Choose a premium editorial theme (Palo Alto, Symmetry, Mr Parker)",
      "Invest in photography and typography, not frontend framework",
      "Focus image optimization (AVIF, responsive srcsets) on the current theme",
    ],
  },
  {
    title: "Your revenue is under $500K ARR and you need ROI inside 6 months",
    explanation:
      "Even a lean Hydrogen build needs a clear business case, and a larger custom storefront rebuild on a sub-$500K revenue base is often not proportional. If your business needs to grow 2x in the next 6 months to stay viable, the money is often better spent on acquisition, retention, product photography, or a smaller Liquid improvement. Hydrogen is a scale investment, not a survival move.",
    alternatives: [
      "Spend the rebuild budget on paid acquisition and email retention",
      "Upgrade the theme and hire a UX designer for 2-3 specific flows",
      "Revisit the Hydrogen question at $1M-$2M ARR",
    ],
  },
  {
    title: "You are on Shopify Basic or Standard and the business case is not mature yet",
    explanation:
      "Hydrogen can run on most Shopify plans, and Oxygen is available on all Shopify plans except Starter at no extra cost. The issue is not that Hydrogen technically requires Shopify Plus. The issue is whether the business is ready to maintain a custom application and whether Plus-level needs such as B2B, checkout customization, advanced automation, expansion-store strategy, or enterprise support justify the complexity.\n\nFor many Basic or Standard stores, the safer move is still to improve the current theme, simplify the app stack, and delay the custom storefront until the operating model is ready. Hydrogen becomes more attractive when the brand has the revenue, team, and roadmap to keep improving a real application after launch.",
    alternatives: [
      "Keep Basic or Standard and optimize the current theme if the constraints are ordinary.",
      "Upgrade to Shopify Plus only when platform needs justify it, not because Hydrogen sounds premium.",
      "Evaluate Hydrogen after budget, team ownership, and maintenance readiness are clear.",
    ],
  },
] as const;

const decisionRows = [
  {
    question: "Is the current problem ordinary theme UX?",
    liquidMove: "Improve the theme, sections, apps, content, or media pipeline first.",
    hydrogenMove: "Only reconsider Hydrogen when the theme cannot express the needed buying journey.",
    proof: "Useful when the issue is standard catalog browsing, photography, copy, or simple merchandising.",
  },
  {
    question: "Is the constraint custom product discovery or data flow?",
    liquidMove: "Prototype the smallest possible Liquid improvement before a rebuild.",
    hydrogenMove: "Scope Hydrogen when product logic, content-led commerce, or routing needs exceed theme limits.",
    proof: "Useful when the issue is application behavior, not just visual polish.",
  },
  {
    question: "Can the team maintain an application after launch?",
    liquidMove: "Stay on Liquid if merchandisers need most changes to happen in the Shopify admin.",
    hydrogenMove: "Use Hydrogen only with a developer, retainer, or internal owner attached.",
    proof: "Hydrogen creates application ownership, so maintenance capacity is part of the decision.",
  },
] as const;

const faqs = [
  {
    question: "Is Shopify Hydrogen bad for small stores?",
    answer:
      "No. Hydrogen can technically work for smaller stores, but many small stores are better served by a stronger Shopify theme because the maintenance cost and developer dependency may outweigh the upside.",
  },
  {
    question: "Should I use Hydrogen if my checkout conversion is the problem?",
    answer:
      "Usually no. Hydrogen controls the storefront before Shopify checkout. If the problem is payment, shipping, checkout configuration, or Shop Pay behavior, fix that funnel first.",
  },
  {
    question: "When is Hydrogen worth revisiting?",
    answer:
      "Revisit Hydrogen when the store has a real custom storefront constraint: complex product discovery, content-commerce, app replacement pressure, route-level SEO control, or a team ready to maintain a React application.",
  },
] as const;
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "When Not to Use Hydrogen", href: "/when-not-to-use-hydrogen" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);
const faqSchema = buildFaqPageSchema(faqs);

export default function WhenNotToUseHydrogenPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Honest framework"
          title="When Hydrogen is the wrong move"
          description="Six scenarios where a stronger theme, a cleaner app stack, or a narrower UX intervention is the smarter commercial choice."
          body="Most Hydrogen advice is sales material dressed up as education. The framework on this page is the opposite. These are the six situations where I would tell a store owner to walk away from a Hydrogen rebuild, even when they are asking for one. The reasoning is commercial, not ideological. Hydrogen is a powerful framework, but power has cost, and the cost does not always earn its place. If you see your own store in two or more of these scenarios, the honest next step is not a rebuild. It is a stronger theme, a cleaner app stack, or a narrow UX intervention. Save the rebuild budget for a stage where it actually moves revenue."
          reviewedAt="2026-05-25"
        />

        <section className="surface-card space-y-6">
          <div className="max-w-4xl">
            <p className="eyebrow">Fast decision table</p>
            <h2 className="section-heading mt-3 text-[2.2rem] md:text-[2.8rem]">
              Start with the constraint, not the framework.
            </h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Name the problem, compare the safer move, and only upgrade when
              the constraint justifies application ownership.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#f7f7f7]">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase text-[#0f8a5d]">
                    Question
                  </th>
                  <th className="px-5 py-4 font-bold uppercase text-[#0f8a5d]">
                    Safer Liquid Move
                  </th>
                  <th className="px-5 py-4 font-bold uppercase text-[#0f8a5d]">
                    Hydrogen Move
                  </th>
                  <th className="px-5 py-4 font-bold uppercase text-[#0f8a5d]">
                    Proof Signal
                  </th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr key={row.question} className="border-t border-black/8 align-top">
                    <td className="min-w-[14rem] px-5 py-4 font-semibold leading-7 text-neutral-800">
                      {row.question}
                    </td>
                    <td className="min-w-[15rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.liquidMove}
                    </td>
                    <td className="min-w-[15rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.hydrogenMove}
                    </td>
                    <td className="min-w-[15rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.proof}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8">
          {scenarios.map((scenario, index) => (
            <article key={scenario.title} className="card space-y-6">
              <div className="space-y-3">
                <p className="eyebrow">Scenario {index + 1}</p>
                <h2 className="section-heading text-[2rem] md:text-[2.6rem]">
                  {scenario.title}
                </h2>
                <p className="text-base leading-8 text-neutral-600">
                  {scenario.explanation.split("\n\n").map((paragraph) => (
                    <span key={paragraph} className="mb-4 block last:mb-0">
                      {paragraph}
                    </span>
                  ))}
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-black/8 bg-[#f6f7f7] p-6">
                <p className="dna-kicker text-[#10b981]">What to do instead</p>
                <ul className="editorial-list mt-4">
                  {scenario.alternatives.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <LiquidHydrogenDecisionSection />
        <LiquidCleanupMiniOffer />
        <FaqSection
          title="Short answers before you spend rebuild money."
          faqs={faqs}
        />

        <section className="hero-card space-y-5">
          <p className="dna-kicker text-[#8df1cb]">Still think Hydrogen might fit?</p>
          <h2 className="font-display text-[2.4rem] leading-[0.98] tracking-[-0.05em] text-white md:text-[3.2rem]">
            Still think Hydrogen might fit?
          </h2>
          <p className="max-w-3xl text-base leading-8 text-neutral-300">
            If your store does not match any of these scenarios, or only matches one
            weakly, Hydrogen might still be the right move. The 5-question test is
            the simplest next step.
          </p>
          <Link
            href="/should-i-use-it"
            className="inline-flex items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
          >
            Take the 5-question test
          </Link>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shopify-hydrogen-packages"
              className="inline-flex items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
            >
              View Build Packages
            </Link>
            <Link
              href="/shopify-hydrogen-cost"
              className="inline-flex items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
            >
              Review Hydrogen cost ranges
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
            >
              Request Scope Review
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
