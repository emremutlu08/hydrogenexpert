import Link from "next/link";

import { PageIntroSection } from "@/components/PageIntroSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "When Not to Use Shopify Hydrogen | Emre Mutlu",
  description:
    "Six scenarios where Shopify Hydrogen is not worth the cost, even for growing brands. An honest framework from an independent Hydrogen developer.",
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
      "Hydrogen controls the storefront experience up to the checkout handoff. Checkout itself stays on Shopify. If your conversion drops are happening at the cart, shipping selection, or payment step, a Hydrogen rebuild will not fix them. You will spend 6-16 weeks rebuilding the part of the funnel that was already working.",
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
      "A $15-80K storefront rebuild on a sub-$500K revenue base is not a proportional investment. The 6-16 week build time plus the 8-12 weeks of post-launch iteration means you will not see ROI for 6-9 months. If your business needs to grow 2x in the next 6 months to stay viable, the money is better spent on acquisition, retention, or product photography. Hydrogen is a scale investment, not a survival move.",
    alternatives: [
      "Spend the rebuild budget on paid acquisition and email retention",
      "Upgrade the theme and hire a UX designer for 2-3 specific flows",
      "Revisit the Hydrogen question at $1M-$2M ARR",
    ],
  },
  {
    title: "You are on Shopify Basic or Standard, not Shopify Plus",
    explanation:
      "Hydrogen works on any Shopify plan, but the full value stack (Oxygen hosting at scale, B2B features, checkout customization, Shopify Flow for complex merchandising) is Shopify Plus. Building a Hydrogen storefront on Basic is like buying a performance car to drive in first gear. The underlying platform capabilities will constrain what the custom storefront can actually do.",
    alternatives: [
      "Upgrade to Shopify Plus first if the business justifies the $2,300/month",
      "If Plus is not justified, stay on Basic and optimize the current theme",
      "Evaluate Hydrogen after the Plus upgrade is already in place",
    ],
  },
] as const;

export default function WhenNotToUseHydrogenPage() {
  return (
    <div className="page-shell">
      <PageIntroSection
        eyebrow="Honest framework"
        title="When Hydrogen is the wrong move"
        description="Six scenarios where a stronger theme, a cleaner app stack, or a narrower UX intervention is the smarter commercial choice."
        body="Most Hydrogen advice is sales material dressed up as education. The framework on this page is the opposite. These are the six situations where I would tell a store owner to walk away from a Hydrogen rebuild, even when they are asking for one. The reasoning is commercial, not ideological. Hydrogen is a powerful framework, but power has cost, and the cost does not always earn its place. If you see your own store in two or more of these scenarios, the honest next step is not a rebuild. It is a stronger theme, a cleaner app stack, or a narrow UX intervention. Save the rebuild budget for a stage where it actually moves revenue."
      />

      <section className="grid gap-8">
        {scenarios.map((scenario, index) => (
          <article key={scenario.title} className="card space-y-6">
            <div className="space-y-3">
              <p className="eyebrow">Scenario {index + 1}</p>
              <h2 className="section-heading text-[2rem] md:text-[2.6rem]">{scenario.title}</h2>
              <p className="text-base leading-8 text-neutral-600">{scenario.explanation}</p>
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

      <section className="hero-card space-y-5">
        <p className="dna-kicker text-[#8df1cb]">Still think Hydrogen might fit?</p>
        <h2 className="font-display text-[2.4rem] leading-[0.98] tracking-[-0.05em] text-white md:text-[3.2rem]">
          Still think Hydrogen might fit?
        </h2>
        <p className="max-w-3xl text-base leading-8 text-neutral-300">
          If your store does not match any of these scenarios, or only matches one weakly,
          Hydrogen might still be the right move. The 5-question test is the simplest next step.
        </p>
        <Link
          href="/should-i-use-it"
          className="inline-flex items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
        >
          Take the 5-question test
        </Link>
      </section>
    </div>
  );
}
