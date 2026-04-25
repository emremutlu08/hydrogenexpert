import Image from "next/image";
import Link from "next/link";

import {
  DEFAULT_UDEMY_COURSE_TITLE,
  DEFAULT_UDEMY_RATING_COUNT,
} from "@/lib/founder";

interface UdemyCourseCardProps {
  title?: string;
  ratingCount?: number;
  courseUrl: string;
  thumbnail?: string;
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#171717]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.8 12.41 6.68l5.39.78-3.9 3.8.92 5.37L10 14.1l-4.82 2.53.92-5.37-3.9-3.8 5.39-.78L10 1.8Z" />
        </svg>
      ))}
    </div>
  );
}

export function UdemyCourseCard({
  title = DEFAULT_UDEMY_COURSE_TITLE,
  ratingCount = DEFAULT_UDEMY_RATING_COUNT,
  courseUrl,
  thumbnail,
}: UdemyCourseCardProps) {
  return (
    <article className="rounded-[1.7rem] border border-black/8 bg-white p-6 shadow-[0_30px_60px_-42px_rgba(15,23,42,0.18)] md:p-8">
      <div className="grid gap-6 md:grid-cols-[0.72fr_1fr] md:items-start">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#0e9f6e]">
            World&apos;s First in English
          </span>
          {thumbnail ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-black/8 bg-[#f6f7f7]">
              <Image
                src={thumbnail}
                alt={`${title} thumbnail`}
                title={`${title} thumbnail`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.35rem] border border-black/8 bg-[linear-gradient(135deg,#171717,#2f3133)] p-6 text-center text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8df1cb]">
                  Udemy
                </p>
                <p className="mt-3 text-lg font-semibold leading-8">
                  Teaching Shopify Hydrogen in plain English
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#10b981]">
              Teaching
            </p>
            <h3 className="mt-3 font-display text-[2rem] leading-[0.96] tracking-[-0.05em] text-[#171717] md:text-[2.35rem]">
              {title}
            </h3>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              A merchant-friendly and developer-usable course built from the gap that existed when Hydrogen had no English-language learning path.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-black/8 bg-[#f6f7f7] px-4 py-2">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#171717]">
                Udemy
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-black/8 bg-white px-4 py-2">
              <StarRow />
              <span className="text-sm font-medium text-neutral-600">
                {ratingCount}+ ratings
              </span>
            </div>
          </div>

          <Link
            href={courseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
          >
            View on Udemy
          </Link>
        </div>
      </div>
    </article>
  );
}
