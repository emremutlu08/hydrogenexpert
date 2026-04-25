interface BeforeAfterDiagramProps {
  beforeValue: string;
  afterValue: string;
  beforeLabel: string;
  afterLabel: string;
  beforeCaption: string;
  afterCaption: string;
  title?: string;
  compact?: boolean;
}

export function BeforeAfterDiagram({
  beforeValue,
  afterValue,
  beforeLabel,
  afterLabel,
  beforeCaption,
  afterCaption,
  title,
  compact = false,
}: BeforeAfterDiagramProps) {
  return (
    <figure className={`before-after-diagram ${compact ? "before-after-diagram--compact" : ""}`.trim()}>
      {title ? <figcaption className="before-after-diagram__title">{title}</figcaption> : null}
      <div className="before-after-diagram__grid">
        <div className="before-after-diagram__panel">
          <p className="before-after-diagram__label">Before</p>
          <p className="before-after-diagram__value">{beforeValue}</p>
          <p className="before-after-diagram__subhead">{beforeLabel}</p>
          <p className="before-after-diagram__caption">{beforeCaption}</p>
        </div>
        <div className="before-after-diagram__panel before-after-diagram__panel--accent">
          <p className="before-after-diagram__label">After</p>
          <p className="before-after-diagram__value">{afterValue}</p>
          <p className="before-after-diagram__subhead">{afterLabel}</p>
          <p className="before-after-diagram__caption">{afterCaption}</p>
        </div>
      </div>
    </figure>
  );
}
