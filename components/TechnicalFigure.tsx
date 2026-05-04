import Image from "next/image";

import { MediaFrame } from "@/components/MediaFrame";

interface TechnicalFigureProps {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
}

export function TechnicalFigure({
  src,
  alt,
  title,
  width,
  height,
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
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          className="h-full w-full object-cover"
        />
      </MediaFrame>
      {caption ? <figcaption className="content-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}
