import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FreshnessNote } from "@/components/FreshnessNote";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SectionHeader } from "@/components/SectionHeader";
import { getRelatedLinksForPath } from "@/features/content-relations";
import { getOgImageForRoute } from "@/lib/og-images";
import { buildMetadata } from "@/lib/seo";
import { OWNER, SITE_LOGO_PATH, SITE_NAME, VERIFIED_PROFILE_URLS, absoluteUrl, getSchemaIds } from "@/lib/site";
import { asSchemaArray, buildBreadcrumbListSchema, buildPublisherSchema } from "@/lib/structured-data";

const PAGE_PATH = "/news-on-shopify-hydrogen";
const OFFICIAL_HYDROGEN_UPDATES_URL = "https://hydrogen.shopify.dev/updates";

const latestRelease = {
  title: "April 2026 release",
  publishedAt: "2026-04-09",
  checkedAt: "2026-05-26",
  officialUrl: "https://hydrogen.shopify.dev/update/april-2026-release",
  summary:
    "The latest observed Hydrogen update contains breaking changes around the Storefront API proxy and consent tracking, plus Storefront API and Customer Account API version updates to 2026-04.",
  items: [
    {
      title: "Storefront API proxy is now mandatory",
      plainEnglish:
        "Hydrogen now expects the Storefront API proxy to be available by default. The old proxyStandardRoutes option has been removed, and a missing storefront instance now fails loudly instead of quietly skipping the proxy.",
      operatorCheck:
        "Check custom createRequestHandler and getLoadContext code. If the project uses createHydrogenContext, the storefront instance should already be present.",
      endUserBenefit:
        "Customers are less likely to hit silent data, cart, or API-route failures caused by a proxy path that was accidentally disabled or incomplete.",
    },
    {
      title: "Consent tracking moves further server-side",
      plainEnglish:
        "Hydrogen now sets a backend consent flag before Shopify's Customer Privacy API script finishes loading, so consent can use server-set cookies through the Storefront API proxy instead of the older JavaScript cookie path.",
      operatorCheck:
        "Review privacy, analytics, and consent wiring, especially if the storefront customizes ShopifyCustomerPrivacy or analytics provider behavior.",
      endUserBenefit:
        "Customers get more consistent privacy behavior across page loads, checkout handoff, and analytics consent states.",
    },
    {
      title: "APIs moved to the 2026-04 versions",
      plainEnglish:
        "The release also points Hydrogen projects at the 2026-04 Storefront API and Customer Account API versions. Shopify notes API-level changes such as JSON metafield write limits and a new cart error code.",
      operatorCheck:
        "Read the API changelogs before upgrading, then test cart, customer account, metafield, and checkout-adjacent flows in a branch.",
      endUserBenefit:
        "Customers benefit from fewer upgrade surprises, clearer cart errors, and a storefront that keeps pace with Shopify's supported API behavior.",
    },
  ],
} as const;

const recentReleases = [
  {
    title: "January 2026 release",
    publishedAt: "2026-02-09",
    officialUrl: "https://hydrogen.shopify.dev/update/january-2026-release",
    summary:
      "A quarterly Storefront API and Customer Account API version bump to 2026-01 with no Hydrogen-specific feature changes.",
    endUserBenefit:
      "Customers get a storefront that stays aligned with supported Shopify API versions without forcing a feature migration.",
  },
  {
    title: "October 2025 release",
    publishedAt: "2026-01-30",
    officialUrl: "https://hydrogen.shopify.dev/update/october-2025-release",
    summary:
      "New cart mutations simplify gift card and delivery-address handling, while Hydrogen updates API versions to 2025-10.",
    endUserBenefit:
      "Customers get smoother cart interactions with less fragile client-side state around gift cards and delivery addresses.",
  },
] as const;

const monitorRules = [
  {
    title: "Check the official Hydrogen updates page",
    body:
      "The monthly monitor reads Shopify's official Hydrogen updates page and treats the newest release date as the signal.",
    endUserBenefit:
      "Merchants do not need to manually watch release notes to know when a storefront dependency may affect buyers.",
  },
  {
    title: "Explain only material changes",
    body:
      "A release summary should separate breaking changes, API version bumps, cart behavior, consent, SEO, performance, and tooling updates.",
    endUserBenefit:
      "Stakeholders get a practical explanation of what could change in the shopping experience, not a raw developer changelog.",
  },
  {
    title: "End every item with the user benefit",
    body:
      "Each update item should end with a clear buyer or merchant benefit so the newsletter stays decision-friendly.",
    endUserBenefit:
      "The reader can quickly judge whether the update improves reliability, checkout flow, privacy, maintenance, or launch safety.",
  },
] as const;

export const metadata = buildMetadata({
  title: "News on Shopify Hydrogen | Monthly Update Notes",
  description:
    "Monthly Shopify Hydrogen update notes translated into plain English, with each change connected to the end-user benefit for merchants and customers.",
  path: PAGE_PATH,
  ogImage: absoluteUrl(getOgImageForRoute("/resources")),
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "News on Shopify Hydrogen", href: PAGE_PATH },
] as const;

