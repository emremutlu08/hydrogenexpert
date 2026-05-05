import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  DELIVERY_PROOF,
  FOUNDER_IMAGE_PATH,
  OWNER,
  SITE_NAME,
  UPWORK_PROFILE,
  VERIFIED_PROFILE_URLS,
  absoluteUrl,
  getSchemaIds,
} from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildPersonSchema,
  buildProfilePageSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "About Emre Mutlu | Shopify Hydrogen Developer",
  description:
    "Learn about Emre Mutlu, the Shopify Hydrogen developer behind HydrogenExpert, with public proof from Upwork, Udemy, and production case studies.",
  path: "/about",
});

const schemaIds = getSchemaIds();

const personSchema = buildPersonSchema({
  name: OWNER.name,
  title: OWNER.title,
  url: OWNER.linkedIn,
  image: absoluteUrl(FOUNDER_IMAGE_PATH),
  sameAs: VERIFIED_PROFILE_URLS,
  id: schemaIds.person,
  worksForId: schemaIds.professionalService,
});

const profilePageSchema = buildProfilePageSchema({
  url: absoluteUrl("/about"),
  name: `About ${OWNER.name}`,
  description:
    "Profile page for Emre Mutlu, independent Shopify Hydrogen developer and founder of HydrogenExpert.",
  person: personSchema,
});
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

const proofStats = [
  { id: "upwork-hours", value: UPWORK_PROFILE.totalHoursLabel, label: "hours delivered on Upwork", href: OWNER.upwork, external: true },
  { id: "jss", value: UPWORK_PROFILE.jobSuccessScore, label: "Job Success Score on Upwork", href: OWNER.upwork, external: true },
  {
    id: "clients",
    value: DELIVERY_PROOF.productionHydrogenStorefronts,
    label: "production Shopify Hydrogen storefront contexts",
  },
  {
    id: "course",
    value: DELIVERY_PROOF.firstEnglishHydrogenCourse,
    label: "English Shopify Hydrogen course on Udemy",
    href: OWNER.udemyUrl,
    external: true,
  },
] as const;

const proofCards = [
  {
    id: "upwork",
    eyebrow: "Public profile",
    title: (
      <Link href={OWNER.upwork} target="_blank" rel="noreferrer" className="transition hover:text-[#10b981]">
        {UPWORK_PROFILE.badge} on Upwork
      </Link>
    ),
    body: `The Upwork profile carries the public delivery signal: ${UPWORK_PROFILE.badge}, ${UPWORK_PROFILE.jobSuccessScore} Job Success Score, and ${UPWORK_PROFILE.totalHoursLabel} hours.`,
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

const verifiedProfiles = [
  {
    label: "LinkedIn",
    href: OWNER.linkedIn,
    note: "Primary professional profile and audience signal for Emre Mutlu.",
  },
  {
    label: "Upwork",
    href: OWNER.upwork,
    note: "Public marketplace profile for Top Rated Plus, Job Success Score, and delivery history.",
  },
  {
    label: "Udemy",
    href: OWNER.udemyUrl,
    note: "Public teaching profile tied to the Shopify Hydrogen course.",
  },
  {
    label: "Instagram",
    href: OWNER.instagram,
    note: "Owned public social profile used only as an entity corroboration signal.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={asSchemaArray(profilePageSchema, breadcrumbSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow={SITE_NAME}
          title="About Emre Mutlu"
          description="Independent Shopify Hydrogen developer with public delivery, teaching, and case-study proof."
          body="HydrogenExpert is the focused surface for my Shopify Hydrogen advisory and implementation work. The site exists to help merchants decide whether Hydrogen is commercially justified, then scope and ship the work with direct senior ownership."
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

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Verified profiles"
            title="Canonical external profiles used for entity proof."
            description="These are the same real profiles used by the site schema. They support Emre Mutlu as the primary entity behind HydrogenExpert without inventing a larger company footprint."
          />
          <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#f7f7f7]">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Profile
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Why it is linked
                  </th>
                </tr>
              </thead>
              <tbody>
                {verifiedProfiles.map((profile) => (
                  <tr key={profile.href} className="border-t border-black/8 align-top">
                    <td className="min-w-[12rem] px-5 py-4 font-semibold text-[#171717]">
                      <Link
                        href={profile.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-[#10b981]"
                      >
                        {profile.label}
                      </Link>
                    </td>
                    <td className="min-w-[18rem] px-5 py-4 leading-7 text-neutral-700">
                      {profile.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            eyebrow="Editorial standard"
            title="How HydrogenExpert keeps technical claims useful."
            description="The site separates official Shopify facts from Emre's operator interpretation, updates technical articles when platform behavior changes, and corrects pages instead of stretching proof."
          />
          <ul className="editorial-list">
            <li>
              <span>Shopify platform behavior is checked against official Shopify developer documentation before material content updates.</span>
            </li>
            <li>
              <span>Commercial guidance is presented as operator judgment, not as guaranteed ranking, revenue, or conversion outcome.</span>
            </li>
            <li>
              <span>When a public proof point changes, the site should update the claim or remove it until it can be verified again.</span>
            </li>
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
          headline="Want the direct version for your storefront?"
          subtext="Send the current store URL and what feels slow, limiting, or expensive to change. I will tell you whether the next move is Liquid, Hydrogen, or no rebuild."
          sourceKind="about_page"
        />
      </div>
    </>
  );
}
