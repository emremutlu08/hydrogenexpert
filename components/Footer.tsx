import Link from "next/link";

import { NAV_ITEMS, OWNER } from "@/lib/site";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-slate-900">HydrogenExpert</p>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Merchant-first Shopify Hydrogen strategy and delivery for brands that
            need faster storefronts, stronger UX, and a credible partner from
            kickoff to launch.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon href={OWNER.linkedIn} label="LinkedIn">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h3.96V21H3Zm7.2 0h3.8v1.54h.06c.53-1 1.83-2.05 3.76-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-3.96v-5.09c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21H10.2Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href={OWNER.upwork} label="Upwork">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M16.76 6.5c-1.64 0-3 .87-3.82 2.32-.96-1.52-1.65-3.13-2.08-4.82H7.72v8.44c0 1.43-.8 2.33-1.98 2.33-1.19 0-1.99-.9-1.99-2.33V4H0v8.6C0 15.78 2.36 18 5.74 18c3.37 0 5.72-2.22 5.72-5.4v-.72c.43.72.9 1.42 1.43 2.1l-1.18 5.52h3.3l.73-3.43c.6.18 1.26.28 2.02.28 3.6 0 6.24-2.24 6.24-5.92S20.36 6.5 16.76 6.5Zm0 6.77c-.63 0-1.2-.12-1.71-.33l.05-.23c.19-.88.31-1.77.37-2.65.35-.45.8-.76 1.47-.76 1.3 0 2.11.96 2.11 2.01 0 1.04-.81 1.96-2.29 1.96Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500">
        © 2025 Emre Mutlu
      </div>
    </footer>
  );
}
