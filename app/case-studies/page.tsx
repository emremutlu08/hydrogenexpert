import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Case Studies: Real Stores, Real Results",
  description:
    "See how Rebel Bunny, Bayam Jewelry, and EveShop used Shopify Hydrogen to solve real performance, UX, and growth challenges for scaling brands.",
  path: "/case-studies",
});

const caseStudies = [
  {
    name: "Rebel Bunny",
    type: "Fashion brand",
    problem:
      "The brand needed a storefront that felt sharper and more premium without sacrificing speed.",
    solution:
      "Hydrogen gave the store a custom experience with smoother browsing and stronger control over how the brand showed up online.",
    outcome:
      "The result was a storefront that felt more aligned with the brand and easier for shoppers to move through on mobile.",
  },
  {
    name: "Bayam Jewelry",
    type: "Jewelry and gifting",
    problem:
      "The catalog and visual storytelling needed more flexibility than a standard theme could comfortably deliver.",
    solution:
      "A Hydrogen storefront made it easier to present product detail, guide discovery, and support a more intentional buying journey.",
    outcome:
      "The final experience gave the brand a cleaner premium feel and a better path from inspiration to purchase.",
  },
  {
    name: "EveShop",
    type: "Large-scale commerce experience",
    problem:
      "A bigger user base and more demanding UX expectations required a storefront approach built around performance.",
    solution:
      "Hydrogen supported a faster and more responsive shopping experience shaped for real traffic and real customer behavior.",
    outcome:
      "With roughly 400K users in the picture, performance and clarity mattered, and the storefront work focused on making the experience feel friction-free.",
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <div className="page-shell">
      <section className="max-w-4xl space-y-6">
        <p className="eyebrow">Proof</p>
        <h1 className="font-display text-5xl leading-tight text-slate-900 md:text-6xl">
          Real stores, real constraints, real outcomes
        </h1>
        <p className="text-xl leading-9 text-slate-600">
          These projects were not built to chase a trend. Each one had a real
          business reason to improve storefront performance and customer
          experience.
        </p>
      </section>

      <section className="grid gap-6">
        {caseStudies.map((study) => (
          <article key={study.name} className="card grid gap-8 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="eyebrow">{study.type}</p>
              <h2 className="mt-4 font-display text-4xl text-slate-900">
                {study.name}
              </h2>
            </div>
            <div className="grid gap-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Problem</h3>
                <p className="mt-2 text-base leading-8 text-slate-600">
                  {study.problem}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Solution</h3>
                <p className="mt-2 text-base leading-8 text-slate-600">
                  {study.solution}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Outcome</h3>
                <p className="mt-2 text-base leading-8 text-slate-600">
                  {study.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CTASection
        primaryLink="upwork"
        subtext="If your storefront has similar performance or UX pressure, I can help you scope the move with a merchant-friendly plan instead of a vague technical pitch."
      />
    </div>
  );
}
