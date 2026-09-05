import { HIRING_INTENT_OWNER_PATH } from "@/features/search-intent";
import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePackage } from "@/features/services/registry";

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

export function buildDeveloperResponsibilitiesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shopify Hydrogen developer responsibilities",
    itemListElement: developerStackRows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: row.area,
      description: row.ownership,
    })),
  };
}

export function DeveloperIntroSections({ service }: { service: ServicePackage }) {
  if (service.pagePath !== HIRING_INTENT_OWNER_PATH) {
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

    </>
  );
}

export function DeveloperProofSections({
  service,
  sourceLinks,
}: {
  service: ServicePackage;
  sourceLinks: readonly ServicePackage["sourceMap"][number][];
}) {
  if (service.pagePath !== HIRING_INTENT_OWNER_PATH) {
    return null;
  }

  return (
    <>
      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Production proof"
          title="Shopify Hydrogen work connected to real storefronts"
          description="See the storefront problem, my role, and the implementation for each project."
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
                Technical references for your team.
              </h2>
              <p className="body-copy mt-4">
                Explore the official documentation behind the storefront, account, and SEO
                responsibilities described here.
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
