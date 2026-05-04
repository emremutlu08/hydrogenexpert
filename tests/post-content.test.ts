import { describe, expect, it } from "vitest";

import { formatPostContent, sanitizeHtmlContent } from "../lib/post-content";

describe("sanitizeHtmlContent", () => {
  it("keeps safe article HTML", () => {
    const html = sanitizeHtmlContent(
      '<h2>Heading</h2><p>Read <strong>this</strong> <a href="https://example.com" title="Example">reference</a>.</p><pre><code class="language-ts">const ok = true;</code></pre>',
    );

    expect(html).toContain("<h2>Heading</h2>");
    expect(html).toContain("<strong>this</strong>");
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('rel="nofollow noopener noreferrer"');
    expect(html).toContain('class="language-ts"');
  });

  it("removes dangerous active content and attributes", () => {
    const html = sanitizeHtmlContent(
      [
        '<p onclick="alert(1)">Hello</p>',
        '<script>alert(1)</script>',
        '<style>body{background:url(javascript:alert(1))}</style>',
        '<iframe src="https://evil.example"></iframe>',
        '<form action="/api/lead-capture"><input name="email"></form>',
        '<svg onload="alert(1)"><circle /></svg>',
        '<math href="javascript:alert(1)">x</math>',
        '<a href="javascript:alert(1)">bad</a>',
        '<a href="data:text/html,<script>alert(1)</script>">data</a>',
        '<img src=x onerror=alert(1)>',
      ].join(""),
    );

    expect(html).not.toMatch(/<script|<style|<iframe|<form|<input|<svg|<math|<img/i);
    expect(html).not.toMatch(/onclick|onload|onerror|javascript:|data:text\/html/i);
    expect(html).toContain("<p>Hello</p>");
    expect(html).toContain(">bad</a>");
    expect(html).toContain(">data</a>");
  });
});

describe("formatPostContent", () => {
  it("sanitizes HTML-looking Supabase content before rendering", () => {
    const html = formatPostContent('<h2>Safe</h2><p>Body</p><script>alert(1)</script>');

    expect(html).toContain("<h2>Safe</h2>");
    expect(html).toContain("<p>Body</p>");
    expect(html).not.toContain("<script>");
  });

  it("formats markdown-like content through the escaped markdown renderer", () => {
    const html = formatPostContent("## Hello\n\nThis has **bold** text and `code`.");

    expect(html).toContain("<h2>Hello</h2>");
    expect(html).toContain("<strong>bold</strong>");
    expect(html).toContain("<code>code</code>");
  });
});
