import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { HAS_FOUNDER_PHOTO, FOUNDER_PHOTO_PATH } from "@/lib/public-assets";
import { OWNER } from "@/lib/site";

interface FounderCardProps {
  size?: "sm" | "md" | "lg";
  showBio?: boolean;
  showCredentials?: boolean;
  children?: ReactNode;
}

const PHOTO_SIZE = {
  sm: "h-28 w-28",
  md: "h-36 w-36",
  lg: "h-52 w-52 md:h-64 md:w-64",
} as const;

const PHOTO_RADIUS = {
  sm: "rounded-full",
  md: "rounded-full",
  lg: "rounded-2xl",
} as const;

export function FounderCard({
  size = "md",
  showBio = false,
  showCredentials = false,
  children,
}: FounderCardProps) {
  const isLarge = size === "lg";

  return (
    <article className="rounded-[1.7rem] border border-black/8 bg-white p-6 shadow-[0_30px_60px_-42px_rgba(15,23,42,0.18)] md:p-8">
      <div className={`grid gap-6 ${isLarge ? "lg:grid-cols-[0.38fr_0.62fr] lg:items-start" : ""}`}>
        <div className="space-y-5">
          <div
            className={[
              "relative overflow-hidden border border-black/8 bg-[#f6f7f7]",
              PHOTO_SIZE[size],
              PHOTO_RADIUS[size],
            ].join(" ")}
          >
            {HAS_FOUNDER_PHOTO ? (
              <Image
                src={FOUNDER_PHOTO_PATH}
                alt="Emre Mutlu, Shopify Hydrogen developer"
                title="Emre Mutlu, Shopify Hydrogen developer"
                fill
                sizes={isLarge ? "(max-width: 1024px) 208px, 256px" : "144px"}
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#ffffff,rgba(241,245,249,0.96)_55%,rgba(226,232,240,0.92))] text-neutral-400">
                <svg viewBox="0 0 120 120" className="h-24 w-24 fill-current">
                  <path d="M60 60c13.255 0 24-10.745 24-24S73.255 12 60 12 36 22.745 36 36s10.745 24 24 24Zm0 12c-19.882 0-36 16.118-36 36h72c0-19.882-16.118-36-36-36Z" />
                </svg>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#10b981]">
              Founder
            </p>
            <h3 className="font-display text-[2rem] leading-[0.96] tracking-[-0.05em] text-[#171717]">
              {OWNER.name}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {OWNER.title}
            </p>
          </div>

          {showCredentials ? (
            <div className="grid gap-2.5">
              <Link
                href={OWNER.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="soft-pill inline-flex min-h-12 items-center justify-center text-center transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                Message on LinkedIn
              </Link>
              <Link
                href={OWNER.upwork}
                target="_blank"
                rel="noreferrer"
                className="soft-pill inline-flex min-h-12 items-center justify-center text-center transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                <span className="text-[0.78rem] uppercase tracking-[0.16em]">Top Rated Plus</span>
              </Link>
              <Link
                href={OWNER.upwork}
                target="_blank"
                rel="noreferrer"
                className="soft-pill inline-flex min-h-12 items-center justify-center text-center transition hover:border-[#10b981] hover:text-[#10b981]"
              >
                100% JSS
              </Link>
            </div>
          ) : null}
        </div>

        {showBio ? (
          <div className="space-y-4 text-base leading-8 text-neutral-600">
            {children}
          </div>
        ) : null}
      </div>
    </article>
  );
}
