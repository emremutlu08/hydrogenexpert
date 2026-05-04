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
    body: "Vercel Analytics and Speed Insights may measure traffic and page performance. Google Analytics loads only when a valid real measurement ID is configured.",
  },
  {
    title: "Browser controls",
    body: "You can block or delete cookies and tracking storage through your browser settings. Blocking some services may affect analytics or form verification.",
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
