import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { FounderCard } from "@/components/FounderCard";
import { FreshnessNote } from "@/components/FreshnessNote";
import { HydrogenBuildPackages } from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { ProcessStepGrid } from "@/components/ProcessStepGrid";
import { SelectedWorkGrid } from "@/components/SelectedWorkGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBar } from "@/components/TrustBar";
import { TrackedCTALink, TrackedProofLink } from "@/components/TrackedInternalLink";
import { requireServicePackageByPagePath } from "@/features/services/registry";
import { buildMetadata } from "@/lib/seo";
import {
  FOUNDER_IMAGE_PATH,
  OWNER,
  SITE_LOGO_PATH,
  SITE_NAME,
  VERIFIED_PROFILE_URLS,
  absoluteUrl,
  getSchemaIds,
} from "@/lib/site";
import {
  asSchemaArray,
  buildFaqPageSchema,
  buildPublisherSchema,
} from "@/lib/structured-data";

const LAST_UPDATED = "2026-09-05";
const schemaIds = getSchemaIds();
const hiringService = requireServicePackageByPagePath("/shopify-hydrogen-experts");

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Development | Builds from $2K | HydrogenExpert",
  description:
    "Work directly with Emre Mutlu on custom Shopify Hydrogen builds, migrations, and storefront improvements. Fixed-scope packages start at $2K.",
  path: "/",
  ogImage: absoluteUrl("/og-home.svg"),
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": schemaIds.person,
  name: OWNER.name,
  jobTitle: OWNER.title,
  description: OWNER.headline,
  image: absoluteUrl(FOUNDER_IMAGE_PATH),
  sameAs: VERIFIED_PROFILE_URLS,
  worksFor: {
    "@type": "ProfessionalService",
    "@id": schemaIds.professionalService,
    name: SITE_NAME,
  },
  knowsAbout: ["Shopify Hydrogen", "Shopify storefront performance", "Shopify migration planning"],
};

const publisherSchema = buildPublisherSchema({
  name: SITE_NAME,
  url: absoluteUrl("/"),
  logo: absoluteUrl(SITE_LOGO_PATH),
  id: schemaIds.organization,
  sameAs: VERIFIED_PROFILE_URLS,
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": schemaIds.organization,
  name: SITE_NAME,
  url: absoluteUrl("/"),
  logo: absoluteUrl(SITE_LOGO_PATH),
  image: absoluteUrl(SITE_LOGO_PATH),
  founder: {
    "@type": "Person",
    "@id": schemaIds.person,
    name: OWNER.name,
  },
  sameAs: VERIFIED_PROFILE_URLS,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": schemaIds.website,
  name: SITE_NAME,
  url: absoluteUrl("/"),
  description:
    "Senior-led Shopify Hydrogen services site for brands researching Hydrogen strategy, migration fit, pricing, audits, packages, development paths, and case studies.",
  publisher: {
    "@type": "Organization",
    "@id": schemaIds.organization,
    name: SITE_NAME,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Senior-Led Shopify Hydrogen Services for Growing Brands",
  description:
    "Merchant-friendly guidance on Shopify Hydrogen strategy, speed, migration fit, package ranges, custom storefront development paths, and launch planning for growing brands.",
  author: {
    "@type": "Person",
    "@id": schemaIds.person,
    name: OWNER.name,
    sameAs: VERIFIED_PROFILE_URLS,
  },
  publisher: publisherSchema,
  image: absoluteUrl("/og-home.svg"),
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-response", ".page-intro", ".surface-card p"],
  },
  mainEntityOfPage: absoluteUrl("/"),
  dateModified: LAST_UPDATED,
  datePublished: "2026-05-25",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shopify Hydrogen evaluation checklist",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Audit storefront friction and system drag" },
    { "@type": "ListItem", position: 2, name: "Scope the commercial case for Hydrogen" },
    { "@type": "ListItem", position: 3, name: "Ship a production-grade storefront with launch control" },
  ],
};

