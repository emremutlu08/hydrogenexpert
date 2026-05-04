import Image from "next/image";
import Link from "next/link";

import type { CaseStudyScreenshot } from "@/data/caseStudies";
import { hasPublicAsset } from "@/lib/public-assets";

interface CaseStudyScreenshotsProps {
  screenshots: readonly CaseStudyScreenshot[];
}

export function CaseStudyScreenshots({ screenshots }: CaseStudyScreenshotsProps) {
  const availableShots = screenshots.filter((shot) => shot.src && hasPublicAsset(shot.src));
  const screenshotGridClassName =
    availableShots.length > 1 ? "grid gap-4 sm:grid-cols-2" : "grid gap-4";

  if (availableShots.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <p className="eyebrow">Screenshots</p>
        <h3 className="subsection-title mt-3">Visual proof</h3>
      </div>
      <div className={screenshotGridClassName}>
        {availableShots.map((shot) => (
          <Link
            key={shot.src}
            href={shot.src!}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-[1.4rem] border border-black/8 bg-white hover:border-[#10b981]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={shot.src!}
                alt={shot.alt}
                title={shot.alt}
                width={1200}
                height={shot.src!.endsWith(".jpg") ? 1137 : 638}
                loading="lazy"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            {shot.caption ? (
              <p className="px-5 py-4 text-sm leading-7 text-neutral-600">{shot.caption}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
