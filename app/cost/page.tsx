import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { TechnicalFigure } from "@/components/TechnicalFigure";
import { buildMetadata } from "@/lib/seo";
import { buildFaqPageSchema } from "@/lib/structured-data";
import { STATIC_PAGE_VISUALS } from "@/lib/curated-images";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Cost for Shopify Plus Brands | Emre Mutlu",
  description:
    "Shopify Hydrogen cost breakdown for Shopify Plus brands, including $15K-$80K pricing ranges, timelines, migration risk, integrations, and optimization scope.",
  path: "/cost",
});

const costFactors = [
  "Design complexity and how custom the experience needs to be",
  "Catalog size, filtering, and merchandising rules",
  "Integrations with ERP, subscriptions, reviews, or loyalty tools",
  "Migration scope from your current theme or storefront",
  "QA, analytics, launch support, and post-launch iteration",
] as const;

const pricingBands = [
  {
    label: "Lean Build",
    range: "$15K-$30K",
    description:
      "Best for brands that already know the pages they want, have limited integrations, and mainly need speed plus a cleaner UX.",
  },
  {
    label: "Growth Build",
    range: "$30K-$55K",
    description:
      "Common for stores with more customization, stronger mobile design demands, and a broader set of merchandising goals.",
  },
  {
    label: "Complex Build",
    range: "$55K-$80K",
    description:
      "Usually includes advanced integrations, bigger catalogs, custom functionality, and a more premium storefront experience.",
  },
] as const;

const costNextSteps = [
  {
    href: "/shopify-hydrogen-audit",
    label: "Start with a Hydrogen audit",
    note: "Best when the budget range is still unclear or the rebuild may not be justified.",
  },
  {
    href: "/liquid-to-hydrogen-migration",
    label: "Scope a Liquid to Hydrogen migration",
    note: "Best when the current theme is the constraint and route, SEO, analytics, and launch risk matter.",
  },
  {
    href: "/custom-shopify-hydrogen-storefront",
    label: "Plan a custom Hydrogen storefront",
    note: "Best when bespoke PDPs, collections, content, or mobile journeys justify custom development.",
  },
] as const;

const faqs = [
  {
    question: "Is Hydrogen always more expensive than Liquid?",
    answer:
      "Yes in most cases. Liquid is usually cheaper to launch and cheaper to maintain. Hydrogen becomes the better investment only when the storefront needs custom UX, cleaner performance patterns, or faster feature delivery than a theme can support cleanly.",
  },
  {
    question: "What does ongoing annual maintenance usually look like?",
    answer:
      "Maintenance depends on how actively the storefront evolves. A stable Hydrogen storefront can be light to maintain, but it is still a real application, not just a theme. Teams should budget for dependency updates, QA, and ongoing implementation support.",
  },
  {
    question: "What usually pushes a migration budget higher?",
    answer:
      "The biggest cost drivers are integrations, custom merchandising logic, analytics requirements, QA depth, and the number of pages or templates that need a premium bespoke experience. The word headless alone does not decide the price.",
  },
  {
    question: "Can a serious Hydrogen project happen under $15K?",
    answer:
      "Only in very narrow cases. If the scope is small, the design is already clear, and there are almost no integrations, a smaller project can happen. Most real Shopify Plus storefront rebuilds with meaningful scope land above that line.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);

export default function CostPage() {
  const heroVisual = STATIC_PAGE_VISUALS.cost;

  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="page-shell">
        <PageIntroSection
          eyebrow="Pricing Reality"
          title="Shopify Hydrogen Cost"
          description="A practical budget view for Shopify Plus brands trying to understand what really drives scope, timing, and total storefront cost."
          body={
            <>
              Most Shopify Hydrogen projects land somewhere between <strong>$15K and $80K</strong>. That range is wide because a lean speed-focused rebuild is very different from a premium storefront with custom UX, integrations, and a bigger launch plan.
            </>
          }
        />

        <TechnicalFigure
          src={heroVisual.src}
          alt={heroVisual.alt}
          title={heroVisual.title}
          priority
        />

        <section className="grid gap-6 lg:grid-cols-3">
          {pricingBands.map((band) => (
            <div key={band.label} className="card">
              <p className="eyebrow">{band.label}</p>
              <p className="display-metric">{band.range}</p>
              <p className="mt-4 text-base leading-8 text-neutral-600">{band.description}</p>
            </div>
          ))}
        </section>

        <section className="card-soft space-y-5">
          <div className="max-w-3xl">
            <p className="eyebrow">Cost next steps</p>
            <h2 className="subsection-title mt-3">Match the budget question to the right service path.</h2>
          </div>
          <div className="authority-links">
            {costNextSteps.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">HydrogenExpert</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="section-divider" />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.88fr]">
            <div className="card">
              <p className="eyebrow">Why ranges vary so much</p>
              <h2 className="subsection-title">
                Scope drives cost much more than buzzwords do
              </h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                A merchant reviewing Hydrogen pricing should focus on what the storefront must actually do. Custom collection behavior, merchandising rules, subscriptions, loyalty, search, and ERP connections all change the real cost more than the label headless ever does.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                The healthiest projects usually have a clear launch version, a list of nice-to-haves that can wait, and a realistic review cycle. That is what keeps a project from drifting toward the top of the range for no good reason.
              </p>
            </div>

            <div className="card-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
                What changes the quote
              </p>
              <ul className="editorial-list mt-5">
                {costFactors.map((factor) => (
                  <li key={factor}>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FaqSection
          title="Cost questions I hear before a real Hydrogen scope starts."
          faqs={faqs}
        />

        <CTASection
          primaryLink="linkedin"
          subtext="If you want a realistic number instead of agency guesswork, I can review your current storefront and tell you where your project likely fits inside that range."
          sourceKind="cost_cta"
        />
      </div>
    </>
  );
}
