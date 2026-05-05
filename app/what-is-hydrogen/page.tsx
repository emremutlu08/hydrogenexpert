import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { TechnicalFigure } from "@/components/TechnicalFigure";
import { STATIC_PAGE_VISUALS } from "@/lib/curated-images";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "What Is Shopify Hydrogen for Shopify Plus Brands?",
  description:
    "A plain-English guide for Shopify Plus brands comparing Shopify Hydrogen with Liquid themes, custom UX needs, and when the added complexity is worth it.",
  path: "/what-is-hydrogen",
});

const differences = [
  "A storefront that can feel faster and more responsive on mobile",
  "More freedom to shape navigation, merchandising, and storytelling",
  "Fewer theme workarounds when the experience gets more ambitious",
  "A buying flow that can be designed around conversion instead of theme constraints",
] as const;

const faqs = [
  {
    question: "What is Shopify Hydrogen in practical terms?",
    answer:
      "Shopify Hydrogen is Shopify’s framework for building a custom storefront while keeping products, checkout, and operations inside Shopify. For merchants, the real question is not what it is technically. The real question is whether the current theme is limiting speed, UX, or feature velocity enough to justify a custom application.",
  },
  {
    question: "How is Hydrogen different from a Liquid theme?",
    answer:
      "Liquid is theme-based and simpler to operate. Hydrogen is application-based and gives you more control over routing, data fetching, UX, and performance patterns. Liquid is usually cheaper and easier. Hydrogen pays off when the storefront has outgrown those guardrails and needs a more deliberate system.",
  },
  {
    question: "Do I need a dedicated developer to run Hydrogen?",
    answer:
      "Usually yes. Hydrogen creates a real application with routing, data fetching, deployment, and maintenance responsibilities. That does not mean a large team is required. It does mean someone needs to own the storefront as software, not just as theme configuration.",
  },
  {
    question: "When is Hydrogen overkill?",
    answer:
      "Hydrogen is overkill when the store still fits comfortably inside a strong theme and the business is not pushing for custom UX, faster iteration, or a more ambitious storefront surface. If Liquid can still carry the roadmap cleanly, that is usually the smarter choice.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "What Is Hydrogen", href: "/what-is-hydrogen" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default function WhatIsHydrogenPage() {
  const heroVisual = STATIC_PAGE_VISUALS["what-is-hydrogen"];

  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Plain-English Guide"
          title="What Is Shopify Hydrogen?"
          description="A merchant-friendly explanation of what Hydrogen changes, where it helps, and where Liquid is still the smarter move."
          body="Shopify Hydrogen is a custom storefront framework for brands that need more speed, more control, and a better customer-facing buying experience than a standard Shopify theme usually delivers."
        />

        <TechnicalFigure
          src={heroVisual.src}
          alt={heroVisual.alt}
          title={heroVisual.title}
          width={heroVisual.width}
          height={heroVisual.height}
          priority
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="eyebrow">Simple analogy</p>
            <h2 className="subsection-title">
              Think of it as a custom front door for your store
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="relative h-7 w-28">
                <Image
                  src="/brand/shopify/logo-mono-black.svg"
                  alt="Shopify wordmark logo"
                  title="Shopify wordmark logo"
                  width={300}
                  height={86}
                  loading="lazy"
                  sizes="112px"
                  className="h-full w-full object-contain object-left"
                />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">+</span>
              <div className="relative h-7 w-7">
                <Image
                  src="/brand/hydrogen/hydrogen-favicon-official.svg"
                  alt="Official Hydrogen icon"
                  title="Official Hydrogen icon"
                  width={76}
                  height={81}
                  loading="lazy"
                  sizes="28px"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700">
                Hydrogen
              </span>
            </div>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Your Shopify admin, checkout, products, and operations stay in Shopify. Hydrogen changes the storefront experience shoppers interact with. That matters when you want a faster homepage, better product discovery, cleaner mobile behavior, or a more premium brand feel.
            </p>
          </div>

          <div className="hero-card">
            <div className="relative space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8df1cb]">
                What owners actually care about
              </p>
              <p className="text-2xl font-semibold leading-9 text-white">
                Not new tech. Better conversion, cleaner UX, and less friction when your team wants to improve the storefront.
              </p>
              <div className="glass-panel p-5">
                <p className="text-sm leading-7 text-neutral-300">
                  Hydrogen becomes relevant when the current theme is holding back growth ideas, performance goals, or the brand experience you want shoppers to feel.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass-panel p-4">
                  <p className="dna-kicker text-[#8df1cb]">Keep Shopify</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Products, checkout, and operations stay where your team already works.
                  </p>
                </div>
                <div className="glass-panel p-4">
                  <p className="dna-kicker text-[#8df1cb]">Upgrade UX</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    The customer-facing experience gets rebuilt with more control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="section-divider" />
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Hydrogen vs. Liquid</p>
            <h2 className="section-heading">
              Liquid is easier to launch. Hydrogen gives you more room to grow.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card">
              <p className="text-base leading-8 text-neutral-600">
                A Liquid theme is often the right choice for a simpler store with standard needs. It is cheaper and faster to get live. But once your catalog, merchandising, UX expectations, or brand ambition gets more complex, a theme can start to feel like a ceiling.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                Hydrogen gives you custom control over the storefront experience. That usually translates into stronger mobile feel, cleaner search and filtering, better product storytelling, and fewer compromises when you want to test better buying journeys.
              </p>
            </div>

            <div className="card-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
                When owners notice the difference
              </p>
              <ul className="editorial-list mt-5">
                {differences.map((difference) => (
                  <li key={difference}>
                    <span>{difference}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FaqSection
          title="Straight answers about where Hydrogen actually fits."
          faqs={faqs}
        />

        <CTASection
          subtext="If you want a straight answer on whether Hydrogen fits your store, send me your current theme, revenue band, and what feels slow or limiting today."
          sourceKind="what_is_hydrogen_cta"
        />
      </div>
    </>
  );
}
