import Image from "next/image";

import { BeforeAfterDiagram } from "@/components/BeforeAfterDiagram";
import { MediaFrame } from "@/components/MediaFrame";
import type { PostHeroVisual } from "@/lib/post-enhancements";

interface PostVisualProps {
  visual: PostHeroVisual;
  compact?: boolean;
}

export function PostVisual({ visual, compact = false }: PostVisualProps) {
  if (visual.type === "none") {
    return null;
  }

  if (visual.type === "before-after-svg") {
    return (
      <BeforeAfterDiagram
        beforeValue={visual.beforeValue}
        afterValue={visual.afterValue}
        beforeLabel={visual.beforeLabel}
        afterLabel={visual.afterLabel}
        beforeCaption={visual.beforeCaption}
        afterCaption={visual.afterCaption}
        title={visual.title}
        compact={compact}
      />
    );
  }

  if (visual.type === "flow-diagram-svg") {
    return (
      <figure className={`content-figure ${compact ? "content-figure--compact" : ""}`.trim()}>
        <MediaFrame ratio="compact" innerClassName="media-frame__inner--flow">
          <div className="flow-diagram">
            {visual.steps.map((step, index) => (
              <div key={step.label} className="flow-diagram__item">
                <div className="flow-diagram__box">
                  <p className="flow-diagram__box-label">{step.label}</p>
                  <p className="flow-diagram__box-body">{step.body}</p>
                </div>
                {index < visual.steps.length - 1 ? <span className="flow-diagram__arrow">→</span> : null}
              </div>
            ))}
          </div>
        </MediaFrame>
        {visual.caption ? <figcaption className="content-figure__caption">{visual.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <figure className={`content-figure ${compact ? "content-figure--compact" : ""}`.trim()}>
      <MediaFrame ratio="figure">
        <Image
          src={visual.src}
          alt={visual.alt}
          title={visual.title}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
        />
      </MediaFrame>
      {visual.caption ? <figcaption className="content-figure__caption">{visual.caption}</figcaption> : null}
    </figure>
  );
}
