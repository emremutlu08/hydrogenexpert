import Image from "next/image";
import Link from "next/link";

import type { SiteNavItem } from "@/lib/navigation";
import { OWNER } from "@/lib/site";

function SocialLink({
  href,
  label,
}: {
  href?: string | null;
  label: string;
}) {
  if (!href) {
    return (
      <span className="rounded-full border border-white/14 px-4 py-2 text-sm font-medium text-neutral-400">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/14 px-4 py-2 text-sm font-medium text-white transition hover:border-[#10b981] hover:text-[#8df1cb]"
    >
      {label}
    </Link>
  );
}

interface FooterProps {
  navItems: readonly SiteNavItem[];
}

const SERVICE_ITEMS = [
  { href: "/custom-shopify-hydrogen-storefront", label: "Shopify Hydrogen Development" },
  { href: "/shopify-hydrogen-audit", label: "Hydrogen Storefront Audit" },
  { href: "/liquid-to-hydrogen-migration", label: "Liquid to Hydrogen Migration" },
  { href: "/shopify-hydrogen-performance-optimization", label: "Performance and UX Refactor" },
] as const;

const RESOURCE_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/what-is-hydrogen", label: "What Is Shopify Hydrogen?" },
  { href: "/should-i-use-it", label: "Should I Use Hydrogen?" },
  { href: "/when-not-to-use-hydrogen", label: "When Not to Use Hydrogen" },
  { href: "/shopify-hydrogen-seo-guide", label: "Hydrogen SEO Guide" },
  { href: "/cost", label: "Shopify Hydrogen Cost" },
] as const;

const PROOF_ITEMS = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/case-studies/eveshop-shopify-hydrogen", label: "EveShop" },
  { href: "/case-studies/bayam-jewelry-shopify-hydrogen", label: "Bayam Jewelry" },
  { href: "/case-studies/rebel-bunny-shopify-hydrogen", label: "Rebel Bunny" },
] as const;

const TRUST_ITEMS = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
] as const;

function FooterCard({
  title,
  items,
}: {
  title: string;
  items: readonly (string | { href: string; label: string; external?: boolean })[];
}) {
  return (
    <div>
      <p className="dna-kicker text-[#8df1cb]">{title}</p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-300">
        {items.map((item) =>
          typeof item === "string" ? (
            <span key={item}>{item}</span>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="transition hover:text-[#10b981]"
            >
              {item.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export function Footer({ navItems }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const hasBlog = navItems.some((item) => item.href === "/blog");

  return (
    <footer className="mt-20 bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-10">
        <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),transparent_24%),linear-gradient(135deg,#1e1f21_0%,#111111_74%)] p-6 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="mt-1 block h-11 w-11 shrink-0">
                    <Image
                      src="/brand/hydrogenexpert-logo-icon.png"
                      alt="HydrogenExpert logo"
                      title="HydrogenExpert logo"
                      width={44}
                      height={44}
                      loading="lazy"
                      sizes="44px"
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[1.4rem] font-semibold tracking-[-0.05em] text-white md:text-[1.65rem]">
                      HydrogenExpert
                    </p>
                    <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Senior Shopify Hydrogen development and advisory
                    </p>
                  </div>
                </div>
                <p className="max-w-2xl font-display text-2xl leading-[1.05] tracking-[-0.045em] text-white md:text-4xl">
                  {"Your Shopify store works, but every new feature takes 3x longer than last year? That's when I come in."}
                </p>
              </div>
              <p className="max-w-xl text-sm leading-7 text-neutral-400">
                I help Shopify Plus and growth-stage ecommerce brands decide whether
                Hydrogen is worth it, then scope and ship production-grade storefronts
                without agency layers. If Liquid is still the smarter move, I will say so.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <SocialLink href={OWNER.linkedIn} label="LinkedIn" />
                <SocialLink href={OWNER.upwork} label="Upwork" />
                <SocialLink href={OWNER.udemyUrl} label="Udemy" />
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.06] p-6 md:p-7">
              <p className="dna-kicker text-[#8df1cb]">Start Here</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-4xl">
                Not sure if Hydrogen is worth it?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base md:leading-8">
                Send your store URL and what feels slow, limiting, or expensive
                to change. I will give you a direct answer on whether the next
                move is Liquid, Hydrogen, or no rebuild. LinkedIn is the fastest
                place to start the conversation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={OWNER.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#10b981] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
                >
                  Message on LinkedIn
                </Link>
                <Link
                  href="/hire-me"
                  className="rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#10b981] hover:text-[#8df1cb]"
                >
                  Hire Me
                </Link>
                <Link
                  href="#email-form"
                  className="rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#10b981] hover:text-[#8df1cb]"
                >
                  Email Brief
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 md:grid-cols-4">
            <FooterCard title="Services" items={SERVICE_ITEMS} />
            <FooterCard
              title="Resources"
              items={[
                ...RESOURCE_ITEMS,
                ...(hasBlog ? [{ href: "/blog", label: "Hydrogen Blog" }] : []),
              ]}
            />
            <FooterCard
              title="Proof"
              items={[
                ...PROOF_ITEMS,
                { href: OWNER.upwork, label: "Upwork Profile", external: true },
              ]}
            />
            <FooterCard title="Trust" items={TRUST_ITEMS} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-6 py-5 text-center text-sm text-neutral-500">
        © {currentYear} Emre Mutlu
      </div>
    </footer>
  );
}
