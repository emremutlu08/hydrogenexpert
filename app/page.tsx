import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { FounderCard } from "@/components/FounderCard";
import { FreshnessNote } from "@/components/FreshnessNote";
import { HydrogenBuildPackages, TwoKBuildBoundarySection } from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { LogoWall } from "@/components/LogoWall";
import { ProcessStepGrid } from "@/components/ProcessStepGrid";
import { ProofCardGrid } from "@/components/ProofCardGrid";
import { SelectedWorkGrid } from "@/components/SelectedWorkGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCardGrid } from "@/components/StatCardGrid";
import { TrustBar } from "@/components/TrustBar";
import { TrackedCTALink, TrackedProofLink } from "@/components/TrackedInternalLink";
import { UdemyCourseCard } from "@/components/UdemyCourseCard";
import { clientLogos } from "@/data/clientLogos";
import { FOUNDER_STORY } from "@/lib/founder";
import { buildMetadata } from "@/lib/seo";
import {
  DELIVERY_PROOF,
  FOUNDER_IMAGE_PATH,
  OWNER,
  SITE_LOGO_PATH,
  SITE_NAME,
  UPWORK_PROFILE,
  VERIFIED_PROFILE_URLS,
  absoluteUrl,
  getSchemaIds,
} from "@/lib/site";
import {
  asSchemaArray,
  buildFaqPageSchema,
  buildPublisherSchema,
} from "@/lib/structured-data";

const LAST_UPDATED = "2026-05-25";
const schemaIds = getSchemaIds();

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Storefronts from $2K-$5K | HydrogenExpert",
  description:
    "Fixed-scope Shopify Hydrogen storefront builds from $2K-$5K for growth-stage Shopify brands by Emre Mutlu.",
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
  datePublished: LAST_UPDATED,
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
      "Use the dedicated developer service page when the scope is clear and you need direct help with Hydrogen routes, Storefront API data, SEO-safe launch work, product flow, cart behavior, and launch QA. If the scope is unclear, start with a free scope review before buying a full audit.",
    linkHref: "/shopify-hydrogen-developer",
    linkLabel: "Review direct developer support.",
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

const proofCards = [
  {
    id: "upwork",
    eyebrow: "Upwork",
    title: (
      <TrackedProofLink
        href={OWNER.upwork}
        label={UPWORK_PROFILE.badge}
        sourceKind="homepage_proof"
        external
        className="transition hover:text-[#10b981]"
      >
        {UPWORK_PROFILE.badge}
      </TrackedProofLink>
    ),
    body:
      `A practical trust signal backed by ${UPWORK_PROFILE.totalHoursLabel} Upwork hours and public client feedback.`,
  },
  {
    id: "jss",
    eyebrow: "Reputation",
    title: (
      <TrackedProofLink
        href={OWNER.upwork}
        label={`${UPWORK_PROFILE.jobSuccessScore} Job Success Score`}
        sourceKind="homepage_proof"
        external
        className="transition hover:text-[#10b981]"
      >
        {UPWORK_PROFILE.jobSuccessScore} Job Success Score
      </TrackedProofLink>
    ),
    body:
      "Proof of follow-through for merchants making a more serious storefront investment.",
  },
  {
    id: "rebel-bunny-feedback",
    eyebrow: "Client feedback",
    title: (
      <Link
        href="/case-studies/rebel-bunny-shopify-hydrogen"
        className="transition hover:text-[#10b981]"
      >
        {DELIVERY_PROOF.rebelBunnyFeedback}
      </Link>
    ),
    body:
      "The ongoing custom Hydrogen storefront contract now has public Upwork feedback attached to the case study.",
  },
  {
    id: "teaching",
    eyebrow: "Teaching",
    title: (
      <TrackedProofLink
        href={OWNER.udemyUrl}
        label={DELIVERY_PROOF.udemyCourseClaim}
        sourceKind="homepage_proof"
        external
        className="transition hover:text-[#10b981]"
      >
        {DELIVERY_PROOF.udemyCourseClaim}
      </TrackedProofLink>
    ),
    body:
      "Creator of the world's first English Shopify Hydrogen course on Udemy (110+ ratings).",
  },
  {
    id: "turkey",
    eyebrow: "Shipped work",
    title: "Turkey's first production Hydrogen storefront",
    body:
      "Frontend Team Lead on Turkey's first production Shopify Hydrogen storefront.",
  },
] as const;

