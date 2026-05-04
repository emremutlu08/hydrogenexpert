import Image from "next/image";

import { HAS_UPWORK_BADGE, UPWORK_BADGE_PATH } from "@/lib/public-assets";

interface UpworkTopRatedBadgeProps {
  size?: "sm" | "md" | "lg";
}

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

  return null;
}
