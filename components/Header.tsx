import Image from "next/image";
import Link from "next/link";

import { TrackedCTAButton } from "@/components/TrackedCTAButton";
import type { SiteNavItem } from "@/lib/navigation";

interface HeaderProps {
  navItems: readonly SiteNavItem[];
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto max-w-[92rem] px-5 py-4 md:px-6 md:py-5">
        <div className="site-header__frame">
          <div className="site-header__top-row">
            <Link href="/" className="site-header__brand">
              <span className="relative block h-10 w-10 shrink-0 md:h-11 md:w-11">
                <Image
                  src="/brand/hydrogenexpert-logo-icon.png"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </span>
              <span className="flex min-w-0 flex-col leading-none">
                <span className="font-display text-base font-semibold tracking-[-0.04em] md:text-lg">
                  HydrogenExpert
                </span>
                <span className="mt-1 hidden text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-neutral-500 md:block">
                  Storefront strategy and delivery
                </span>
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <TrackedCTAButton
                destination="linkedin"
                label="Let's Chat"
                className="hidden w-fit rounded-full bg-[#171717] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#10b981] md:inline-flex"
              />
              <TrackedCTAButton
                destination="linkedin"
                label="Chat"
                className="inline-flex rounded-full bg-[#171717] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#10b981] md:hidden"
              />
            </div>
          </div>

          <nav
            aria-label="Primary navigation"
            className="site-header__nav site-header__nav--responsive nav-scroll"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
