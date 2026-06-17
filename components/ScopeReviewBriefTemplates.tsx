"use client";

import { useState } from "react";

import { SectionHeader } from "@/components/SectionHeader";

const BRIEF_TEMPLATES = [
  {
    id: "starter",
    title: "Starter brief template",
    description: "Use this when the project is mostly the core ecommerce flow.",
    body: `Store URL:
Current Shopify setup:
Do you have Figma/design?:
Products count:
Needed pages:
- Home / landing
- Collection / listing
- PDP
- Cart drawer
- Account entry
Must-have features:
Apps that must stay:
Important URLs or SEO traffic:
Who owns updates after launch?:
Launch deadline:
Budget range:`,
  },
  {
    id: "standard",
    title: "Standard brief template",
    description: "Use this when the store needs search, filters, content, reviews, or analytics.",
    body: `Store URL:
Design status:
Product count:
Collections:
Search needed?:
Filters needed?:
Content pages needed:
Reviews app:
Analytics/GTM needed?:
Subscriptions, loyalty, or account needs?:
Important URLs or redirects:
Current pain:
Budget range:`,
  },
  {
    id: "growth",
    title: "Growth brief template",
    description: "Use this when catalog, integrations, content modeling, SEO, or support risk matter.",
    body: `Store URL:
Design status:
Catalog complexity:
Needed integrations:
ERP/POS/WMS/PIM or custom app dependencies:
Metaobjects/CMS needs:
Marketing landing needs:
SEO or route migration risk:
Analytics events:
Post-launch support needed?:
Budget range:`,
  },
  {
    id: "migration",
    title: "Migration risk template",
    description: "Use this when the current Liquid store already has URLs, traffic, apps, or analytics that must be protected.",
    body: `Store URL:
Current theme:
Why Liquid may no longer be enough:
Important product/collection URLs:
Known organic traffic pages:
Redirect or canonical concerns:
Apps that affect PDP/cart/search/reviews/subscriptions:
Analytics/GTM/consent requirements:
Checkout/account assumptions:
Internal owner after launch:
Timeline:
Budget range:`,
  },
] as const;

export function ScopeReviewBriefTemplates() {
  const [copiedTemplateId, setCopiedTemplateId] = useState<string | null>(null);

  async function copyTemplate(template: (typeof BRIEF_TEMPLATES)[number]) {
    try {
      await navigator.clipboard.writeText(template.body);
      setCopiedTemplateId(template.id);
    } catch {
      setCopiedTemplateId(null);
    }
  }

  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Scope review prep"
        title="What to send before a scope review"
        description="Pick the closest template and send only the facts you already know. Clear scope keeps fixed-scope work commercial instead of risky."
        className="max-w-5xl"
      />
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {BRIEF_TEMPLATES.map((template) => (
          <article
            key={template.id}
            className="flex h-full flex-col rounded-[1.15rem] border border-black/8 bg-white p-5"
          >
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                Package brief
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-[#171717]">
                {template.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{template.description}</p>
            </div>
            <textarea
              readOnly
              value={template.body}
              aria-label={`${template.title} copyable text`}
              className="mt-5 min-h-[18rem] flex-1 resize-none rounded-[1rem] border border-black/10 bg-[#f6f7f7] p-4 font-mono text-xs leading-6 text-neutral-700"
            />
            <button
              type="button"
              onClick={() => copyTemplate(template)}
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            >
              {copiedTemplateId === template.id ? "Copied" : "Copy brief"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
