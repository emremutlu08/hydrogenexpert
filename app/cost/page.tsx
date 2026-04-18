import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Cost: What to Expect for Stores in 2025",
  description:
    "An honest breakdown of Shopify Hydrogen pricing, timelines, and what drives the difference between a lean rebuild and a complex storefront project.",
  path: "/cost",
});

const costFactors = [
  "Design complexity and how custom the experience needs to be",
  "Catalog size, filtering, and merchandising rules",
  "Integrations with ERP, subscriptions, reviews, or loyalty tools",
  "Migration scope from your current theme or storefront",
  "QA, analytics, launch support, and post-launch iteration",
] as const;

export default function CostPage() {
  return (
    <div className="page-shell">
      <section className="max-w-4xl space-y-6">
        <p className="eyebrow">Pricing Reality</p>
        <h1 className="font-display text-5xl leading-tight text-slate-900 md:text-6xl">
          Shopify Hydrogen Cost
        </h1>
        <p className="text-xl leading-9 text-slate-600">
          Most Shopify Hydrogen projects land somewhere between{" "}
          <strong>$15K and $80K</strong>. That range is wide because a lean
          speed-focused rebuild is very different from a premium storefront with
          custom UX, integrations, and a bigger launch plan.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="card">
          <p className="eyebrow">Lean Build</p>
          <p className="mt-4 text-4xl font-black text-slate-900">$15K–$30K</p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Best for brands that already know the pages they want, have limited
            integrations, and mainly need speed plus a cleaner UX.
          </p>
        </div>
        <div className="card">
          <p className="eyebrow">Growth Build</p>
          <p className="mt-4 text-4xl font-black text-slate-900">$30K–$55K</p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Common for stores with more customization, stronger mobile design
            demands, and a broader set of merchandising or conversion goals.
          </p>
        </div>
        <div className="card">
          <p className="eyebrow">Complex Build</p>
          <p className="mt-4 text-4xl font-black text-slate-900">$55K–$80K</p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Usually includes more advanced integrations, bigger catalogs, custom
            functionality, and a premium storefront experience.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="card">
          <p className="eyebrow">Timeline</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Expect 6 to 16 weeks depending on scope
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Smaller Hydrogen projects can move fast when requirements are clear.
            Bigger storefronts with complex integrations and more design review
            cycles naturally take longer. The best timelines come from decisive
            stakeholders, organized content, and a realistic launch plan.
          </p>
        </div>
        <div className="card">
          <p className="eyebrow">What changes the quote</p>
          <ul className="mt-4 space-y-3 text-base leading-8 text-slate-600">
            {costFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        primaryLink="linkedin"
        subtext="If you want a realistic number instead of agency guesswork, I can review your current storefront and tell you where your project likely fits inside that range."
      />
    </div>
  );
}
