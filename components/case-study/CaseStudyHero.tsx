import Image from "next/image";
import Link from "next/link";

import { hasPublicAsset } from "@/lib/public-assets";

interface CaseStudyHeroProps {
  clientName: string;
  tagline: string;
  role: string;
  industry: string;
  liveUrl?: string;
  logo: {
    src?: string;
    alt: string;
    label: string;
  };
  heroImage?: {
    src?: string;
    alt: string;
  };
}

export function CaseStudyHero({
  clientName,
  tagline,
  role,
  industry,
  liveUrl,
  logo,
  heroImage,
}: CaseStudyHeroProps) {
  const hasLogo = Boolean(logo.src && hasPublicAsset(logo.src));
  const hasHeroImage = Boolean(heroImage?.src && hasPublicAsset(heroImage.src));

  return (
    <div className="grid gap-x-8 gap-y-8 xl:grid-cols-2 xl:items-start">
      <div className="space-y-5 xl:pt-1">
        <div className="flex min-h-14 items-center">
          {hasLogo && logo.src ? (
            <div className="relative h-10 w-36">
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
          ) : (
            <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-700">
              {logo.label}
            </span>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="section-heading text-[2.4rem] md:text-[3.2rem]">{clientName}</h2>
          <p className="text-lg leading-8 text-neutral-700">{tagline}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.2rem] border border-black/8 bg-[#f6f7f7] p-4">
            <p className="dna-kicker text-[#10b981]">Role</p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{role}</p>
          </div>
          <div className="rounded-[1.2rem] border border-black/8 bg-[#f6f7f7] p-4">
            <p className="dna-kicker text-[#10b981]">Industry</p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{industry}</p>
          </div>
        </div>

        {liveUrl ? (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
          >
            View live store
          </Link>
        ) : null}
      </div>

      <div className="w-full overflow-hidden rounded-[1.45rem] border border-black/8 bg-[linear-gradient(180deg,#f7f8f8_0%,#ecefee_100%)] p-4">
        {hasHeroImage && heroImage?.src ? (
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.1rem]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              title={heroImage.alt}
              fill
              sizes="(min-width: 1024px) 576px, 100vw"
              className="object-contain"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center rounded-[1.1rem] border border-dashed border-black/12 bg-white text-center">
            <div className="max-w-sm space-y-2 px-6">
              <p className="dna-kicker text-neutral-500">Project visual pending</p>
              <p className="text-sm leading-7 text-neutral-600">
                Approved project asset to be added.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