const faqs = [
  {
    question: "What is Shopify Hydrogen in plain English?",
    answer:
      "Shopify Hydrogen is Shopify’s framework for building a custom storefront on top of Shopify’s commerce engine. It matters when a theme starts limiting speed, mobile UX, merchandising flexibility, or the premium buying experience a growing brand wants customers to feel.",
  },
  {
    question: "How much does a Shopify Hydrogen project usually cost?",
    answer:
      "Fixed-scope Hydrogen storefront packages can start around $2,000 and usually sit in the $2K-$5K range when the requirements are clear. Price changes with page templates, product logic, integrations, migration risk, SEO preservation, analytics, and launch support.",
    linkHref: "/shopify-hydrogen-packages",
    linkLabel: "View the Hydrogen build packages.",
  },
  {
    question: "When does Hydrogen make sense for a growing brand?",
    answer:
      "Hydrogen makes sense when the current storefront is holding back growth ideas, mobile UX, or brand expression, and when the business is ready to maintain a custom surface after launch. If a stronger theme can still do the job, Liquid is often enough.",
    linkHref: "/when-not-to-use-hydrogen",
    linkLabel: "Read the cases where Hydrogen is the wrong move.",
  },
  {
    question: "How long does a Hydrogen migration usually take?",
    answer:
      "A lean Hydrogen project may take around 6 weeks, while more complex storefronts can take closer to 16 weeks. Timelines expand when integrations, content readiness, or wider launch planning add more moving parts.",
  },
  {
    question: "Where should I go for direct Hydrogen developer support?",
    answer:
      "Use the expert hiring page when the scope is clear and you need direct help with Hydrogen routes, Storefront API data, SEO-safe launch work, product flow, cart behavior, and launch QA. If the scope is unclear, start with a free scope review before buying a full audit.",
    linkHref: "/shopify-hydrogen-experts",
    linkLabel: "Review senior Hydrogen support.",
  },
  {
    question: "Does Hydrogen help when the storefront needs AI-readable pages?",
    answer:
      "It can. Hydrogen gives you control over rendered content, routes, schema, and data flow, which makes the storefront easier for search systems and AI answer engines to read. That still does not make Hydrogen the right answer for every store. The business case comes first.",
  },
  {
    question: "What's the ongoing maintenance difference between Hydrogen and Liquid?",
    answer:
      "Hydrogen gives you more control, but it also creates a real application to maintain. Liquid is usually cheaper to operate long-term. Hydrogen pays back when the store keeps needing custom UX and feature velocity that a theme no longer supports cleanly.",
  },
] as const;

const faqSchema = buildFaqPageSchema(faqs);

const processSteps = [
  {
    title: "Review scope first",
    body: "I look at desired pages, product flow, cart behavior, integrations, SEO risk, design status, and whether Liquid is still the better answer.",
  },
  {
    title: "Pick the package path",
    body: "You get a direct answer on Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild before the work becomes bigger than it needs to be.",
  },
  {
    title: "Ship lean, then expand",
    body: "The first launch stays focused on core ecommerce flow, clean performance, checkout handoff, and launch QA. More features can follow once the direction is proven.",
  },
] as const;

