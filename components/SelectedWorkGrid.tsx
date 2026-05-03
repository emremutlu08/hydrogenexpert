import Image from "next/image";
import type { CSSProperties } from "react";

import { BrandPreviewMedia } from "@/components/BrandPreviewMedia";
import { WorkCard } from "@/components/WorkCard";
import { BRAND_CLIENT_ASSETS, SELECTED_WORK_ITEMS } from "@/lib/brand-client-assets";

export function SelectedWorkGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {SELECTED_WORK_ITEMS.map((item, index) => {
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
            style={{ "--motion-delay": `${index * 70}ms` } as CSSProperties}
            mediaFooter={
              <div className="flex h-7 w-28 items-center">
                <Image
                  src={logoAsset.logoSrc}
                  alt={logoAsset.logoAlt}
                  title={logoAsset.logoAlt}
                  width={112}
                  height={28}
                  sizes="112px"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            }
          />
        );
      })}
    </div>
  );
}
