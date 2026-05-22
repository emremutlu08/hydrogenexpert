import Image from "next/image";

import { MediaFrame } from "@/components/MediaFrame";
import { BRAND_CLIENT_ASSETS, type BrandClientId } from "@/lib/brand-client-assets";

interface BrandPreviewMediaProps {
  brandId: BrandClientId;
}

export function BrandPreviewMedia({ brandId }: BrandPreviewMediaProps) {
  const asset =
    brandId === "eveshop"
      ? BRAND_CLIENT_ASSETS.eveshop
      : brandId === "bayam"
        ? BRAND_CLIENT_ASSETS.bayam
        : brandId === "rebel-bunny"
          ? BRAND_CLIENT_ASSETS.rebelBunny
          : brandId === "kirazev"
            ? BRAND_CLIENT_ASSETS.kirazev
            : BRAND_CLIENT_ASSETS.clohi;

  return (
    <MediaFrame ratio="preview">
      <Image
        src={asset.imageSrc}
        alt={asset.imageAlt}
        title={asset.imageAlt}
        width={1440}
        height={683}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="h-full w-full object-cover"
      />
    </MediaFrame>
  );
}
