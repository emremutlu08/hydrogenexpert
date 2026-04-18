import Link from "next/link";

import { NAV_ITEMS } from "@/lib/site";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="text-lg font-black tracking-[0.16em] text-slate-900">
            HydrogenExpert
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <TrackedCTAButton
            destination="upwork"
            label="Hire Me"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          />
        </div>

        <nav className="mt-4 flex gap-4 overflow-x-auto pb-1 text-sm font-medium text-slate-700 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 transition hover:border-blue-600 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
