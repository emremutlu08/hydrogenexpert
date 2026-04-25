import Image from "next/image";
import Link from "next/link";

import type { ClientLogo } from "@/data/clientLogos";
import { hasPublicAsset } from "@/lib/public-assets";

interface LogoWallProps {
  logos: readonly ClientLogo[];
  variant?: "grayscale" | "color" | "hover-reveal";
  title?: string;
  subtitle?: string;
}

function LogoWallItem({
  logo,
  variant,
}: {
  logo: ClientLogo;
  variant: NonNullable<LogoWallProps["variant"]>;
}) {
  const hasLogo = Boolean(logo.src && hasPublicAsset(logo.src));
  const imageClassName =
    variant === "color"
      ? "object-contain"
      : variant === "grayscale"
        ? "object-contain grayscale"
        : "object-contain";

  const content = (
    <div className="group relative flex h-[112px] items-center justify-center rounded-[1.3rem] border border-black/8 bg-white px-5 py-6 text-center transition hover:-translate-y-0.5 hover:border-[#10b981]">
      {logo.isCurrent ? (
        <span className="absolute right-3 top-3 inline-flex h-2.5 w-2.5 rounded-full bg-[#10b981]" />
      ) : null}
      {hasLogo && logo.src ? (
        <div className="relative h-12 w-full max-w-[148px]">
          <Image
            src={logo.src}
            alt={logo.alt}
            title={logo.alt}
            fill
            sizes="148px"
            className={imageClassName}
          />
        </div>
      ) : (
        <span className="inline-flex min-h-10 items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-700">
          {logo.label}
        </span>
      )}
    </div>
  );

  if (!logo.link) {
    return content;
  }

  const isExternal = logo.link.startsWith("http");

  return (
    <Link href={logo.link} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
      {content}
    </Link>
  );
}

export function LogoWall({
  logos,
  variant = "color",
  title = "Selected work",
  subtitle,
}: LogoWallProps) {
  return (
    <section className="surface-card space-y-6">
      <div className="max-w-3xl space-y-3">
        <p className="eyebrow">Client roster</p>
        <h2 className="section-heading">{title}</h2>
        {subtitle ? <p className="body-copy">{subtitle}</p> : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {logos.map((logo) => (
          <LogoWallItem key={logo.label} logo={logo} variant={variant} />
        ))}
      </div>
    </section>
  );
}