const commercialPathLinks = [
  {
    href: hiringService.pagePath,
    label: hiringService.name,
    note: hiringService.summary,
  },
  {
    href: "/custom-shopify-hydrogen-storefront",
    label: "Custom Shopify Hydrogen Storefront",
    note: "Fixed-scope custom storefront builds for teams that need core ecommerce flow before custom scope expands.",
  },
  {
    href: "/shopify-hydrogen-seo",
    label: "Shopify Hydrogen SEO",
    note: "Technical SEO help for rendered HTML, metadata, canonicals, schema, sitemap, and crawl consistency.",
  },
  {
    href: "/headless-shopify-agency",
    label: "Headless Shopify Agency Alternative",
    note: "A senior-led path when you are comparing headless agencies, Hydrogen specialists, and Liquid alternatives.",
  },
  {
    href: "/case-studies",
    label: "Case studies",
    note: "Explore EveShop, Bayam Jewelry, Rebel Bunny, Kirazev, and Clohi.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={asSchemaArray(
          websiteSchema,
          personSchema,
          organizationSchema,
          articleSchema,
          itemListSchema,
          faqSchema,
        )}
      />
      <div className="page-shell">
        <section className="space-y-8">
          <div className="mx-auto max-w-5xl space-y-7 text-center">
            <div className="space-y-3">
              <h1 className="hero-statement">
                Shopify Hydrogen development when your theme holds you back
              </h1>
              <p className="hero-response">
                Work directly with Emre to build, improve, or migrate your storefront.
              </p>
            </div>
            <p className="mx-auto max-w-3xl page-intro">
              Get help with custom shopping experiences, difficult integrations, and
              storefront changes your theme cannot support cleanly. Fixed-scope builds
              start at $2K, with $2K-$5K packages for clearly bounded requirements.
              Complex migrations need a separate scope.
            </p>
            <FreshnessNote date={LAST_UPDATED} />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <TrackedCTALink
                href="/contact#fit-review-form"
                eventName="scope_review_cta_click"
                sourceKind="homepage_hero"
                ctaLabel="Request Scope Review"
                className="rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
              >
                Request Scope Review
              </TrackedCTALink>
              <TrackedCTALink
                href="/shopify-hydrogen-packages"
                eventName="package_cta_click"
                sourceKind="homepage_hero"
                ctaLabel="View Build Packages"
                packageName="All Hydrogen packages"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                View Build Packages
              </TrackedCTALink>
            </div>
            <p className="mx-auto max-w-3xl text-sm leading-7 text-neutral-600">
              Built by Emre Mutlu - Shopify Hydrogen developer, Upwork Top Rated Plus,
              100% JSS, 1,900+ Upwork hours, and creator of the first English Shopify
              Hydrogen course on Udemy.{" "}
              <TrackedProofLink
                href="/case-studies"
                label="See production proof"
                sourceKind="homepage_hero_proof"
                className="font-semibold text-[#0f8a5d] underline decoration-[#10b981]/30 underline-offset-4 transition hover:text-[#10b981]"
              >
                See production proof.
              </TrackedProofLink>
            </p>
          </div>

          <TrustBar />
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader eyebrow="Selected work" title="Three Hydrogen storefronts, different business needs"
            description="Explore national retail, luxury catalog discovery, and a storefront connecting shopping with education and partner interest." />
          <SelectedWorkGrid hydrogenOnly />
          <Link href="/case-studies" className="font-semibold underline">View all five Shopify projects, including Liquid builds</Link>
        </section>

        <HydrogenBuildPackages compact />

        <section className="surface-card space-y-6">
          <SectionHeader eyebrow="Find your next step" title="What does your storefront need?"
            description="Compare a new build, help with an existing storefront, and SEO work before choosing a scope." />
          <div className="authority-links">
            {commercialPathLinks.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="process" className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Process"
            title="How working together usually goes"
            description="The point is not to push Hydrogen. It is to figure out whether your current stack is still enough, and if it is not, how to move without turning the project into a mess."
            className="max-w-5xl"
          />
          <ProcessStepGrid items={processSteps} />
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="About Emre"
            title="How I work with founders and ecommerce teams"
            description="The point is not to sell a headless rebuild by default. It is to help founders and ecommerce leads make the right commercial call, then ship the work with senior ownership."
          />
          <FounderCard size="lg" showBio>
            <p>I work directly with founders and ecommerce teams, from the first scope decision to implementation. If a Liquid improvement solves the problem, I will recommend it.</p>
            <Link href="/about" className="font-semibold underline">Read my background and teaching experience</Link>
          </FounderCard>
        </section>

        <FaqSection
          title="Frequently asked questions about Shopify Hydrogen."
          faqs={faqs}
        />

        <CTASection
          subtext="Send the store URL, design status, product count, and the feature pressure behind the request. I will tell you whether the next move is a fixed-scope Hydrogen build, cleanup, support, or no rebuild."
          sourceKind="homepage_cta"
        />
      </div>
    </>
  );
}
