import type { ReactNode } from "react";

interface MediaFrameProps {
  children: ReactNode;
  ratio?: "preview" | "figure" | "compact";
  className?: string;
  innerClassName?: string;
}

export function MediaFrame({
  children,
  ratio = "preview",
  className,
  innerClassName,
}: MediaFrameProps) {
  const frameClassName = [
    "media-frame",
    `media-frame--${ratio}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const bodyClassName = ["media-frame__inner", innerClassName].filter(Boolean).join(" ");

  return (
    <div className={frameClassName}>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
