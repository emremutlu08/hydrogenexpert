import Image from "next/image";

import { MediaFrame } from "@/components/MediaFrame";
import { BRAND_CLIENT_ASSETS, type BrandClientId } from "@/lib/brand-client-assets";

interface BrandPreviewMediaProps {
  brandId: BrandClientId;
}

export function BrandPreviewMedia({ brandId }: BrandPreviewMediaProps) {
  if (brandId === "eveshop") {
    return (
      <MediaFrame ratio="preview">
        <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,#202124_0%,#111111_100%)] px-6 py-6">
          <p className="card-label-block text-[#8df1cb]">Nationwide retail</p>
          <div className="space-y-3">
            <p className="font-display text-[3rem] leading-none tracking-[-0.06em] text-white md:text-[3.5rem]">
              400K+
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              users
            </p>
          </div>
          <div aria-hidden="true" className="h-8" />
        </div>
      </MediaFrame>
    );
  }

  const asset =
    brandId === "bayam"
      ? BRAND_CLIENT_ASSETS.bayam
      : brandId === "rebel-bunny"
        ? BRAND_CLIENT_ASSETS.rebelBunny
        : brandId === "kirazev"
          ? BRAND_CLIENT_ASSETS.kirazev
          : BRAND_CLIENT_ASSETS.clohi;

  if (asset.previewMode === "text") {
    return (
      <MediaFrame ratio="preview">
        <div className={`flex h-full flex-col justify-between px-6 py-6 ${asset.previewTheme}`}>
          <p className="card-label-block text-[#8df1cb]">{asset.name}</p>
          <div className="space-y-3">
            <p className="font-display text-[2.8rem] leading-none text-white md:text-[3.4rem]">
              {asset.previewMetric}
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {asset.previewSubLabel}
            </p>
          </div>
          <div aria-hidden="true" className="h-8" />
        </div>
      </MediaFrame>
    );
  }

  const dimensions =
    brandId === "bayam"
      ? { width: 1200, height: 638 }
      : { width: 1200, height: 1137 };

  return (
    <MediaFrame ratio="preview">
      <Image
        src={asset.imageSrc}
        alt={asset.imageAlt}
        title={asset.imageAlt}
        width={dimensions.width}
        height={dimensions.height}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="h-full w-full object-cover"
      />
    </MediaFrame>
  );
}
