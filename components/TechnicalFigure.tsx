import Image from "next/image";

import { MediaFrame } from "@/components/MediaFrame";

interface TechnicalFigureProps {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
}

export function TechnicalFigure({
  src,
  alt,
  title,
  caption,
  priority = false,
  sizes = "(min-width: 1024px) 896px, 100vw",
  aspectClassName = "aspect-[16/9]",
}: TechnicalFigureProps) {
  return (
    <figure className="content-figure">
      <MediaFrame ratio="figure" innerClassName={aspectClassName}>
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </MediaFrame>
      {caption ? <figcaption className="content-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}
