import Image from "next/image";

import { BrandPreviewMedia } from "@/components/BrandPreviewMedia";
import { WorkCard } from "@/components/WorkCard";
import { BRAND_CLIENT_ASSETS, SELECTED_WORK_ITEMS } from "@/lib/brand-client-assets";

export function SelectedWorkGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {SELECTED_WORK_ITEMS.map((item) => {
        const logoAsset =
          item.id === "eveshop"
            ? BRAND_CLIENT_ASSETS.eveshop
            : item.id === "bayam"
              ? BRAND_CLIENT_ASSETS.bayam
              : BRAND_CLIENT_ASSETS.rebelBunny;

        return (
          <WorkCard
            key={item.id}
            href={item.href}
            eyebrow={item.eyebrow}
            title={item.title}
            body={item.body}
            media={<BrandPreviewMedia brandId={item.id} />}
            mediaFooter={
              <div className="relative h-7 w-28">
                <Image
                  src={logoAsset.logoSrc}
                  alt={logoAsset.logoAlt}
                  title={logoAsset.logoAlt}
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </div>
            }
          />
        );
      })}
    </div>
  );
}
