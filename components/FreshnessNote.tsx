interface FreshnessNoteProps {
  date: string;
  label?: string;
  className?: string;
}

export function FreshnessNote({
  date,
  label = "Reviewed",
  className = "",
}: FreshnessNoteProps) {
  const formattedDate = new Date(`${date}T00:00:00.000Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <p
      className={`mx-auto w-fit rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-4 py-2 text-xs font-bold uppercase text-[#0f8a5d] ${className}`.trim()}
    >
      {label} <time dateTime={date}>{formattedDate}</time>
    </p>
  );
}
