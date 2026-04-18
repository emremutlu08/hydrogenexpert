import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { TrustBar } from "@/components/TrustBar";
import { buildMetadata } from "@/lib/seo";
import { CLIENTS, OWNER, absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Developer for Growing Brands | Emre Mutlu",
  description:
    "Shopify Hydrogen storefronts for growing brands that need faster pages, stronger conversion, and a proven partner with delivery experience today.",
  path: "/",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: OWNER.name,
  jobTitle: OWNER.title,
  description: OWNER.headline,
  sameAs: [OWNER.linkedIn, OWNER.upwork],
  knowsAbout: ["Shopify Hydrogen", "Shopify storefront performance", "Shopify migrations"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HydrogenExpert",
  url: absoluteUrl("/"),
  description:
    "Lead generation site for Shopify store owners researching Hydrogen strategy, migration fit, pricing, and case studies.",
  publisher: {
    "@type": "Person",
    name: OWNER.name,
  },
};

const steps = [
  {
    title: "Audit your current storefront",
    description:
      "We look at speed bottlenecks, revenue leaks, and what your customers struggle with before we touch design or code.",
  },
  {
    title: "Map the business case for Hydrogen",
    description:
      "You get a simple plan that shows where Hydrogen improves speed, UX, and merchandising without wasting budget on the wrong features.",
  },
  {
    title: "Launch with confidence",
    description:
      "The new storefront ships with QA, analytics, and a practical handoff so your team knows what changed and why it matters.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[websiteSchema, personSchema]} />
      <div className="page-shell">
        <section className="grid gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="eyebrow">Shopify Hydrogen Growth Partner</p>
            <div className="space-y-6">
              <h1 className="font-display text-5xl leading-none text-slate-900 md:text-7xl">
                Your Shopify Store is Slow. Hydrogen Fixes That.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-600">
                I build Shopify Hydrogen storefronts for growing brands. Faster
                sites, higher conversions, and a migration plan that makes sense
                to store owners instead of developers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                Top Rated Plus on Upwork
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                100% Job Success Score
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                First English Hydrogen course creator
              </span>
            </div>
          </div>

          <div className="card relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.35),_transparent_40%)]" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Why merchants call me
              </p>
              <div className="grid gap-5">
                <div>
                  <p className="text-4xl font-black text-white">400K</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    EveShop users supported by storefront work focused on speed
                    and shopping flow performance.
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">3</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Production Hydrogen storefronts delivered for brands with
                    real merchandising and growth goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Trust Signals</p>
            <h2 className="section-heading">
              Credibility that matters when your storefront revenue is on the line
            </h2>
            <p className="body-copy">
              Store owners do not need another agency deck. They need proof that
              the person leading a Hydrogen migration understands launch risk,
              mobile conversion, and how to keep the business moving.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                Upwork
              </p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">
                Top Rated Plus
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Consistent delivery and communication for store owners who care
                about outcomes, not jargon.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                Reputation
              </p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">
                100% Job Success Score
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Clean client feedback history backed by repeat trust and strong
                execution.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                Teaching
              </p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">
                Udemy Instructor
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Creator of the first English Shopify Hydrogen course, which says
                a lot about depth and clarity.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                Clients
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CLIENTS.map((client) => (
                  <span
                    key={client}
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                  >
                    {client}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Brands with different catalogs, customer journeys, and launch
                priorities.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Simple Process</p>
            <h2 className="section-heading">
              A 3-step plan that keeps the business case front and center
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="card">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTASection
          primaryLink="upwork"
          subtext="If your brand has outgrown a theme-based storefront, I can help you decide whether Hydrogen is the right next move and what it should cost."
        />
      </div>
    </>
  );
}
