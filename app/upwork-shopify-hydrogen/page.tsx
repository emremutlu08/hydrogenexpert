import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HydrogenBuildPackages } from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { ScopeReviewBriefTemplates } from "@/components/ScopeReviewBriefTemplates";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";
import { TrackedCTALink } from "@/components/TrackedInternalLink";
import { buildMetadata } from "@/lib/seo";
import { OWNER, UPWORK_PROFILE, absoluteUrl } from "@/lib/site";
import { buildBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Fixed-scope Shopify Hydrogen Builds for Upwork Clients",
  description:
    "Direct Upwork-ready page for fixed-scope Shopify Hydrogen storefront builds from $2K-$5K when requirements are clear.",
  path: "/upwork-shopify-hydrogen",
  robots: {
    index: false,
    follow: true,
  },
});

const notIncludedItems = [
  "Custom checkout inside package pricing",
  "Unlimited feature requests",
  "Large SEO migration without separate risk review",
  "Complex app replacement without clear integration notes",
  "A full agency discovery process before the basic fit is known",
] as const;

const preInviteItems = [
  "Store URL",
  "Design status or Figma link status",
  "Product count and collection complexity",
  "Needed page templates",
  "Cart, account, search, and filter requirements",
  "Apps that must remain",
  "SEO, route, analytics, or launch risks",
  "Target budget range",
] as const;
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Upwork Shopify Hydrogen", href: "/upwork-shopify-hydrogen" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default function UpworkShopifyHydrogenPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Upwork client page"
          title="Fixed-scope Shopify Hydrogen builds for Upwork clients"
          description="I build lean Shopify Hydrogen storefronts from $2K-$5K when the requirements are clear."
          body="The scope is based on page templates, product flow, cart behavior, integrations, migration risk, SEO needs, analytics, and launch QA - not traffic or pageviews."
        />

      <section className="hero-card space-y-6">
        <p className="dna-kicker text-[#8df1cb]">Start fast</p>
        <h2 className="font-display text-[2.35rem] leading-[1] text-white md:text-[3.1rem]">
          Send the brief, then choose Upwork or direct scope review.
        </h2>
        <p className="max-w-3xl text-base leading-8 text-neutral-300">
          Best fit: a Shopify merchant who knows the desired pages, catalog shape,
          must-have features, and launch pressure, but does not want a classic agency
          process before the first fixed-scope build.
        </p>
        <div className="flex flex-wrap gap-3">
          <TrackedCTAButton
            destination="upwork"
            label="Hire on Upwork"
            sourceKind="upwork_landing_hero"
            className="inline-flex min-h-11 items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
          />
          <TrackedCTALink
            href="/contact#fit-review-form"
            eventName="scope_review_cta_click"
            sourceKind="upwork_landing_hero"
            ctaLabel="Request Scope Review"
            className="inline-flex min-h-11 items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
          >
            Prefer direct email? Request Scope Review
          </TrackedCTALink>
        </div>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="What I build"
          title="Lean Hydrogen storefronts around the core ecommerce flow."
          description="The build path is useful when a Liquid theme is limiting the product experience, but the first launch still needs scope discipline."
          className="max-w-5xl"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "Home or landing route, listing, PDP, add to cart, cart drawer, checkout handoff, account entry, SEO baseline, and launch-ready structure.",
            "Standard additions such as search, basic filters, content templates, review app integration, and analytics events when they are scoped clearly.",
            "Growth additions such as metaobjects, marketing landing sections, integrations, product recommendations, limited route migration, and launch QA.",
          ].map((item) => (
            <p
              key={item}
              className="rounded-[1.1rem] border border-black/8 bg-white p-5 text-sm leading-7 text-neutral-700"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <HydrogenBuildPackages
        title="Starter / Standard / Growth quick comparison."
        description="Use this comparison to decide whether the Upwork invitation is a fixed-scope build, custom scope, Liquid cleanup, or no rebuild."
        compact
      />

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Not included"
          title="What is not included in a fixed-scope Upwork build."
          description="Scope boundaries keep the price useful and protect the project from becoming a vague rebuild."
          className="max-w-5xl"
        />
        <ul className="editorial-list">
          {notIncludedItems.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Before inviting me"
          title="What to send before inviting me."
          description="A short, concrete brief is enough for a first pass."
          className="max-w-5xl"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {preInviteItems.map((item) => (
            <div
              key={item}
              className="rounded-[1rem] border border-black/8 bg-white px-4 py-3 text-sm font-semibold leading-6 text-neutral-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Proof"
          title="Upwork, Udemy, and case studies."
          description="The proof layer stays public and conservative: marketplace profile, teaching record, and approved Shopify work."
          className="max-w-5xl"
        />
        <div className="authority-links">
          <Link href={OWNER.upwork} target="_blank" rel="noreferrer" className="authority-link-card">
            <p className="authority-link-card__label">Upwork</p>
            <h3 className="authority-link-card__title">{UPWORK_PROFILE.badge}</h3>
            <p className="authority-link-card__body">
              Public freelance profile for reviews, work history, and marketplace hiring.
            </p>
          </Link>
          <Link href={OWNER.udemyUrl} target="_blank" rel="noreferrer" className="authority-link-card">
            <p className="authority-link-card__label">Udemy</p>
            <h3 className="authority-link-card__title">Shopify Hydrogen teaching proof</h3>
            <p className="authority-link-card__body">
              Public course proof that supports the Shopify Hydrogen specialization.
            </p>
          </Link>
          <Link href="/case-studies" className="authority-link-card">
            <p className="authority-link-card__label">Case studies</p>
            <h3 className="authority-link-card__title">Hydrogen and Liquid proof</h3>
            <p className="authority-link-card__body">
              EveShop, Bayam Jewelry, Rebel Bunny, Kirazev, and Clohi mapped to stack-fit judgment.
            </p>
          </Link>
        </div>
      </section>

      <ScopeReviewBriefTemplates />
      </div>
    </>
  );
}
