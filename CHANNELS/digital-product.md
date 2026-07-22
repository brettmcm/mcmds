# Digital Product Channel

Use this channel for UI/UX, websites, web apps, dashboards, HTML/CSS, product surfaces, prototypes, and shareable static pages.

Read `DESIGN.md` and `BRAND.md` first. For MCMDS-specific, technical, artifact-led, or evidence-led work, also read `CREATIVE-DIRECTION.md`. This file translates those foundations into interactive digital work.

## Product Thesis

MCM digital products should feel compact, calm, and exact. Use clear hierarchy, deliberate pane proportions, muted supporting information, stable utilities, and just enough tonal containment to make the current task obvious.

Do not confuse product rigor with generic SaaS chrome. Avoid default card grids, oversized dashboard widgets, excessive iconography, broad accent color, and ornamental navigation. The interface should reveal the work, evidence, content, or decision rather than advertising its component system.

## Reusable Stylesheet

`CHANNELS/digital-product.md` owns the reusable CSS implementation asset at `../assets/mcmds.css`.

For standalone HTML or shareable static pages, prefer linking the reusable stylesheet at `../assets/mcmds.css` or copying `/Users/brettmcm/.codex/skills/mcmds/assets/mcmds.css` next to the generated page.

When generating standalone HTML inside the skill folder, include:

```html
<link rel="stylesheet" href="https://use.typekit.net/shq4xoc.css" />
<link rel="stylesheet" href="assets/mcmds.css" />
```

The Adobe Fonts kit loads Indivisible. The reusable stylesheet bundles Departure Mono for financial and technical data; host projects are responsible for loading Inter when exact interface rendering is required. Add only page-specific CSS for content-driven layout exceptions, imagery, or components not covered by the base stylesheet.

## Digital Color and Depth

Generated pages must define both light and dark palettes and use `prefers-color-scheme` unless the host app already provides a theme system. Prefer semantic variables such as `--bg`, `--surface`, `--ink`, `--muted`, `--tertiary`, `--line`, `--interaction`, and `--accent`. Keep interaction separate from the orange brand signal.

Use color and depth by role:

- Keep the primary canvas quiet and high contrast.
- Use surface shifts of roughly 3-8% to group controls, repeated objects, or a focused module.
- Use hairline rules and alignment before adding shadows.
- Reserve raised surfaces for overlays, floating utilities, menus, or objects that genuinely sit above the working plane.
- Default interaction and focus to pure black in light mode and pure white in dark mode. Let ordinary content use the duller ink role so these states remain unmistakable.
- Reserve orange or another signal color for brand emphasis, data semantics, progress, alerts, or a deliberately branded action. Do not color every interactive element.

Use `color-scheme: light dark`. Test foreground/background contrast, image overlays, borders, table rows, controls, and accent marks in both appearances.

## Product Typography

Use the role-based type system from `DESIGN.md`:

- Indivisible: brand expression, major display text, editorial leads, and large section turns.
- Inter: product UI, navigation, controls, dense lists, tables, forms, and long-form workspace reading.
- Departure Mono: identifiers, measurements, timestamps, coordinates, codes, technical notation, and system readouts.
- Departure Mono may also carry currency figures in dense pricing or ledger tables and their calculated totals. Keep general key metrics in Inter unless they are genuine technical readouts.

For standalone pages, include the Indivisible Adobe Fonts kit shown above. Leave Inter loading to the host project; `mcmds.css` loads the bundled Departure Mono file.

Editorial reference values:

- `h1`: `3.25rem`, `1.1` line height, `-0.04em` tracking, weight `500`
- `h2`: `2.25rem`, `1.1` line height, `-0.04em` tracking, weight `500`
- `h3`: `1.5rem`, `1.2` line height, normal tracking, weight `500`
- Lead paragraph: `34px`, `1.45` line height, `-0.02em` tracking
- Editorial body: `20px`, `1.55` line height, normal tracking

Product reference values:

- Product body and navigation: `13px` to `14px`, `1.35` to `1.5` line height, weight `400-500`
- Compact controls and labels: `12px` to `13px`, `1.2` to `1.4` line height, weight `500-600`
- Workspace headings: `20px` to `24px`, `1.25` to `1.4` line height, weight `500-600`
- Technical metadata: `10px` to `12px`, `1.2` to `1.4` line height, weight `400`

Create hierarchy through contrast and weight before increasing size. Primary text should carry the current task or decision, secondary text should explain or qualify it, and tertiary text should carry low-priority metadata. Do not make important information so muted that it becomes inaccessible.

Sentence case remains the default. Uppercase is allowed only for terse technical readouts, coordinates, codes, and artifact-derived labels when casing carries operational meaning. Do not use uppercase for ordinary navigation, buttons, headings, or metadata.

Do not scale font size directly with viewport width. Ensure text never overlaps imagery, controls, or adjacent panes when space contracts.

## Product Architecture

