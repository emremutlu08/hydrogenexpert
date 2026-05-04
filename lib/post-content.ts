import sanitizeHtml from "sanitize-html";

const ALLOWED_ARTICLE_TAGS = [
  "a",
  "blockquote",
  "br",
  "code",
  "div",
  "em",
  "h2",
  "h3",
  "h4",
  "li",
  "ol",
  "p",
  "pre",
  "strong",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "tr",
  "ul",
] as const;

const ALLOWED_ARTICLE_CLASSES = {
  div: ["article-table-wrap"],
  code: [/^language-[a-z0-9-]+$/],
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatInline(text: string) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function formatCodeBlock(block: string) {
  const lines = block.split("\n");
  const firstLine = lines[0]?.trim() ?? "";
  const language = firstLine.replace(/^```/, "").trim();
  const code = lines.slice(1, -1).join("\n");
  const languageClass = language ? ` class="language-${escapeHtml(language)}"` : "";

  return `<pre><code${languageClass}>${escapeHtml(code)}</code></pre>`;
}

function isMarkdownTable(lines: string[]) {
  return (
    lines.length >= 3 &&
    lines[0].includes("|") &&
    /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(lines[1])
  );
}

function parseTableRow(line: string) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function formatMarkdownTable(lines: string[]) {
  const headers = parseTableRow(lines[0]);
  const rows = lines.slice(2).map(parseTableRow);

  return [
    '<div class="article-table-wrap"><table>',
    "<thead><tr>",
    ...headers.map((header) => `<th>${formatInline(header)}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...rows.map(
      (row) =>
        `<tr>${headers
          .map((_, index) => `<td>${formatInline(row[index] ?? "")}</td>`)
          .join("")}</tr>`,
    ),
    "</tbody></table></div>",
  ].join("");
}

function splitInlineHeading(line: string) {
  const patterns = [
    /^(###\s+.+?\?)\s+(.+)$/,
    /^(##\s+.+?\?)\s+(.+)$/,
    /^(###\s+.+?:)\s+(.+)$/,
    /^(##\s+.+?:)\s+(.+)$/,
  ];

  for (const pattern of patterns) {
    const match = line.match(pattern);
    if (match) {
      return { heading: match[1], rest: match[2] };
    }
  }

  return null;
}

function formatMarkdownLike(content: string) {
  const normalized = content
    .replace(/\r\n/g, "\n")
    .replace(/^##\s+([^\n]+?)\s+##$/gm, "## $1")
    .trim();

  const chunks = normalized.split(/\n{2,}/);
  const html: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      html.push("</ul>");
      inUnorderedList = false;
    }

    if (inOrderedList) {
      html.push("</ol>");
      inOrderedList = false;
    }
  };

  for (const rawChunk of chunks) {
    const chunk = rawChunk.trim();

    if (!chunk) {
      continue;
    }

    if (chunk.startsWith("```") && chunk.endsWith("```")) {
      closeLists();
      html.push(formatCodeBlock(chunk));
      continue;
    }

    const lines = chunk
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .flatMap((line) => {
        const splitHeading = splitInlineHeading(line);
        return splitHeading ? [splitHeading.heading, splitHeading.rest] : [line];
      });

    if (isMarkdownTable(lines)) {
      closeLists();
      html.push(formatMarkdownTable(lines));
      continue;
    }

    if (lines.every((line) => /^-\s+/.test(line))) {
      if (!inUnorderedList) {
        closeLists();
        html.push("<ul>");
        inUnorderedList = true;
      }

      for (const line of lines) {
        html.push(`<li>${formatInline(line.replace(/^-\s+/, ""))}</li>`);
      }
      continue;
    }

    if (lines.every((line) => /^\d+\.\s+/.test(line))) {
      if (!inOrderedList) {
        closeLists();
        html.push("<ol>");
        inOrderedList = true;
      }

      for (const line of lines) {
        html.push(`<li>${formatInline(line.replace(/^\d+\.\s+/, ""))}</li>`);
      }
      continue;
    }

    closeLists();

    if (lines.length === 1 && lines[0].startsWith("### ")) {
      html.push(`<h3>${formatInline(lines[0].slice(4))}</h3>`);
      continue;
    }

    if (lines.length === 1 && lines[0].startsWith("## ")) {
      html.push(`<h2>${formatInline(lines[0].slice(3))}</h2>`);
      continue;
    }

    if (lines.length === 1 && lines[0].startsWith("# ")) {
      html.push(`<h2>${formatInline(lines[0].slice(2))}</h2>`);
      continue;
    }

    html.push(`<p>${formatInline(lines.join(" "))}</p>`);
  }

  closeLists();

  return html.join("");
}

export function sanitizeHtmlContent(content: string) {
  return sanitizeHtml(content, {
    allowedTags: [...ALLOWED_ARTICLE_TAGS],
    allowedAttributes: {
      a: ["href", "rel", "title"],
      code: ["class"],
      div: ["class"],
    },
    allowedClasses: ALLOWED_ARTICLE_CLASSES,
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {
      a: ["http", "https", "mailto"],
    },
    allowProtocolRelative: false,
    disallowedTagsMode: "discard",
    enforceHtmlBoundary: true,
    parser: {
      lowerCaseTags: true,
    },
    transformTags: {
      a: (_tagName, attribs) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          rel: "nofollow noopener noreferrer",
        },
      }),
    },
  });
}

export function formatPostContent(content: string) {
  if (!content.trim()) {
    return "";
  }

  const contentWithoutCodeBlocks = content.replace(/```[\s\S]*?```/g, "");
  const looksLikeHtml = /<([a-z][a-z0-9]*)\b[^>]*>/i.test(contentWithoutCodeBlocks);
  if (looksLikeHtml) {
    return sanitizeHtmlContent(content);
  }

  return formatMarkdownLike(content);
}
