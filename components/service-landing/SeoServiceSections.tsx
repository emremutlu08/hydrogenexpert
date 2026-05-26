import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePackage } from "@/lib/services";

const HYDROGEN_SEO_AUDIT_CHECKPOINTS = [
  {
    title: "Rendered HTML",
    body:
      "Check whether the initial response contains useful product, collection, and content copy before client-side state finishes.",
  },
  {
    title: "Metadata and canonicals",
    body:
      "Review title, description, canonical URL, robots behavior, and duplicate route states for product, collection, variant, filter, and search URLs.",
  },
  {
    title: "Structured data",
    body:
      "Match Product, Breadcrumb, FAQ, Article, and Organization schema to the visible page state instead of a stale or preferred variant.",
  },
  {
    title: "Discovery files",
    body:
      "Check sitemap, robots.txt, RSS or feed output when relevant, llms.txt, and internal links so crawlers and AI answer engines can find the intended URLs.",
  },
  {
    title: "Route and migration risk",
    body:
      "Map old URLs, redirects, launch canonicals, collection paths, and noindex decisions before a Liquid-to-Hydrogen migration changes the public surface.",
  },
  {
    title: "Performance and hydration",
    body:
      "Inspect data loading, image and video weight, hydration boundaries, third-party scripts, and Core Web Vitals when SEO and UX share the same failure mode.",
  },
] as const;

export function HydrogenSeoAuditChecklistSection({ service }: { service: ServicePackage }) {
  if (service.slug !== "shopify-hydrogen-seo") {
    return null;
  }

  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Hydrogen SEO audit"
        title="A route-level checklist for live Hydrogen storefronts."
        description="The audit is not generic ecommerce SEO. It checks the actual custom storefront surface: rendered state, URLs, metadata, schema, discovery files, migration risk, and performance."
        className="max-w-5xl"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {HYDROGEN_SEO_AUDIT_CHECKPOINTS.map((checkpoint) => (
          <article key={checkpoint.title} className="rounded-[1.15rem] border border-black/8 bg-white p-5">
            <div className="h-1 w-10 rounded-full bg-[#10b981]" />
            <h3 className="mt-4 text-lg font-semibold leading-7 text-[#171717]">
              {checkpoint.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{checkpoint.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
