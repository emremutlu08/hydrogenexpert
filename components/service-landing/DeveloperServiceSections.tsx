import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePackage } from "@/features/services/registry";
import { OWNER } from "@/lib/site";

const developerStackRows = [
  {
    area: "React Router and server rendering",
    ownership:
      "Route structure, loaders, actions, HTML output, error states, and progressive enhancement.",
    why:
      "Important product and collection content needs to be available before a crawler or shopper waits on client-side JavaScript.",
  },
  {
    area: "Storefront API and GraphQL",
    ownership:
      "Product, collection, cart, metaobject, market, and content queries shaped around the storefront experience.",
    why:
      "Hydrogen quality depends on asking Shopify for the right data without making pages harder to cache, debug, or maintain.",
  },
  {
    area: "Hydrogen and deployment workflow",
    ownership:
      "Hydrogen components, Shopify utilities, caching choices, preview environments, launch checks, and production handoff.",
    why:
      "The custom storefront becomes an application, so deployment and maintenance discipline matter after the first launch.",
  },
  {
    area: "SEO, analytics, and commerce behavior",
    ownership:
      "Metadata, canonicals, JSON-LD, sitemap coverage, robots output, analytics events, consent, cart, and checkout handoff.",
    why:
      "A storefront can look finished while organic visibility, tracking, or checkout flow is quietly broken.",
  },
] as const;

const developerHiringSignals = [
  "A Liquid theme can no longer support the required product experience, content model, or interaction pattern without fragile workarounds.",
  "The brand needs custom product, collection, cart, market, or account flows that depend on Storefront API and application-level state.",
  "A migration or rebuild has real SEO risk, including route changes, canonical decisions, structured data, SSR content, and sitemap coverage.",
  "The current Hydrogen storefront is live but slow, hard to maintain, under-tested, or inconsistent across product, cart, analytics, and SEO surfaces.",
] as const;

const developerComparisonRows = [
  {
    need: "Theme edits and Shopify Admin configuration",
    liquid: "Usually the better first fit.",
    hydrogen: "Usually unnecessary unless the storefront is already headless.",
  },
  {
    need: "Custom storefront architecture",
    liquid: "Constrained by theme structure and app/theme boundaries.",
    hydrogen: "Built for custom React storefront routes connected to Shopify data.",
  },
  {
    need: "SEO-safe migration from theme to custom storefront",
    liquid: "Can preserve the current theme path if the theme can still solve the problem.",
    hydrogen: "Needs route mapping, SSR content, metadata, canonicals, structured data, and launch QA.",
  },
  {
    need: "Complex data and integration behavior",
    liquid: "Useful for theme-native commerce and simpler app integrations.",
    hydrogen:
      "Better when Storefront API, GraphQL, custom account/cart flows, or external systems drive the experience.",
  },
] as const;

const developerSearchIntentRows = [
  {
    query: "shopify hydrogen developer github",
    intent: "Docs and repository research",
    answer:
      "Use the official Hydrogen documentation and Shopify's public repository to understand the framework. Hire a developer when that research needs to become production routes, data loading, QA, and launch work.",
    links: [
      {
        href: "https://github.com/Shopify/hydrogen",
        label: "Shopify Hydrogen GitHub",
        external: true,
      },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals",
        label: "Hydrogen fundamentals",
        external: true,
      },
    ],
  },
  {
    query: "shopify hydrogen developer training",
    intent: "Training and team readiness",
    answer:
      "Training helps an internal team learn the stack. Production ownership still needs judgment across Shopify data, SEO, analytics, deployment, and maintenance.",
    links: [
      { href: OWNER.udemyUrl, label: "View the Hydrogen course on Udemy", external: true },
      { href: "/articles/how-to-hire-shopify-hydrogen-developer", label: "Hiring guide" },
    ],
  },
  {
    query: "shopify hydrogen templates and components",
    intent: "Build acceleration",
    answer:
      "Templates and components can reduce setup time, but a real storefront still needs product data shape, route behavior, content modeling, cart logic, and SEO-safe launch checks.",
    links: [
      { href: "/custom-shopify-hydrogen-storefront", label: "Custom storefront build" },
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals",
        label: "Hydrogen stack",
        external: true,
      },
    ],
  },
  {
    query: "shopify hydrogen pricing",
    intent: "Budget qualification",
    answer:
      "Hydrogen cost depends on whether the work is an audit, focused cleanup, senior developer support, full custom build, or broader agency scope.",
    links: [
      { href: "/shopify-hydrogen-cost", label: "Hydrogen cost ranges" },
      {
        href: "/articles/shopify-hydrogen-development-cost-developer-agency-audit",
        label: "Cost decision guide",
      },
    ],
  },
  {
    query: "shopify oxygen",
    intent: "Deployment and hosting",
    answer:
      "Oxygen matters when the Hydrogen storefront needs preview environments, environment variables, caching, deployment checks, and production handoff discipline.",
    links: [
      {
        href: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/github",
        label: "Hydrogen GitHub deployments",
        external: true,
      },
      { href: "/shopify-hydrogen-audit", label: "Launch risk audit" },
    ],
  },
  {
    query: "shopify hydrogen developer jobs",
    intent: "Hiring path",
    answer:
      "For hiring, evaluate shipped Hydrogen storefronts, Storefront API depth, SEO discipline, Liquid tradeoff judgment, and whether the developer can explain when not to rebuild.",
    links: [
      { href: "/articles/experienced-shopify-hydrogen-developers", label: "Experience checklist" },
      { href: "/case-studies", label: "Production proof" },
    ],
  },
] as const;

