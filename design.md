# HydrogenExpert Design System

HydrogenExpert is a proof-led Shopify Hydrogen specialist site. The design should feel like a senior operator's technical journal, not a generic SaaS landing page and not a broad agency brochure.

The canonical reference page is `/blog`. New pages and redesign passes should start there for rhythm, typography, surfaces, and editorial restraint.

## Visual Theme and Atmosphere

- **Mood:** calm, technical, direct, premium, editorial.
- **Positioning:** one senior Shopify Hydrogen operator with real production proof.
- **Energy:** confident but quiet. The design should not shout, over-decorate, or over-explain.
- **Visual metaphor:** a technical field notebook for serious ecommerce decisions.
- **Default composition:** white editorial page, subtle grid background, structured cards, black/emerald calls to action, dark conversion panels near final action.

Avoid:

- Generic SaaS gradients, purple-blue AI palettes, decorative blobs, fake dashboards, and agency-style feature grids.
- Unsupported proof, invented metrics, fake testimonials, fake logos, or decorative screenshots that imply work not actually done.
- Dense control surfaces that feel like an admin app.

## Color Palette and Roles

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Background | `--background` | `#ffffff` | Body and primary page canvas |
| Text Primary | `--foreground` | `#171717` | Main headings and high-emphasis text |
| Accent | `--dna-accent` | `#10b981` | Primary action highlights, proof markers, active/hover states |
| Accent Soft | `--dna-accent-soft` | `rgba(16, 185, 129, 0.1)` | Pills, badges, subtle status fills |
| Border | `--dna-border` | `rgba(23, 23, 23, 0.08)` | Cards, inputs, dividers |
| Strong Border | `--dna-border-strong` | `rgba(23, 23, 23, 0.14)` | Higher-emphasis dividers and framed tools |
| Muted Text | `--dna-muted` | `#5f6368` | Body support copy, captions, secondary text |
| Soft Surface | `--dna-panel` | `#f6f7f7` | Secondary panels and low-emphasis surfaces |
| Dark Surface | none | `#171717` / `#111111` | CTA panels, footer, proof contrast moments |

Use emerald as a signal, not decoration. One emerald line, dot, badge, or hover state is usually enough.

## Typography

HydrogenExpert uses **Geist as a single-family system**.

- `--font-sans`: Geist
- `--font-display`: Geist
- Headings use the display token for semantic clarity, not because they use a different family.
- Body copy uses readable line-height and conservative widths.

### Scale

| Role | Class | Desktop | Mobile | Notes |
| --- | --- | --- | --- | --- |
| Hero statement | `.hero-statement` | very large editorial display | compact display | Homepage only or rare first-viewport moments |
| Hero response | `.hero-response` | strong supporting statement | compact statement | Homepage only |
| Page title | `.page-title` | uppercase editorial title | controlled uppercase title | Inner page H1s, including `/blog` |
| Section heading | `.section-heading` | large section title | compact section title | Main page sections |
| Subsection title | `.subsection-title` | medium editorial heading | compact card/section title | Cards, grouped panels, article supports |
| Card title | `.card-title` | compact semibold title | compact semibold title | Repeated cards |
| Body copy | `.body-copy` | 16-17px with generous line height | 16px minimum | Merchant-readable explanatory text |
| Eyebrow | `.eyebrow`, `.dna-kicker` | small uppercase label | small uppercase label | Use sparingly to structure scan paths |

Rules:

- Do not introduce another font without updating this file first.
- Avoid one-off arbitrary heading sizes when a semantic class can carry the role.
- Keep line length comfortable: long-form article text around `max-w-4xl`; body blocks usually `max-w-2xl` to `max-w-3xl`.
- Use tight letter spacing only for large display type and uppercase labels.

## Layout and Spacing

`page-shell` is the page-level rhythm source.

- Page max width: `max-w-7xl`.
- Page padding: compact on mobile, wider on tablet and desktop.
- Page vertical rhythm: generous but not theatrical.
- Inner article measure: `max-w-4xl`.
- Section content measure: usually `max-w-3xl` to `max-w-5xl`.

Spacing scale:

- Small internal relationships: `gap-3`, `mt-3`, `space-y-3`.
- Card internals: `gap-4`, `gap-5`, `space-y-5`, `space-y-6`.
- Section internals: `gap-6`, `space-y-6`, `space-y-8`.
- Page-level separation: handled by `page-shell`, not repeated custom margins.

When a page feels inconsistent, compare it to `/blog` first:

1. Is the intro using `PageIntroSection`?
2. Are sections inside `page-shell` rather than setting their own outer rhythm?
3. Are cards using the standard surfaces?
4. Are text blocks constrained instead of running wide?

## Component Styles

### Surfaces

- `.card`: white, softly rounded, bordered, subtle shadow. Use for repeated content cards.
- `.surface-card`: primary large section container. Use for major page bands.
- `.card-soft`: softer secondary surface for TL;DR, related paths, supporting panels.
- `.hero-card`: dark high-contrast panel for positioning, CTA, or important contrast moments.

Cards should feel editorial and useful, not decorative. Avoid nested cards unless the inner card is a repeated item or form/control surface.

### Buttons and Links

- Primary action: black or emerald filled pill.
- Secondary action: white or dark-surface outline pill.
- Links inside headings may use emerald hover.
- All interactive elements need visible focus states.
- Primary mobile targets should be at least 44px tall.

### Forms

- Forms should feel active and editable, not disabled.
- Inputs use visible borders, adequate background contrast, and a clear focus ring.
- Labels use uppercase technical metadata styling but must remain readable.
- Submit states should preserve layout and clearly communicate disabled/submitting status.

### Header and Footer

- Header should be compact and practical.
- Mobile navigation may scroll, but tap targets must remain comfortable.
- Footer may use the dark surface language and stronger CTA framing.

## Motion and Interaction

Motion is restrained.

- Use 150-200ms transitions for hover, focus, border, color, background, and subtle transform changes.
- Do not animate layout dimensions.
- Respect `prefers-reduced-motion` by disabling animation and transitions for users who request it.
- Never globally disable all transitions outside `prefers-reduced-motion`.

## Accessibility Rules

- Body text should meet WCAG AA contrast.
- Focus states must be visible on links, buttons, inputs, textareas, summaries, and custom clickable cards.
- Mobile primary controls should be at least 44px tall.
- Do not rely on color alone for meaning.
- Preserve real text and semantic HTML over image-only or decorative representations.

## Design Notes for Future Generation

When generating or editing a HydrogenExpert page:

> Build an editorial, proof-led Shopify Hydrogen specialist page using the HydrogenExpert design system. Use Geist as the only font family. Use `/blog` as the rhythm reference. Keep the palette white, near-black, neutral grey, and emerald `#10b981`. Use `page-shell`, `PageIntroSection`, `surface-card`, `card`, `card-soft`, and `hero-card` before inventing new layout patterns. Keep copy readable, restrained, and merchant-specific. Do not add unsupported proof, fake metrics, generic SaaS styling, purple-blue gradients, decorative blobs, or agency-dashboard UI.
