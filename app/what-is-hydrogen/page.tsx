import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "What Is Shopify Hydrogen? A Plain-English Explanation",
  description:
    "A store-owner guide to Shopify Hydrogen: what it is, how it compares with Liquid themes, and when better UX can justify the investment today.",
  path: "/what-is-hydrogen",
});

export default function WhatIsHydrogenPage() {
  return (
    <div className="page-shell">
      <section className="max-w-4xl space-y-6">
        <p className="eyebrow">Plain-English Guide</p>
        <h1 className="font-display text-5xl leading-tight text-slate-900 md:text-6xl">
          What Is Shopify Hydrogen?
        </h1>
        <p className="text-xl leading-9 text-slate-600">
          Shopify Hydrogen is a custom storefront framework for brands that need
          more speed, more control, and better shopping experiences than a
          standard Shopify theme usually delivers.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Think of it as a custom front door for your store
          </h2>
          <p className="text-base leading-8 text-slate-600">
            Your Shopify admin, products, checkout, and operations stay in
            Shopify. Hydrogen changes the storefront experience your shoppers
            see. That matters when you want a faster homepage, cleaner product
            discovery, better mobile interactions, or richer merchandising.
          </p>
        </div>
        <div className="card space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            The business goal is not “new tech”
          </h2>
          <p className="text-base leading-8 text-slate-600">
            The business goal is a storefront that feels quicker, more premium,
            and easier to buy from. Owners usually care about conversion rate,
            average order value, and customer experience. Hydrogen is useful
            when those are being held back by theme limitations.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <p className="eyebrow">Hydrogen vs. Liquid</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Liquid is quicker to launch. Hydrogen gives you more room to grow.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            A Liquid theme is often the right choice for a simple store with
            standard needs. It is faster and cheaper to get live. But as your
            catalog, UX demands, or marketing strategy gets more complex, Liquid
            can start to feel restrictive.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Hydrogen gives you custom control over the storefront, which can
            unlock faster page transitions, more intentional mobile flows,
            cleaner search and filtering, and a better experience for repeat
            customers. The payoff is usually stronger UX and improved conversion,
            not a prettier stack diagram.
          </p>
        </div>

        <div className="card">
          <p className="eyebrow">When owners notice the difference</p>
          <ul className="mt-4 space-y-4 text-base leading-8 text-slate-600">
            <li>Pages feel faster, especially on mobile.</li>
            <li>Merchandising becomes easier to shape around real buying behavior.</li>
            <li>Brand storytelling can feel premium instead of template-driven.</li>
            <li>Complex experiences stop feeling bolted onto a theme.</li>
            <li>Teams stop fighting the storefront every time they want a new idea.</li>
          </ul>
        </div>
      </section>

      <CTASection
        primaryLink="linkedin"
        subtext="If you want a straight answer on whether Hydrogen fits your store, send me your current theme, revenue band, and what feels slow or limiting today."
      />
    </div>
  );
}