Establish one dominant working area. Supporting navigation, context, linked material, and utilities should remain available without competing with the current task.

Common regions:

- Primary navigation rail: narrow, stable, and hierarchical. Prefer a compact rounded surface using the same quiet surface role as comparable metric tiles; use the interaction color for its label and icon. Avoid accent bars and large filled tabs.
- Secondary context rail: related documents, nested navigation, history, or linked material; keep it quieter than the main workspace.
- Working pane: the largest and highest-contrast region; prioritize reading, editing, deciding, or acting.
- Utility rail or footer: persistent high-frequency actions placed at a predictable edge or corner.
- Evidence aperture: a bounded image, preview, product state, or artifact that helps orient the user or establishes the subject.

Use pane proportions to communicate priority. A product may be asymmetric without feeling unbalanced when each region has a clear role and shares deliberate edges. Avoid multiple equally loud columns.

Keep persistent navigation and the primary working pane on the same canvas by default. Introduce a different pane background only when the region has a meaningfully different task or elevation; use local surface fills for active navigation and metric tiles instead of splitting the whole window tonally.

Use stable outer gutters once and reuse them across comparable views. Within dense product workspaces, compact local padding such as `16px`, `20px`, `24px`, or `32px` is appropriate. Prefer flexbox for one-dimensional pane relationships and CSS grid for explicit two-dimensional tracks.

### Focused operational workspace

Use this pattern for quotes, pricing reviews, schedules, production summaries, and other short decision surfaces:

- Center one primary content column. Use `980px` as the preferred maximum width, with the same width and gutters for the header, main content, and footer or source note.
- Default to a single reading plane. Add navigation or secondary columns only when the information architecture requires them.
- Keep the canvas neutral. Remove accent color from rules, labels, links, and focus decoration unless color communicates a real semantic state or deliberate brand signal.
- Limit the visible type scale to roughly five roles and rely on weight, contrast, and spacing for hierarchy. Set summary values at medium weight rather than bold.
- Present key data as an open aligned row with shared hairline rules, not a set of boxes. Put secondary actions such as “View schedule” or “Print specs” directly below the relevant value as quiet text buttons.
- Collapse detailed schedules to the single date needed for the primary decision, then expose the full schedule through an accessible modal or disclosure.
- Format concise operational dates using the reader's locale; in American contexts prefer `Month DD` when the year is already established elsewhere.

## Product Archetypes

### Focused utility

Use for a brief, daily plan, task surface, ambient assistant, or single-purpose tool.

- Keep one primary task, summary, or focus statement near the top.
- Use compact grouped modules only where they improve scanning.
- Keep actions sparse and persistent at the bottom or edge.
- Use muted supporting copy with selective primary emphasis inside sentences.
- Favor a contained dark or neutral surface, small radii, and minimal navigation.

### Editorial system

Use when product content and identity should create a memorable first read.

- Pair one bounded image or artifact field with a precise working or index area.
- Allow one oversized Indivisible title or image to lead; keep navigation and controls compact.
- Use Departure Mono for genuine technical metadata, indexing, measurement, or archival notation.
- Keep signal color scarce and operational.
- Confine blur, rotation, measurement marks, and atmospheric treatments to the expressive region so usability stays intact.

### Knowledge workspace

Use for documents, research, notes, standards, asset libraries, or linked knowledge.

- Use hierarchical navigation with a dominant editor or reading pane.
- Keep linked notes, metadata, or utilities in a quieter secondary region.
- Use Inter for dense navigation and long-form workspace reading.
- Prefer open document structure, thin rules, and alignment over card containment.
- Preserve stable locations for account, creation, and window-level utilities.

## Components and Containment

Prefer low-friction components: text links, hairline rules, concise metadata, restrained tables, quiet buttons, subtle fields, and functional icons.

- Use cards or panels for repeated objects, contained tools, modular information, or framed evidence—not as page-level architecture.
- Use small radii consistently: `4px` for technical objects, `6px` for controls and panels, and around `8px` for imagery.
- Use pills only for compact metadata, status, or tightly bounded actions.
- Use icons only when functional or brand-owned. Pair unfamiliar icons with text or an accessible label.
- Keep icon buttons visually quiet at rest and clearly interactive on hover and focus.
- Use restrained fields with a subtle but visible surface tint. Do not rely on bottom-border-only inputs.
- Keep tables structural. If a table cannot remain readable on mobile, transform each row into a labeled stack instead of forcing horizontal scrolling where possible.
- Keep table and list canvases continuous with the window or working pane unless grouping materially improves comprehension. Column-header rows do not need enclosing top or bottom dividers when alignment already supplies structure.
- Use compact full-width rows and super-subtle dividers between line items. Omit column headers when the section title and alignment make every value self-evident; retain them when interactive or unfamiliar columns need explanation.
- Group related line items together. Use text section titles inside a continuous pricing review instead of separate card surfaces or unnecessary intermediate subtotals.
- Stack subtotals and grand totals as full-width rule-separated line items. Use a thin rule for the grand-total transition, never a heavy black divider. Separate a materially different calculation group with generous whitespace—typically `72px` to `96px`—rather than thick chrome.
- Align values inside repeated controls to the same leading inset. Reserve a stable trailing region for disclosure indicators, steppers, or menu glyphs so label length never shifts the starting edge.
- Keep numeric table inputs compact and vertically aligned with surrounding values. When the column header supplies the visible label, keep an accessible name with `aria-label` and hide redundant field labels. Hide native number steppers when direct entry is the intended interaction.

