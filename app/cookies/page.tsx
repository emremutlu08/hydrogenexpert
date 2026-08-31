import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Cookie Notice | HydrogenExpert",
  description:
    "How HydrogenExpert uses necessary security services, analytics, and browser-managed tracking controls.",
  path: "/cookies",
  robots: {
    index: false,
    follow: true,
  },
});

const cookieGroups = [
  {
    title: "Necessary security and form protection",
    body: "Cloudflare Turnstile may be used to verify that a lead form submission is not automated. Security checks and rate limiting may also use request metadata such as IP address.",
  },
  {
    title: "Analytics and performance",
    body: "Vercel Analytics and Speed Insights provide aggregate, cookie-free traffic and performance measurement. Google Analytics is optional and does not load until you select Allow analytics.",
  },
  {
    title: "Your analytics choice",
    body: "The site stores granted or denied under hydrogenexpert.analyticsConsent.v1 in local browser storage. Use Privacy settings to change the choice. Withdrawing consent stops new Google Analytics events and removes accessible first-party Google Analytics cookies.",
  },
] as const;
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Cookies", href: "/cookies" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Cookies"
          title="Cookie notice"
          description="HydrogenExpert uses a small set of services for security, form protection, analytics, and performance measurement."
          body="There is no advertising retargeting setup described here. The current intent is site measurement and inquiry protection."
        />
        <p className="text-sm font-medium text-neutral-500">Last updated: September 1, 2026</p>

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Cookie categories"
          title="What may run on this site."
          description="The exact browser storage behavior can vary by browser, user settings, and configured environment variables."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {cookieGroups.map((group) => (
            <article key={group.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#171717]">{group.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{group.body}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
