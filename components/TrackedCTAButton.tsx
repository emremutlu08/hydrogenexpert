"use client";

import Link from "next/link";

import { trackCTA } from "@/lib/analytics";
import { OWNER } from "@/lib/site";

interface TrackedCTAButtonProps {
  destination: "linkedin" | "upwork";
  label: string;
  className?: string;
}

const DESTINATIONS = {
  linkedin: OWNER.linkedIn,
  upwork: OWNER.upwork,
} as const;

export function TrackedCTAButton({
  destination,
  label,
  className,
}: TrackedCTAButtonProps) {
  return (
    <Link
      href={DESTINATIONS[destination]}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCTA(destination)}
      className={className}
    >
      {label}
    </Link>
  );
}
