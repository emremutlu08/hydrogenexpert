import Image from "next/image";

interface IllustrationCardProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  priority?: boolean;
}

export function IllustrationCard({
  src,
  alt,
  title,
  className = "",
  priority = false,
}: IllustrationCardProps) {
  return (
    <div className={`illustration-card ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        title={title ?? alt}
        width={1200}
        height={800}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes="(min-width: 1024px) 560px, (min-width: 768px) 80vw, 100vw"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
