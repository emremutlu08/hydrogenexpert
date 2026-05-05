"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { trackCTA } from "@/lib/analytics";
import { OWNER } from "@/lib/site";

interface TrackedCTAButtonProps {
  destination: "linkedin" | "upwork";
  label: string;
  className?: string;
  sourceKind?: string;
  sourcePath?: string;
}

const DESTINATIONS = {
  linkedin: OWNER.linkedIn,
  upwork: OWNER.upwork,
} as const;

export function TrackedCTAButton({
  destination,
  label,
  className,
  sourceKind,
  sourcePath,
}: TrackedCTAButtonProps) {
  const pathname = usePathname();
  const trackingPath = sourcePath || pathname || "/";

  return (
    <Link
      href={DESTINATIONS[destination]}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCTA(destination, { sourceKind, sourcePath: trackingPath })}
      className={className}
    >
      {label}
    </Link>
  );
}
