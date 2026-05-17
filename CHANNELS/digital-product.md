---
tags:
  - HTML/CSS
  - Flexbox
  - CSS Grid
  - Responsive design
  - Color schemes
tools:
  - mcmds.css
  - Typekit
  - Indivisible
---
# Digital Product Channel

Use this channel for UI/UX, websites, web apps, dashboards, HTML/CSS, product surfaces, prototypes, and shareable static pages.

Read `DESIGN.md` and `BRAND.md` first. This file translates those foundations into interactive digital work.

## Reusable Stylesheet

`CHANNELS/digital-product.md` owns the reusable CSS implementation asset at `../assets/mcmds.css`.

For standalone HTML or shareable static pages, prefer linking the reusable stylesheet at `../assets/mcmds.css` or copying `/Users/brettmcm/.codex/skills/mcmds/assets/mcmds.css` next to the generated page.

When generating standalone HTML inside the skill folder, include:

```html
<link rel="stylesheet" href="https://use.typekit.net/shq4xoc.css" />
<link rel="stylesheet" href="assets/mcmds.css" />
```

Add only page-specific CSS for content-driven layout exceptions, imagery, or components not covered by the base stylesheet.

## Digital Color

Generated pages must define both light and dark palettes and use `prefers-color-scheme` unless the host app already provides a theme system. Prefer semantic CSS variables such as `--bg`, `--surface`, `--ink`, `--muted`, `--line`, and `--accent`.

Use `color-scheme: light dark`. Test foreground/background contrast, image overlays, borders, table rows, and accent marks in both appearances.

## Digital Type

Use Indivisible. For standalone/shareable pages, include:

```html
<link rel="stylesheet" href="https://use.typekit.net/shq4xoc.css" />
```

Reference CSS values:

- `h1`: `font-size: 3.25rem`, `line-height: 1.1`, `letter-spacing: -0.04em`, `font-weight: 500`
- `h2`: `font-size: 2.25rem`, `line-height: 1.1`, `letter-spacing: -0.04em`, `font-weight: 500`
- `h3`: `font-size: 1.5rem`, `line-height: 1.2`, `letter-spacing: 0`, `font-weight: 500`
- Lead paragraph: `font-size: 34px`, `font-weight: 400`, `line-height: 1.45`, `letter-spacing: -0.02em`
- Body copy: `font-size: 20px` for editorial body, `16px` for compact UI
- Mobile: reduce `h1` to `2rem`, `h2` to `1.75rem`, `h3` to `1.4rem`, and lead text to `22px`

Do not scale font size directly with viewport width. Ensure text never overlaps images or adjacent content on mobile.

## Digital Layout

Use spacious full-width sections and a consistent page grid. Define shared page gutters once and reuse them for every major section.

Reference CSS values:

- Desktop gutter: `48px`
- Mobile gutter: `20px`
- Medium shell: `900px`
- Default shell: `1200px`
- Expanded shell: `1440px`
- Wide shell: `2000px`
- Default section spacing: `112px`
- Tight section spacing: `72px`
- Copy measure: `68ch`

Use one page-level content shell for comparable sections:

```css
.mcm-section {
  width: 100%;
  padding-inline: var(--mcm-page-gutter);
}

.mcm-section > .mcm-section__inner {
  max-width: var(--mcm-page-max);
  margin-inline: auto;
}
```

Put row and column layouts inside the shared shell. Do not let a two-column row, three-column row, intro section, or table section define its own outer width or alignment.

Prefer flexbox for page and section layout by default. Use CSS grid only when the content truly needs two-dimensional placement or explicit grid tracks.

## Digital Patterns

For brand, portfolio, case study, or about pages:

- Start with a strong first-viewport signal: image-led, typographic, artifact-led, or a compact data summary.
- Make the brand, person, object, or subject obvious in the first viewport.
- Use sparse section titles, confident statements, and a few sharp paragraphs.
- Structure capabilities or services as quiet three-column list groups rather than colorful feature cards.
- Use a small orange rule or mark to punctuate important transitions.

For project status pages, reports, dashboards, and operational tools:

- Keep the same sensibility, but prioritize clarity.
- Lead with a simple title, snapshot/date metadata, and top-level totals.
- Use clean tables instead of decorative chart widgets unless a chart adds real value.
- Default to stacked section headings: heading first, note below in a controlled measure.
- Preserve density where repeated use matters.

## Components

Prefer clean, low-friction components: text links, thin rules, concise metadata, restrained tables, and quiet buttons.

Tables should not horizontally scroll on mobile unless there is no readable alternative. Keep the desktop table layout, then transform rows into stacked content blocks at small viewport sizes.

Forms should use restrained fields with a subtle but visible surface tint rather than bottom-border-only inputs. Avoid default fully boxed browser styling, but do not rely on bottom borders for field definition. Do not put borders around checkbox groups or checkbox inputs.

Use navigation only when the page needs it. If included, keep it simple: logo/wordmark left, a small set of links right.

Use pills only for compact metadata. Use icons only when they are functional or brand-owned.

## Markup Structure

Use semantic HTML5 elements. Put the primary page content in one `<main>` element. Structure major content groups as `<section>` elements with meaningful headings or accessible labels.

Use `<div>` only for layout wrappers or styling hooks when no semantic element fits. Avoid wrapper-heavy structures, deeply nested layout elements, and decorative DOM.

## CSS Reset

Always include a reset at the top of standalone generated CSS when not using `assets/mcmds.css`:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

After the reset, add spacing intentionally through component or section classes rather than relying on browser defaults.

## Digital Verification

Before finishing frontend work, check:

- The page follows the shared gutter and shell system.
- Light and dark appearances both remain legible.
- Major headings use tight tracking; body, metadata, and UI labels do not.
- Mobile layouts preserve readable type, visible contrast, and non-overlapping content.
- Cards, icons, heroes, and decorative elements are justified by content rather than used as defaults.
- If building or updating a local website or web app, use Codex's internal browser to verify the rendered UI.