const homepageMetrics = [
  {
    id: "stores",
    value: DELIVERY_PROOF.productionHydrogenStorefronts,
    label: "production Shopify Plus Hydrogen storefronts shipped",
  },
  { id: "scale", value: DELIVERY_PROOF.eveShopUsers, label: "web users on EveShop at production scale" },
  {
    id: "hours",
    value: UPWORK_PROFILE.totalHoursLabel,
    label: "hours of Upwork production delivery",
    href: OWNER.upwork,
    external: true,
  },
  {
    id: "linkedin",
    value: DELIVERY_PROOF.linkedInFollowers,
    label: "LinkedIn followers",
    href: OWNER.linkedIn,
    external: true,
  },
  {
    id: "jss",
    value: UPWORK_PROFILE.jobSuccessScore,
    label: "Job Success Score on Upwork",
    href: OWNER.upwork,
    external: true,
  },
] as const;

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
    href: "/shopify-hydrogen-developer",
    label: "Shopify Hydrogen Developer",
    note: "Direct senior implementation for Hydrogen routes, product flow, cart behavior, SEO-safe launch work, and support.",
  },
  {
    href: "/custom-shopify-hydrogen-storefront",
    label: "Custom Shopify Hydrogen Storefront",
    note: "Fixed-scope custom storefront builds for teams that need core ecommerce flow before custom scope expands.",
  },
  {
    href: "/shopify-hydrogen-expert",
    label: "Shopify Hydrogen Expert",
    note: "One senior specialist for architecture, storefront risk, migration judgment, and implementation ownership.",
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
    note: "Approved proof across EveShop, Bayam Jewelry, Rebel Bunny, Kirazev, and Clohi.",
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
                Senior Shopify Hydrogen storefronts from $2K-$5K
              </h1>
              <p className="hero-response">
                Launch a lean custom Hydrogen storefront without agency overhead.
              </p>
            </div>
            <p className="mx-auto max-w-3xl page-intro">
              I build fixed-scope Shopify Hydrogen storefronts for growth-stage
              Shopify brands that have outgrown theme limits: core ecommerce pages,
              product flow, cart drawer, checkout handoff, and clean performance -
              priced by project requirements, not traffic or pageviews.
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

        <HydrogenBuildPackages />
        <TwoKBuildBoundarySection />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Commercial paths"
            title="Choose the Hydrogen path that matches the buying question."
            description="Developer, expert, SEO, agency-alternative, and proof pages are linked here so searchers and crawlers can move from the homepage into the right commercial route."
          />
          <div className="authority-links">
            {commercialPathLinks.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">HydrogenExpert</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <LogoWall
          logos={clientLogos}
          title="Selected Shopify work across Hydrogen and Liquid."
          subtitle="Hydrogen, luxury ecommerce, DTC storytelling, and fast Liquid builds shown as approved portfolio proof."
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Selected work"
            title={`${DELIVERY_PROOF.shopifyPortfolioProjects} Shopify projects, with Hydrogen proof at the center`}
            description={`Approved case-study context across Hydrogen and Liquid: EveShop at ${DELIVERY_PROOF.eveShopUsers} web users and ${DELIVERY_PROOF.eveShopMobileUsers} mobile users, plus smaller builds that show when a theme-native path is the better answer.`}
          />
          <SelectedWorkGrid />
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Proof"
            title="Public trust signals for a senior-led service model."
            description="Only public or approved proof belongs here. No fake office, no fake team, no unsupported partner badges."
          />
          <ProofCardGrid
            items={proofCards}
            columnsClassName="grid gap-5 md:grid-cols-2 xl:grid-cols-5 xl:items-stretch"
          />
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Proof metrics"
            title="Numbers used as context, not decoration."
            description="These signals help qualify the work without turning the page into a pile of claims."
          />
          <StatCardGrid
            items={homepageMetrics}
            columnsClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:auto-rows-fr"
          />
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
          <FounderCard size="lg" showBio showCredentials>
            {FOUNDER_STORY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FounderCard>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Teaching"
            title="Teaching Shopify Hydrogen in plain English"
            description="I created the world's first English Shopify Hydrogen course on Udemy because the English-language path did not exist when I started."
          />
          <UdemyCourseCard courseUrl={OWNER.udemyUrl} />
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
