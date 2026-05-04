import Image from "next/image";

import { HAS_UPWORK_BADGE, UPWORK_BADGE_PATH } from "@/lib/public-assets";

interface UpworkTopRatedBadgeProps {
  size?: "sm" | "md" | "lg";
}

const SIZE_CLASSES = {
  sm: "min-h-12 min-w-12 px-3 py-2 text-[0.62rem]",
  md: "min-h-14 min-w-14 px-3.5 py-2.5 text-[0.66rem]",
  lg: "min-h-[4.5rem] min-w-[4.5rem] px-4 py-3 text-[0.7rem]",
} as const;

const IMAGE_SIZE = {
  sm: 48,
  md: 56,
  lg: 72,
} as const;

export function UpworkTopRatedBadge({
  size = "md",
}: UpworkTopRatedBadgeProps) {
  if (HAS_UPWORK_BADGE && UPWORK_BADGE_PATH) {
    const imageSize = IMAGE_SIZE[size];

    return (
      <div className="inline-flex items-center justify-center rounded-2xl border border-black/8 bg-white/95 p-2 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.16)]">
        <Image
          src={UPWORK_BADGE_PATH}
          alt="Upwork Top Rated Plus badge"
          title="Upwork Top Rated Plus badge"
          width={imageSize}
          height={imageSize}
          className="h-auto w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-2xl border border-black/8 bg-white/95 text-center font-semibold uppercase tracking-[0.16em] text-neutral-600 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.16)]",
        SIZE_CLASSES[size],
      ].join(" ")}
    >
      <span className="max-w-[7ch] leading-4">Top Rated Plus</span>
    </div>
  );
}