export default function NewsOnShopifyHydrogenPage() {
  const schemaIds = getSchemaIds();
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({ name: item.label, url: absoluteUrl(item.href) })),
  );
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "News on Shopify Hydrogen",
    url: absoluteUrl(PAGE_PATH),
    description:
      "Monthly Shopify Hydrogen update notes translated into practical merchant language with end-user benefit summaries.",
    dateModified: latestRelease.checkedAt,
    author: {
      "@type": "Person",
      "@id": schemaIds.person,
      name: OWNER.name,
    },
    publisher: buildPublisherSchema({
      name: SITE_NAME,
      url: absoluteUrl("/"),
      logo: absoluteUrl(SITE_LOGO_PATH),
      id: schemaIds.organization,
      sameAs: VERIFIED_PROFILE_URLS,
    }),
    isBasedOn: OFFICIAL_HYDROGEN_UPDATES_URL,
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Shopify Hydrogen update items",
    url: absoluteUrl(PAGE_PATH),
    numberOfItems: latestRelease.items.length,
    itemListElement: latestRelease.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.endUserBenefit,
      url: latestRelease.officialUrl,
    })),
  };

  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, collectionSchema, itemListSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Monthly monitor"
          title="News on Shopify Hydrogen, translated into merchant impact."
          description="A standing update page for Hydrogen and Oxygen changes that matter to storefront owners, technical leads, and ecommerce teams."
          body="The goal is simple: watch Shopify's official Hydrogen updates, explain what changed in plain English, and end each item with the practical benefit for the person using or operating the storefront."
        />

        <section className="surface-card space-y-6">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <SectionHeader
              eyebrow="Latest observed update"
              title={latestRelease.title}
              description={latestRelease.summary}
            />
            <div className="card-soft space-y-4">
              <FreshnessNote date={latestRelease.checkedAt} label="Source checked" className="mx-0" />
              <p className="text-sm leading-7 text-neutral-600">
                Official release date:{" "}
                <time dateTime={latestRelease.publishedAt}>April 9, 2026</time>
              </p>
              <a
                href={latestRelease.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
              >
                Read official release
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            {latestRelease.items.map((item, index) => (
              <article key={item.title} className="card-soft">
                <div className="grid gap-6 lg:grid-cols-[0.2fr_0.8fr] lg:items-start">
                  <div>
                    <div className="feature-number">{index + 1}</div>
                    <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#10b981]">
                      Update item
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h2 className="subsection-title mt-0">{item.title}</h2>
                      <p className="mt-4 text-base leading-8 text-neutral-600">{item.plainEnglish}</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.15rem] border border-black/8 bg-white p-5">
                        <p className="authority-link-card__label">Operator check</p>
                        <p className="mt-3 text-sm leading-7 text-neutral-600">{item.operatorCheck}</p>
                      </div>
                      <div className="rounded-[1.15rem] border border-[#10b981]/25 bg-[#10b981]/5 p-5">
                        <p className="authority-link-card__label text-[#0f8a5d]">End-user benefit</p>
                        <p className="mt-3 text-sm leading-7 text-neutral-700">{item.endUserBenefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Recent release trail"
            title="Keep the old updates readable too."
            description="Not every update needs urgent action. The useful question is whether it changes buyer experience, merchant operations, or upgrade risk."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {recentReleases.map((release) => (
              <article key={release.title} className="card-soft flex h-full flex-col">
                <p className="eyebrow">Official update</p>
                <h2 className="subsection-title mt-3">{release.title}</h2>
                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  Published <time dateTime={release.publishedAt}>{release.publishedAt}</time>
                </p>
                <p className="mt-4 text-base leading-8 text-neutral-600">{release.summary}</p>
                <div className="mt-5 rounded-[1.15rem] border border-[#10b981]/25 bg-[#10b981]/5 p-5">
                  <p className="authority-link-card__label text-[#0f8a5d]">End-user benefit</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{release.endUserBenefit}</p>
                </div>
                <a
                  href={release.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-11 w-fit items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                >
                  Read official update
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="How the monthly check works"
            title="A small monitoring loop, not a noisy news feed."
            description="The monitor should produce a short briefing only when there is a new official update or a change worth reviewing."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {monitorRules.map((rule) => (
              <article key={rule.title} className="card-soft">
                <h2 className="card-title">{rule.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{rule.body}</p>
                <div className="mt-5 border-t border-black/8 pt-5">
                  <p className="authority-link-card__label text-[#0f8a5d]">End-user benefit</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{rule.endUserBenefit}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="card-soft flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Source of truth</p>
              <p className="mt-3 text-base leading-8 text-neutral-600">
                This page is an interpretation layer. Shopify&apos;s official Hydrogen updates page remains the source for release details.
              </p>
            </div>
            <a
              href={OFFICIAL_HYDROGEN_UPDATES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-fit items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            >
              Open official updates
            </a>
          </div>
        </section>

        <section className="card-soft grid gap-6 lg:grid-cols-[0.75fr_0.25fr] lg:items-center">
          <div>
            <p className="eyebrow">Upgrade support</p>
            <h2 className="subsection-title mt-3">Need to turn a Hydrogen update into a safe upgrade?</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Send the storefront URL, current Hydrogen version, and the release item that worries you. I will help separate mandatory upgrade work from nice-to-have cleanup.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/shopify-hydrogen-audit"
              className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            >
              Review upgrade risk
            </Link>
            <Link
              href="/shopify-hydrogen-support-retainer"
              className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
            >
              Support retainer
            </Link>
          </div>
        </section>

        <RelatedLinks links={getRelatedLinksForPath(PAGE_PATH)} />
      </div>
    </>
  );
}
