import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "What Is Shopify Hydrogen? Storefront Architecture",
  description:
    "Shopify Hydrogen is Shopify’s React Router toolkit for custom storefronts. See how Admin, Storefront API, Hydrogen, and Shopify Checkout connect.",
  path: "/what-is-hydrogen",
});

const architectureSteps = [
  {
    title: "Shopify Admin",
    label: "Catalog, content, and operations",
    description:
      "Merchants manage products, inventory, collections, content, and day-to-day commerce operations in Shopify.",
  },
  {
    title: "Storefront API",
    label: "Commerce data interface",
    description:
      "The Storefront API gives the custom storefront access to the Shopify commerce data it needs to render shopping journeys.",
  },
  {
    title: "Hydrogen storefront",
    label: "React, rendering, and UX",
    description:
      "Hydrogen provides the React Router storefront layer that handles routes, data loading, rendering, and the customer-facing experience.",
  },
  {
    title: "Shopify Checkout",
    label: "Transaction completion",
    description:
      "The Hydrogen cart sends the customer to Shopify Checkout to complete the transaction.",
  },
] as const;

const architectureFacts = [
  {
    title: "Hydrogen is the storefront layer",
    body:
      "Hydrogen is Shopify’s opinionated toolkit for custom storefronts built with React Router. It supplies commerce-focused components, utilities, and patterns for a storefront that uses Shopify data.",
  },
  {
    title: "Shopify remains the commerce system",
    body:
      "A Hydrogen build does not move the catalog or daily store operations out of Shopify. The custom frontend reads commerce data through Shopify APIs while the merchant continues to work in Shopify Admin.",
  },
  {
    title: "Checkout remains a Shopify surface",
    body:
      "Hydrogen owns the browsing and cart experience before checkout. When the customer is ready to buy, the storefront hands the transaction to Shopify Checkout.",
  },
] as const;

const faqs = [
  {
    question: "What is Shopify Hydrogen?",
    answer:
      "Shopify Hydrogen is Shopify’s React Router toolkit for building custom storefronts. It provides commerce-focused components, utilities, and conventions for rendering a customer-facing storefront with Shopify data.",
  },
  {
    question: "What role does the Storefront API play in Hydrogen?",
    answer:
      "The Storefront API is the data interface between Shopify and the Hydrogen storefront. The storefront queries it for the commerce data needed to render products, collections, navigation, cart states, and other shopping experiences.",
  },
  {
    question: "Does Hydrogen replace Shopify Admin?",
    answer:
      "No. Shopify Admin remains the operating system for catalog, content, inventory, and commerce operations. Hydrogen changes the customer-facing storefront layer, not where the merchant manages the store.",
  },
  {
    question: "Does Hydrogen replace Shopify Checkout?",
    answer:
      "No. Hydrogen can own the storefront and cart experience, then send the customer to Shopify Checkout to complete the transaction.",
  },
  {
    question: "Is Hydrogen the same as a Liquid theme?",
    answer:
      "No. Liquid is Shopify’s theme model, while Hydrogen is a custom React Router storefront application that uses Shopify APIs. This is an architectural distinction; the better fit depends on the store’s requirements.",
    linkHref: "/shopify-hydrogen-vs-liquid",
    linkLabel: "Read the full Hydrogen vs Liquid comparison",
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

const textLinkClass =
  "font-medium text-[#171717] underline decoration-black/20 underline-offset-4 transition hover:text-[#10b981]";

export default function WhatIsHydrogenPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Definition and architecture"
          title="What Is Shopify Hydrogen?"
          description="Shopify Hydrogen is Shopify’s toolkit for building a custom, customer-facing storefront with React Router while Shopify continues to power commerce operations and checkout."
          body="In plain English: Hydrogen changes the frontend shoppers see. Shopify Admin still holds the catalog and operational data, the Storefront API supplies commerce data to the storefront, and Shopify Checkout completes the transaction."
        />

        <section className="surface-card space-y-8">
          <SectionHeader
            eyebrow="Hydrogen data flow"
            title="How Shopify Hydrogen fits into the Shopify architecture"
            description="The storefront is one layer in a four-part commerce flow. Each layer has a distinct responsibility."
            className="max-w-4xl"
          />

          <p className="card-soft text-base font-semibold leading-8 text-[#171717]">
            <span className="text-[#10b981]">Data flow:</span>{" "}
            Shopify Admin (catalog/content/operations) → Storefront API → Hydrogen storefront
            (React/rendering/UX) → Shopify Checkout (transaction completion).
          </p>

          <ol className="grid gap-4 lg:grid-cols-4">
            {architectureSteps.map((step, index) => (
              <li key={step.title} className="card relative">
                <p className="dna-kicker text-[#10b981]">Step {index + 1}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#171717]">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-neutral-500">{step.label}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{step.description}</p>
                {index < architectureSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-5 block text-xl font-semibold text-[#10b981] lg:absolute lg:-right-3 lg:top-1/2 lg:z-10 lg:mt-0 lg:-translate-y-1/2"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="Architecture facts"
            title="What Hydrogen changes—and what stays in Shopify"
            description="These boundaries show exactly where Hydrogen fits while Shopify continues to run the core commerce system."
            className="max-w-4xl"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {architectureFacts.map((fact) => (
              <article key={fact.title} className="card">
                <h2 className="text-xl font-semibold tracking-[-0.025em] text-[#171717]">
                  {fact.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{fact.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-8">
          <SectionHeader
            eyebrow="Hydrogen vs Liquid"
            title="Two storefront models, one Shopify commerce system"
            description="The architectural difference is simple; the commercial decision deserves its own analysis."
            className="max-w-4xl"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="card">
              <p className="dna-kicker text-[#10b981]">Liquid</p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#171717]">
                Shopify’s theme model
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Liquid storefronts render through Shopify’s theme system, including templates,
                sections, blocks, and theme-editor workflows.
              </p>
            </article>
            <article className="card">
              <p className="dna-kicker text-[#10b981]">Hydrogen</p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#171717]">
                Shopify’s custom storefront toolkit
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Hydrogen storefronts are React Router applications that render a custom frontend
                and retrieve Shopify commerce data through APIs.
              </p>
            </article>
          </div>

          <div className="card-soft space-y-3 text-sm leading-7 text-neutral-600">
            <p>
              For the deeper architectural and operating tradeoffs, read the{" "}
              <Link href="/shopify-hydrogen-vs-liquid" className={textLinkClass}>
                Shopify Hydrogen vs Liquid comparison
              </Link>
              .
            </p>
            <p>
              If your question is whether Hydrogen fits a particular store, use the{" "}
              <Link href="/should-i-use-it" className={textLinkClass}>
                Shopify Hydrogen adoption guide
              </Link>
              . That page owns fit and adoption advice.
            </p>
          </div>
        </section>

        <FaqSection
          title="Shopify Hydrogen definition and architecture FAQs"
          faqs={faqs}
        />

        <section className="card-soft space-y-5">
          <p className="eyebrow">Continue from the definition</p>
          <h2 className="subsection-title">Use the route that matches your next question.</h2>
          <p className="max-w-3xl text-base leading-8 text-neutral-600">
            For implementation details, see the{" "}
            <Link href="/shopify-hydrogen-developer" className={textLinkClass}>
              Shopify Hydrogen developer route
            </Link>
            . To review relevant delivery context, browse the{" "}
            <Link href="/case-studies" className={textLinkClass}>
              case studies
            </Link>
            . If the architecture is already understood and you need help with a concrete build,
            you can{" "}
            <Link href="/contact" className={textLinkClass}>
              contact Emre
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
