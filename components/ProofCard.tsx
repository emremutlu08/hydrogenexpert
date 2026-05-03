import type { CSSProperties, ReactNode } from "react";

interface ProofCardProps {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  className?: string;
  media?: ReactNode;
  style?: CSSProperties;
}

export function ProofCard({
  eyebrow,
  title,
  body,
  className,
  media,
  style,
}: ProofCardProps) {
  const rootClassName = ["proof-card", className].filter(Boolean).join(" ");

  return (
    <article className={rootClassName} style={style} data-animate="scale-in" data-tilt>
      <div className="proof-card__header">
        <p className="card-label-block">{eyebrow}</p>
        {media ? <div className="proof-card__media">{media}</div> : null}
      </div>
      <h3 className="proof-card__title">{title}</h3>
      <p className="proof-card__body">{body}</p>
    </article>
  );
}
