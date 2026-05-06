"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { trackAnchorCTA, trackBlogCardClick } from "@/lib/analytics";

interface BaseTrackedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

interface CtaTrackedLinkProps extends BaseTrackedLinkProps {
  eventName:
    | "cta_click_fit_audit"
    | "cta_click_email_brief"
    | "cta_click_case_studies"
    | "audit_cta_click"
    | "case_study_click"
    | "cost_page_cta_click"
    | "service_page_cta_click";
  sourceKind?: string;
  target?: string;
}

interface ContentTrackedLinkProps extends BaseTrackedLinkProps {
  contentType: "blog" | "article";
  slug: string;
}

export function TrackedCTALink({
  href,
  className,
  children,
  eventName,
  sourceKind,
  target,
}: CtaTrackedLinkProps) {
  const pathname = usePathname();
  const sourcePath = pathname || "/";

  return (
    <Link
      href={href}
      onClick={() =>
        trackAnchorCTA(eventName, {
          sourceKind,
          sourcePath,
          target: target || href,
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}

export function TrackedContentLink({
  href,
  className,
  children,
  contentType,
  slug,
}: ContentTrackedLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={() => trackBlogCardClick({ slug, contentType, sourcePath: pathname || "/" })}
      className={className}
    >
      {children}
    </Link>
  );
}
