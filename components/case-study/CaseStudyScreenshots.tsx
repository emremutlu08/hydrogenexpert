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
    return (
      <section className="space-y-4">
        <div>
          <p className="eyebrow">Screenshots</p>
          <h3 className="subsection-title mt-3">Visual proof</h3>
        </div>
        <div className="rounded-[1.5rem] border border-dashed border-black/12 bg-[#f6f7f7] p-8 text-center">
          {/* TODO: Add real case-study screenshots here when approved assets are available. */}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Visual pending
          </p>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Approved project screenshots will be added when the assets are available.
          </p>
        </div>
      </section>
    );
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
            className="group overflow-hidden rounded-[1.4rem] border border-black/8 bg-white transition hover:-translate-y-0.5 hover:border-[#10b981]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={shot.src!}
                alt={shot.alt}
                title={shot.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.01]"
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
