import { sanitizeJsonScriptContent } from "@/lib/security";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

const JSON_LD_KEY_FIELDS = ["@id", "url", "headline", "name"] as const;

function getJsonLdKey(entry: Record<string, unknown>, serializedEntry: string) {
  for (const field of JSON_LD_KEY_FIELDS) {
    const value = entry[field];

    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  return serializedEntry;
}

export function JsonLd({ data }: JsonLdProps) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((entry) => {
          const serializedEntry = JSON.stringify(entry);

          return (
            <script
              key={getJsonLdKey(entry, serializedEntry)}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: sanitizeJsonScriptContent(serializedEntry) }}
            />
          );
        })}
      </>
    );
  }

  const serializedData = JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeJsonScriptContent(serializedData) }}
    />
  );
}
