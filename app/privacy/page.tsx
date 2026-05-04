import Link from "next/link";

import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Notice | HydrogenExpert",
  description:
    "How HydrogenExpert handles project inquiry data, analytics, security checks, and third-party services.",
  path: "/privacy",
  robots: {
    index: false,
    follow: true,
  },
});

const sections = [
  {
    title: "What the lead form collects",
    body: "When you submit a project note, the form collects the name, email, store URL or brand, message, source path, and source kind needed to understand the inquiry and reply to it.",
  },
  {
    title: "How inquiry data is used",
    body: "Inquiry data is used only to respond to the specific project request, understand where the request came from on the site, and protect the form from abuse. It is not used for newsletters or list sharing.",
  },
  {
    title: "Security and spam prevention",
    body: "The form uses origin checks, rate limiting, a honeypot field, IP-based security checks, and Cloudflare Turnstile when configured. These signals help reduce spam and automated submissions.",
  },
  {
    title: "Storage and processors",
    body: "Lead submissions are stored in Supabase when the backend is configured. The site runs on Vercel and may use Vercel Analytics and Speed Insights. Google Analytics loads only when a real measurement ID is configured.",
  },
  {
    title: "Analytics",
    body: "Analytics may measure page views, performance, CTA clicks, lead form status, blog views, and blog reading depth. The site code prevents placeholder Google Analytics IDs from loading.",
  },
  {
    title: "Your choices",
    body: "You can avoid the form and contact through LinkedIn or Upwork instead. You can also manage browser-level cookie and tracking settings from your browser.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <PageIntroSection
        eyebrow="Privacy"
        title="Privacy notice"
        description="A practical explanation of how this site handles project inquiry data, analytics, and security services."
        body="This notice is written for a small professional services site. It is not a formal legal opinion, but it explains the data handling choices built into HydrogenExpert."
      />

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Data handling"
          title="The site collects only what is needed for a project inquiry."
          description="The purpose is direct reply and form protection, not newsletter growth or list sharing."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#171717]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-soft space-y-4">
        <p className="eyebrow">Contact choice</p>
        <h2 className="subsection-title">Prefer not to use the form?</h2>
        <p className="max-w-3xl text-base leading-8 text-neutral-600">
          You can contact Emre through{" "}
          <Link href="https://www.linkedin.com/in/emremutlujs/" target="_blank" rel="noreferrer" className="font-semibold text-[#10b981]">
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link href="https://www.upwork.com/freelancers/emremutlu" target="_blank" rel="noreferrer" className="font-semibold text-[#10b981]">
            Upwork
          </Link>{" "}
          instead.
        </p>
      </section>
    </div>
  );
}