const developerResponsibilities = [
  "React Router route architecture",
  "Storefront API and GraphQL data modeling",
  "Server-rendered product and collection content",
  "Cart, checkout handoff, analytics, and consent behavior",
  "SEO metadata, canonical URLs, JSON-LD, sitemap, and robots QA",
] as const;

export function buildDeveloperResponsibilitiesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shopify Hydrogen developer responsibilities",
    itemListElement: developerResponsibilities.map((responsibility, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: responsibility,
    })),
  };
}

export function buildDeveloperSearchIntentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shopify Hydrogen developer search intent map",
    itemListElement: developerSearchIntentRows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: row.query,
      description: row.answer,
    })),
  };
}

export function DeveloperIntroSections({ service }: { service: ServicePackage }) {
  if (service.slug !== "shopify-hydrogen-developer") {
    return null;
  }

  return (
    <>
      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Role definition"
          title="What is a Shopify Hydrogen developer?"
          description="A Shopify Hydrogen developer builds and maintains custom Shopify storefronts using Hydrogen, React Router, Shopify APIs, server-rendered commerce routes, SEO controls, and production deployment workflows."
          className="max-w-5xl"
        />
        <div className="max-w-4xl space-y-4 text-base leading-8 text-neutral-700">
          <p>
            A Shopify Hydrogen developer is different from a theme-only Shopify developer because
            the storefront is a custom React application connected to Shopify commerce data. The
            work covers product and collection routes, Storefront API queries, cart behavior,
            checkout handoff, metadata, structured data, analytics, performance, and launch QA.
          </p>
          <p>
            The role is most useful when a brand needs custom UX, complex storefront data, an
            SEO-safe migration from Liquid, or senior maintenance support for an existing Hydrogen
            codebase.
          </p>
        </div>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Core stack"
          title="What the Hydrogen developer stack needs to cover."
          description="The exact tooling can vary by project, but these workstreams usually decide whether a Hydrogen storefront is reliable enough to ship."
          className="max-w-5xl"
        />
        <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#f7f7f7]">
              <tr>
                <th className="min-w-[13rem] px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                  Technical area
                </th>
                <th className="min-w-[18rem] px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                  Developer owns
                </th>
                <th className="min-w-[18rem] px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                  Why it matters
                </th>
              </tr>
            </thead>
            <tbody>
              {developerStackRows.map((row) => (
                <tr key={row.area} className="border-t border-black/8 align-top">
                  <td className="px-5 py-4 font-semibold leading-7 text-neutral-800">
                    {row.area}
                  </td>
                  <td className="px-5 py-4 leading-7 text-neutral-700">{row.ownership}</td>
                  <td className="px-5 py-4 leading-7 text-neutral-700">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="hero-card space-y-5">
          <p className="dna-kicker text-[#8df1cb]">Hiring trigger</p>
          <h2 className="font-display text-[2.15rem] leading-[1] text-white md:text-[2.7rem]">
            When should you hire a Shopify Hydrogen developer?
          </h2>
          <p className="text-base leading-8 text-neutral-300">
            Hire one when the storefront problem is bigger than theme edits and needs
            application-level ownership across commerce data, SEO, performance, and launch
            stability.
          </p>
        </div>
        <ol className="grid gap-3">
          {developerHiringSignals.map((signal, index) => (
            <li
              key={signal}
              className="rounded-[1.1rem] border border-black/8 bg-white p-4 text-sm leading-7 text-neutral-700"
            >
              <span className="mr-3 font-bold text-[#0f8a5d]">{index + 1}.</span>
              {signal}
            </li>
          ))}
        </ol>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Liquid vs Hydrogen"
          title="Shopify theme developer vs Shopify Hydrogen developer."
          description="The safer hire depends on whether the store needs theme customization or a custom storefront application."
          className="max-w-5xl"
        />
        <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#f7f7f7]">
              <tr>
                <th className="min-w-[14rem] px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                  Need
                </th>
                <th className="min-w-[16rem] px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                  Shopify theme developer
                </th>
                <th className="min-w-[16rem] px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                  Shopify Hydrogen developer
                </th>
              </tr>
            </thead>
            <tbody>
              {developerComparisonRows.map((row) => (
                <tr key={row.need} className="border-t border-black/8 align-top">
                  <td className="px-5 py-4 font-semibold leading-7 text-neutral-800">
                    {row.need}
                  </td>
                  <td className="px-5 py-4 leading-7 text-neutral-700">{row.liquid}</td>
                  <td className="px-5 py-4 leading-7 text-neutral-700">{row.hydrogen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Search paths"
          title="What people usually mean by Shopify Hydrogen developer."
          description="The same search can mean docs research, training, templates, pricing, Oxygen deployment, or a hiring decision. These paths keep the next click specific."
          className="max-w-5xl"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {developerSearchIntentRows.map((row) => (
            <article key={row.query} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#0f8a5d]">
                {row.query}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#171717]">{row.intent}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{row.answer}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {row.links.map((link) =>
                  "external" in link && link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center rounded-full border border-black/10 px-3 py-2 text-xs font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex min-h-10 items-center rounded-full border border-black/10 px-3 py-2 text-xs font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function DeveloperHiringDecisionSection({ service }: { service: ServicePackage }) {
  if (service.slug !== "shopify-hydrogen-developer") {
    return null;
  }

  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Hiring decision"
        title="When to hire Shopify Hydrogen developers instead of a general Shopify developer"
        description="Hiring Shopify Hydrogen developers makes sense when the work is closer to application engineering than theme customization."
        className="max-w-5xl"
      />
      <div className="max-w-4xl space-y-4 text-base leading-8 text-neutral-700">
        <p>
          A general Shopify developer can usually handle Liquid sections, app setup, theme edits,
          and standard storefront changes. A Hydrogen developer is the better fit when the
          storefront needs React Router, Storefront API work, server-rendered product content,
          custom routing, SEO-safe migration planning, cart logic, analytics behavior, and launch
          QA in one system.
        </p>
        <p>
          For growth-stage or Shopify Plus brands, the real hiring question is not whether someone
          can write React. It is whether the developer can protect revenue, SEO, product data,
          checkout handoff, and merchant maintainability after launch.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          "Custom storefront architecture, not theme edits",
          "Storefront API, routing, SEO, and cart logic in one scope",
          "Launch safety for Shopify Plus and growth-stage brands",
        ].map((item) => (
          <article key={item} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
            <div className="h-1 w-10 rounded-full bg-[#10b981]" />
            <p className="mt-4 text-sm font-semibold leading-7 text-neutral-800">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DeveloperProofSections({
  service,
  sourceLinks,
}: {
  service: ServicePackage;
  sourceLinks: readonly ServicePackage["sourceMap"][number][];
}) {
  if (service.slug !== "shopify-hydrogen-developer") {
    return null;
  }

  return (
    <>
      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Production proof"
          title="Shopify Hydrogen work connected to real storefronts"
          description="A compact proof layer linked to the full case studies, without adding unsupported testimonials or invented metrics."
          className="max-w-5xl"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "EveShop",
              body:
                "Frontend team lead on Turkey's first production Shopify Hydrogen storefront for a nationwide cosmetics and personal care retailer, referenced on HydrogenExpert as production-scale work with 400K+ web users.",
              href: "/case-studies/eveshop-shopify-hydrogen",
              label: "Read the EveShop case study",
            },
            {
              title: "Bayam Jewelry",
              body:
                "Shopify Hydrogen storefront for a luxury jewelry and watch catalog where premium discovery, collection context, and responsive storefront presentation mattered.",
              href: "/case-studies/bayam-jewelry-shopify-hydrogen",
              label: "Read the Bayam Jewelry case study",
            },
            {
              title: "Rebel Bunny Matcha",
              body:
                "Custom Hydrogen storefront work across DTC, partner/wholesale, and education paths, with public 5.0 Upwork feedback shown on the case study.",
              href: "/case-studies/rebel-bunny-shopify-hydrogen",
              label: "Read the Rebel Bunny case study",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.body}</p>
              <Link
                href={item.href}
                className="mt-5 inline-flex min-h-11 items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                {item.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {sourceLinks.length > 0 ? (
        <section className="surface-card">
          <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="eyebrow">Sources</p>
              <h2 className="section-heading mt-3">
                Technical claims stay tied to current references.
              </h2>
              <p className="body-copy mt-4">
                The page separates official Shopify platform facts from operator judgment, so
                buyers and crawlers can see where Hydrogen, Storefront API, SEO, and customer
                account claims come from.
              </p>
            </div>
            <div className="grid gap-4">
              {sourceLinks.map((source) =>
                source.url ? (
                  <article key={source.url} className="agency-grid-card">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#10b981]"
                      >
                        {source.label}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{source.usedFor}</p>
                  </article>
                ) : null,
              )}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
