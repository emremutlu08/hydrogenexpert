import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FounderCard } from "@/components/FounderCard";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { ProofCardGrid } from "@/components/ProofCardGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCardGrid } from "@/components/StatCardGrid";
import { FOUNDER_STORY } from "@/lib/founder";
import { buildMetadata } from "@/lib/seo";
import {
  FOUNDER_IMAGE_PATH,
  OWNER,
  SITE_NAME,
  UPWORK_PROFILE,
  VERIFIED_PROFILE_URLS,
  absoluteUrl,
} from "@/lib/site";
import {
  asSchemaArray,
  buildPersonSchema,
  buildProfilePageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "About Emre Mutlu | Shopify Hydrogen Developer",
  description:
    "Learn about Emre Mutlu, the Shopify Hydrogen developer behind HydrogenExpert, with public proof from Upwork, Udemy, and production case studies.",
  path: "/about",
});

const personSchema = buildPersonSchema({
  name: OWNER.name,
  title: OWNER.title,
  url: OWNER.linkedIn,
  image: absoluteUrl(FOUNDER_IMAGE_PATH),
  sameAs: VERIFIED_PROFILE_URLS,
  id: absoluteUrl("/about#emre-mutlu"),
});

const profilePageSchema = buildProfilePageSchema({
  url: absoluteUrl("/about"),
  name: `About ${OWNER.name}`,
  description:
    "Profile page for Emre Mutlu, independent Shopify Hydrogen developer and founder of HydrogenExpert.",
  person: personSchema,
});

const proofStats = [
  { id: "upwork-hours", value: UPWORK_PROFILE.totalHoursLabel, label: "hours delivered on Upwork", href: OWNER.upwork, external: true },
  { id: "jss", value: UPWORK_PROFILE.jobSuccessScore, label: "Job Success Score on Upwork", href: OWNER.upwork, external: true },
  { id: "clients", value: "3", label: "production Shopify Hydrogen storefront contexts" },
  { id: "course", value: "First", label: "English Shopify Hydrogen course on Udemy", href: OWNER.udemyUrl, external: true },
] as const;

const proofCards = [
  {
    id: "upwork",
    eyebrow: "Public profile",
    title: (
      <Link href={OWNER.upwork} target="_blank" rel="noreferrer" className="transition hover:text-[#10b981]">
        Top Rated Plus on Upwork
      </Link>
    ),
    body: "The Upwork profile carries the public delivery signal: Top Rated Plus, 100% Job Success Score, and 1,900+ hours.",
  },
  {
    id: "rebel-bunny",
    eyebrow: "Client feedback",
    title: (
      <Link href="/case-studies/rebel-bunny-shopify-hydrogen" className="transition hover:text-[#10b981]">
        Rebel Bunny 5.0 feedback
      </Link>
    ),
    body: "The Rebel Bunny case study is the only case currently carrying public Upwork feedback on the site.",
  },
  {
    id: "teaching",
    eyebrow: "Teaching",
    title: (
      <Link href={OWNER.udemyUrl} target="_blank" rel="noreferrer" className="transition hover:text-[#10b981]">
        Shopify Hydrogen course
      </Link>
    ),
    body: "The Udemy course is a public teaching signal alongside client delivery work.",
  },
] as const;

const standards = [
  "No fake testimonials, reviewer names, or client quotes.",
  "No unsupported revenue, conversion, or performance claims.",
  "No invented screenshots, logos, or approval signals.",
  "When proof is partial, the page says only what is publicly supportable.",
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(profilePageSchema)} />
      <div className="page-shell">
        <PageIntroSection
          eyebrow={SITE_NAME}
          title="About Emre Mutlu"
          description="Independent Shopify Hydrogen developer with public delivery, teaching, and case-study proof."
          body="HydrogenExpert is the focused surface for my Shopify Hydrogen advisory and implementation work. The site exists to help merchants decide whether Hydrogen is commercially justified, then scope and ship the work without agency layers."
        />

        <FounderCard size="lg" showBio showCredentials>
          {FOUNDER_STORY.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </FounderCard>

        <StatCardGrid
          items={proofStats}
          columnsClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Verified proof"
            title="The public signals I am comfortable putting on the page."
            description="These are intentionally conservative. If a metric, quote, logo, or screenshot is not approved or publicly supportable, it stays off the site."
          />
          <ProofCardGrid items={proofCards} columnsClassName="grid gap-5 md:grid-cols-3" />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.45rem] border border-black/8 bg-[#171717] p-6 text-white">
            <p className="dna-kicker text-[#8df1cb]">Proof standard</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-4xl">
              Conservative claims are a feature.
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              The positioning is stronger when every proof point can survive a careful buyer reading it. That is why the site avoids inflated agency language and unsupported certainty.
            </p>
          </div>
          <ul className="editorial-list rounded-[1.45rem] border border-black/8 bg-white p-6">
            {standards.map((standard) => (
              <li key={standard}>
                <span>{standard}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Case-study surface"
            title="Three storefront contexts, three different commercial pressures."
            description="The case studies show Hydrogen as a business decision, not a framework label."
          />
          <div className="authority-links">
            <Link href="/case-studies/eveshop-shopify-hydrogen" className="authority-link-card">
              <p className="authority-link-card__label">Retail scale</p>
              <h3 className="authority-link-card__title">EveShop</h3>
              <p className="authority-link-card__body">National cosmetics retail and production Hydrogen delivery experience.</p>
            </Link>
            <Link href="/case-studies/bayam-jewelry-shopify-hydrogen" className="authority-link-card">
              <p className="authority-link-card__label">Luxury catalog</p>
              <h3 className="authority-link-card__title">Bayam Jewelry</h3>
              <p className="authority-link-card__body">Premium discovery and multi-category luxury storefront pressure.</p>
            </Link>
            <Link href="/case-studies/rebel-bunny-shopify-hydrogen" className="authority-link-card">
              <p className="authority-link-card__label">DTC brand</p>
              <h3 className="authority-link-card__title">Rebel Bunny</h3>
              <p className="authority-link-card__body">Commerce, education, partner acquisition, and public Upwork feedback.</p>
            </Link>
          </div>
        </section>

        <CTASection
          primaryLink="upwork"
          headline="Want the direct version for your storefront?"
          subtext="Send the current store URL and what feels slow, limiting, or expensive to change. I will tell you whether the next move is Liquid, Hydrogen, or no rebuild."
          sourceKind="about_page"
        />
      </div>
    </>
  );
}
