import Image from "next/image";

import { BrandPreviewMedia } from "@/components/BrandPreviewMedia";
import { WorkCard } from "@/components/WorkCard";
import {
  BRAND_CLIENT_ASSETS,
  SELECTED_WORK_ITEMS,
  type BrandClientId,
} from "@/lib/brand-client-assets";

function getBrandAsset(id: BrandClientId) {
  switch (id) {
    case "eveshop":
      return BRAND_CLIENT_ASSETS.eveshop;
    case "bayam":
      return BRAND_CLIENT_ASSETS.bayam;
    case "rebel-bunny":
      return BRAND_CLIENT_ASSETS.rebelBunny;
    case "kirazev":
      return BRAND_CLIENT_ASSETS.kirazev;
    case "clohi":
      return BRAND_CLIENT_ASSETS.clohi;
  }
}

export function SelectedWorkGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {SELECTED_WORK_ITEMS.map((item) => {
        const logoAsset = getBrandAsset(item.id);
        const logoSrc = "logoSrc" in logoAsset ? logoAsset.logoSrc : undefined;

        return (
          <WorkCard
            key={item.id}
            href={item.href}
            eyebrow={item.eyebrow}
            title={item.title}
            body={item.body}
            media={<BrandPreviewMedia brandId={item.id} />}
            mediaFooter={
              <div className="flex h-7 w-28 items-center">
                {logoSrc ? (
                  <Image
                    src={logoSrc}
                    alt={logoAsset.logoAlt}
                    title={logoAsset.logoAlt}
                    width={112}
                    height={28}
                    sizes="112px"
                    className="h-full w-full object-contain object-left"
                  />
                ) : (
                  <span className="text-sm font-semibold text-neutral-700">{logoAsset.name}</span>
                )}
              </div>
            }
          />
        );
      })}
    </div>
  );
}
