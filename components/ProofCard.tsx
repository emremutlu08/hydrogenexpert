import type { ReactNode } from "react";

interface ProofCardProps {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  className?: string;
  media?: ReactNode;
}

export function ProofCard({
  eyebrow,
  title,
  body,
  className,
  media,
}: ProofCardProps) {
  const rootClassName = ["proof-card", className].filter(Boolean).join(" ");

  return (
    <article className={rootClassName}>
      <div className="card-rail">
        <p className="card-label-block">{eyebrow}</p>
        {media ? <div className="mt-4">{media}</div> : null}
        <div className="card-rail__title card-rail__title--proof">
          <h3 className="proof-card__title">{title}</h3>
        </div>
        <p className="card-rail__body">{body}</p>
      </div>
    </article>
  );
}
