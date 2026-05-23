"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import {
  trackAnchorCTA,
  trackBlogCardClick,
  trackPackageCtaClick,
  trackProofLinkClicked,
} from "@/lib/analytics";

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
    | "package_cta_click"
    | "scope_review_cta_click"
    | "audit_cta_click"
    | "case_study_click"
    | "cost_page_cta_click"
    | "service_page_cta_click";
  sourceKind?: string;
  target?: string;
  ctaLabel?: string;
  packageName?: string;
}

interface ContentTrackedLinkProps extends BaseTrackedLinkProps {
  contentType: "blog" | "article";
  slug: string;
}

interface PackageTrackedLinkProps extends BaseTrackedLinkProps {
  packageName: string;
  ctaLabel: string;
  sourceKind?: string;
}

interface ProofTrackedLinkProps extends BaseTrackedLinkProps {
  label: string;
  sourceKind?: string;
  external?: boolean;
}

export function TrackedCTALink({
  href,
  className,
  children,
  eventName,
  sourceKind,
  target,
  ctaLabel,
  packageName,
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
          ctaLabel,
          packageName,
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}

export function TrackedPackageCTALink({
  href,
  className,
  children,
  packageName,
  ctaLabel,
  sourceKind,
}: PackageTrackedLinkProps) {
  const pathname = usePathname();
  const sourcePath = pathname || "/";

  return (
    <Link
      href={href}
      onClick={() =>
        trackPackageCtaClick({
          packageName,
          ctaLabel,
          sourceKind,
          sourcePath,
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}

export function TrackedProofLink({
  href,
  className,
  children,
  label,
  sourceKind,
  external,
}: ProofTrackedLinkProps) {
  const pathname = usePathname();
  const sourcePath = pathname || "/";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={() =>
        trackProofLinkClicked({
          proofLabel: label,
          href,
          sourceKind,
          sourcePath,
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