## Dialogs and Secondary Detail

Use native `<dialog>` where practical for schedules, specifications, and other secondary reference material.

- Keep the dialog title bar sticky with an opaque background and a bottom hairline so scrolling content never shows through it.
- Let the dialog body scroll independently and keep repeated reference rows compact; `8px` vertical row padding is a useful starting point.
- Use a quiet text or icon close control with an accessible name, restore focus to the trigger, support Escape, and provide a clear backdrop.
- Keep secondary information out of the primary page flow when it would compete with the main review task.

## Interaction States

Every interactive component must define a complete and consistent state model.

- Rest: quiet and legible; do not make every control look active.
- Hover: use a small surface, border, or text-color shift. Avoid movement that destabilizes dense layouts.
- Focus: show a persistent, high-contrast focus indicator that is not dependent on color alone.
- Selected navigation: use a compact rounded surface and interaction-colored content; keep the surrounding pane quiet.
- Selected table or list row: invert the canvas and all row content as one atomic state—black with white content in light mode, white with black content in dark mode. Embedded fields, menus, icons, placeholders, dividers, and secondary labels must inherit the selected context immediately, without delayed per-cell updates.
- Prefer the platform's native semantic selection and accent mechanisms when they provide atomic background/foreground inversion. Avoid app-wide foreground overrides or asynchronous row introspection that prevents embedded controls from inheriting selected-content colors.
- Disabled: reduce emphasis while preserving legibility; remove pointer cues and prevent interaction.
- Loading: preserve component dimensions and communicate progress without replacing the whole interface with decoration.
- Empty: explain what is absent, why it matters, and the most useful next action. Do not fill empty states with generic illustration.
- Error: state what failed, preserve user input or context, and provide a recovery action. Use alert color sparingly and pair it with text or an icon.

Motion should clarify state changes, hierarchy, or spatial relationships. Keep transitions short and honor `prefers-reduced-motion`.

## Responsive Behavior

Responsive product design should preserve task priority rather than shrink every pane proportionally.

- Collapse utility and secondary context regions before compromising the working pane.
- Convert persistent side rails into drawers, sheets, or explicit toggles with clear labels and focus management.
- Preserve the active location and current task when navigation collapses.
- Stack focused modules in reading order and keep primary actions near the relevant content.
- Let dense lists wrap or truncate intentionally; expose the full value through expansion, title text, or a detail view when needed.
- Keep touch targets at least `44px` where the interface is expected to support touch, even when the visible glyph remains small.
- Test at narrow mobile widths, medium split-view widths, and wide desktop widths.

## Brand and Editorial Pages

For portfolio, case study, about, or brand pages:

- Start with a strong first-viewport signal: image-led, typographic, artifact-led, or a compact data summary.
- Make the subject obvious in the first viewport.
- Use sparse section titles, confident statements, and a few sharp paragraphs.
- Structure capabilities or services as quiet list groups rather than colorful feature cards.
- Use a small orange rule or mark to punctuate important transitions.

For project status pages, reports, dashboards, and operational tools, prioritize clarity. Lead with a title, snapshot/date metadata, and top-level totals. Use clean tables instead of decorative chart widgets unless a chart adds real value. Preserve density where repeated use matters.

## Markup and Accessibility

Use semantic HTML5 elements. Put the primary page content in one `<main>` element. Structure major content groups as `<section>` elements with meaningful headings or accessible labels. Use `<nav>`, `<aside>`, `<header>`, and `<footer>` only when their regions have the corresponding semantic role.

Use `<button>` for actions and `<a>` for navigation. Provide accessible names for icon-only controls. Maintain logical heading order, keyboard reachability, visible focus, sufficient contrast, and a reading order that still makes sense when multi-pane layouts collapse.

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

- One working area is visually dominant and supporting panes are appropriately quieter.
- The role-based fonts match the content: display, product UI, or technical metadata.
- Sentence case is preserved except for the narrow technical uppercase exception.
- Primary, secondary, and tertiary text remain distinguishable and accessible.
- Light and dark appearances both remain legible.
- Hover, focus, selected, disabled, loading, empty, and error states are designed.
- Mobile layouts preserve task priority, reading order, contrast, and non-overlapping content.
- Cards, icons, imagery, and expressive treatments are justified by content rather than used as defaults.
- If building or updating a local website or web app, use Codex's internal browser to verify the rendered UI.
