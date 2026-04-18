import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { CLIENTS, OWNER } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Hire a Shopify Hydrogen Developer for Growth | Emre Mutlu",
  description:
    "Hire Emre Mutlu for Shopify Hydrogen strategy and delivery: Top Rated Plus on Upwork, 100% JSS, Udemy instructor, and trusted by growth brands.",
  path: "/hire-me",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: OWNER.name,
  jobTitle: OWNER.title,
  description: OWNER.headline,
  sameAs: [OWNER.linkedIn, OWNER.upwork],
};

const process = [
  "Discovery call focused on business goals, not buzzwords",
  "Storefront audit with scope, timeline, and risk notes",
  "Build plan with milestone-based delivery",
  "Launch support and follow-through after go-live",
] as const;

export default function HireMePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <div className="page-shell">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            <p className="eyebrow">Why Emre</p>
            <h1 className="font-display text-5xl leading-tight text-slate-900 md:text-6xl">
              Hire a Shopify Hydrogen developer with real delivery history
            </h1>
            <p className="text-xl leading-9 text-slate-600">
              I help brands move from theme limitations to faster, more flexible
              Shopify Hydrogen storefronts. The work stays grounded in
              conversion, UX, and launch reality.
            </p>
          </div>

          <div className="card bg-slate-900 text-white">
            <p className="eyebrow text-blue-300">Credentials</p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-slate-200">
              <li>Top Rated Plus on Upwork</li>
              <li>100% Job Success Score</li>
              <li>Creator of the first English Shopify Hydrogen Udemy course</li>
              <li>Client work across Rebel Bunny, Bayam Jewelry, and EveShop</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="eyebrow">What clients value</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Store owners usually need three things from a Hydrogen partner:
              honest scoping, fast communication, and someone who can explain
              tradeoffs in business terms. That is exactly how I run projects.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              You do not need to decode technical language to make a smart
              decision. I keep the conversation focused on risk, payoff,
              timeline, and launch readiness.
            </p>
          </div>
          <div className="card">
            <p className="eyebrow">Recent client types</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {CLIENTS.map((client) => (
                <span
                  key={client}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            How working together usually goes
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {process.map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-base leading-8 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <CTASection
          primaryLink="upwork"
          subtext="If you already know your storefront needs a stronger customer experience, the fastest next step is a direct conversation on Upwork."
        />
      </div>
    </>
  );
}
