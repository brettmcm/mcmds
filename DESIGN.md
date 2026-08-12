---
version: alpha
name: MCM Design Co.
description: A channel-agnostic design system for MCM Design Co. visual work across digital product, web, print, presentation, social, editorial, and graphic design applications.
colors:
  dark-canvas: "#000000"
  dark-surface-subtle: "#090b0e"
  dark-surface: "#0b0d10"
  dark-surface-raised: "#14171c"
  dark-ink: "#d1d5db"
  dark-interaction: "#ffffff"
  dark-muted: "#9299a3"
  dark-tertiary: "#626b77"
  dark-accent: "#ff4b22"
  dark-success: "#32d46d"
  dark-alert: "#ff4d2e"
  light-canvas: "#ffffff"
  light-surface-subtle: "#f7f8fa"
  light-surface: "#f2f4f7"
  light-surface-raised: "#ffffff"
  light-ink: "#30343b"
  light-interaction: "#000000"
  light-muted: "#626b77"
  light-tertiary: "#9299a3"
  light-accent: "#e63e18"
  light-success: "#16803c"
  light-alert: "#df2f16"
  signal-lime: "#e7ff2a"
  signal-cyan: "#55d6ff"
  signal-pink: "#ff3d8d"
typography:
  display:
    family: '"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weight: 500
    lineHeight: 1.05-1.15
    letterSpacing: -0.04em
  headline:
    family: '"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weight: 500
    lineHeight: 1.1-1.2
    letterSpacing: -0.04em to 0
  lead:
    family: '"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weight: 400
    lineHeight: 1.35-1.5
    letterSpacing: -0.02em to 0
  body:
    family: '"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weight: 400
    lineHeight: 1.45-1.65
    letterSpacing: 0
  label:
    family: '"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weight: 500
    lineHeight: 1.1-1.3
    letterSpacing: 0
  ui:
    family: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weight: 400-600
    lineHeight: 1.3-1.5
    letterSpacing: 0
  mono:
    family: '"Departure Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace'
    weight: 400
    lineHeight: 1.2-1.4
    letterSpacing: 0
spacing:
  micro: 4px
  xs: 8px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 72px
  xxl: 112px
  editorial-gap: 144px
  copy-measure: 55-70ch
rounded:
  minimal: 4px
  standard: 6px
  image: 8px
  full: 999px
---

# MCM Design Co. Design System

## Overview

MCM Design Co. uses one restrained system across media. Scope is its clearest current expression: a quiet field, compact hierarchy, decisive contrast, evidence over decoration, and structure that appears only where it helps. Translate that judgment to the medium; do not make every output resemble an interface.

Minimalism is the default, not a finishing pass. Start with fewer words, fewer objects, fewer sections, and fewer visible states than the brief appears to invite. Add only what comprehension or use proves necessary.

This file defines the universal system. It should not carry channel-specific production mechanics. Use `CHANNELS/*.md` for medium-specific translation, such as CSS implementation, print bleed, slide layout, or social crop behavior.

## Colors

The palette is built from pure black and white endpoints, quiet cool secondary grays, and a warm orange accent. Use the palette as a system of roles, not just fixed screen colors.

Dark roles:

- Canvas: `#000000`
- Subtle surface: `#090b0e`
- Surface: `#0b0d10`
- Raised surface: `#14171c`
- Ink: `#d1d5db`
- Interaction: `#ffffff`
- Muted text: `#9299a3`
- Tertiary text: `#626b77`
- Accent: `#ff4b22`
- Success: `#32d46d`
- Alert: `#ff4d2e`

Light roles:

- Canvas: `#ffffff`
- Subtle surface: `#f7f8fa`
- Surface: `#f2f4f7`
- Raised surface: `#ffffff`
- Ink: `#30343b`
- Interaction: `#000000`
- Muted text: `#626b77`
- Tertiary text: `#9299a3`
- Accent: `#e63e18`
- Success: `#16803c`
- Alert: `#df2f16`

Use the appearance-dependent interaction endpoint—pure white in dark mode and pure black in light mode—for controls, focus, active navigation, and selected content when maximum state contrast is needed. Keep ordinary content on the duller ink role so interactive emphasis remains distinct.

Use orange as the primary MCM brand signal, not the default interaction color and not a theme. It is best for compact non-linear marks, critical emphasis, data semantics, or a focused branded call to action. It should rarely dominate a composition.

Never render orange as a bar, rule, stripe, rail, divider, underline, edge strip, progress strip, or transition line. This prohibition applies across interfaces, websites, print, presentations, documents, social graphics, editorial work, motion, and generated imagery. Use spacing, alignment, tonal contrast, type, imagery, or a compact non-linear semantic mark instead. Functional charts and status systems may use orange data marks, but not decorative linear brand accents.

MCMDS-specific work may use a small secondary signal palette when the subject benefits from technical, operational, or atmospheric color:

- Acid lime: `#e7ff2a` for status, performance, energy, power, or system-readout emphasis.
- Screen cyan: `#55d6ff` for screen glow, cold electronic atmosphere, or ambient light.
- Signal pink: `#ff3d8d` for contained poster, event, or image-treatment accents.

These secondary accents are subordinate to the universal palette. Use one accent family at a time unless designing a genuine data/status system. Keep signal color scarce, functional, and below roughly 5-12% of the composition in most work.

Light and dark expressions should feel like the same system under different ambient light. Use true white and true black for canvas and interaction endpoints; use slightly subdued cool-neutral ink for ordinary content. The subtle surface sits between canvas and the standard object surface so panes and grouped regions can be expressed without borders. When an intermediate neutral needs a slight tint, keep it cool and blue-gray rather than beige, cream, brown, olive, or otherwise warm. Dark work may lean more technical for MCMDS-specific work, but it should still reveal subject matter, material, state, proof, or decision rather than becoming a generic sci-fi dashboard.

## Typography

Use a role-based type system rather than one family for every job.

Display and brand family:

```text
"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Product interface family:

```text
"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Technical metadata family:

```text
"Departure Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace
```

Use Indivisible for brand expression, major display text, editorial leads, and large section turns. Use Inter for product UI, navigation, controls, dense content, and long-form workspace reading. Use Departure Mono for identifiers, measurements, timestamps, coordinates, codes, technical notation, system readouts, and currency figures in dense pricing or ledger tables. It may also carry calculated financial subtotals and totals when they belong to the same tabular system. Keep general summary metrics and key data values in the interface family unless they are genuine technical readouts. Do not use monospace merely to make an interface feel technical.

Use channel files to translate type into CSS `rem`, print points, slide sizes, or platform-specific units.

Core hierarchy:

- Display: major page, cover, poster, campaign, or section-turn text. Use tight negative tracking when large enough.
- Headline: section titles and major content headings. Tight tracking is appropriate at larger sizes; normal tracking is better for smaller headings.
- Lead: measured editorial copy or prominent explanatory text. Slight negative tracking may work at large sizes.
- Body: readable long-form text. Use normal tracking and controlled measure.
- Label: metadata, status, captions, annotations, navigation, and compact descriptors. Use normal tracking.
- Product UI: compact navigation, controls, lists, dense content, and workspace reading. Default to `13px` to `16px`, `1.3` to `1.5` line height, and normal tracking.
- Technical metadata: terse identifiers, measurements, timestamps, coordinates, codes, and system readouts. Default to `10px` to `12px`, normal tracking, and enough contrast to remain legible.

Major large headlines may use negative letter spacing. Body copy, metadata, UI labels, tables, buttons, captions, annotations, and compact production text should use normal letter spacing.

On compact working surfaces, keep most text inside a narrow `11px` to `14px` band: `10-11px` for indices and terse metadata, `12px` for secondary information, and `13-14px` for primary content and controls. Workspace identity and major titles may sit around `20-27px`. These are practical ranges, not a requirement to use every size.

Establish product hierarchy through surface relationships and text contrast first, weight second, spacing third, and size last. Most interfaces should use only two or three recurring text sizes plus a restrained workspace title. Keep summary values at regular or medium weight unless stronger emphasis communicates a real state or decision. Large editorial display roles remain available for brand pages, campaigns, case studies, and genuine section turns; they are not the product default.

Use sentence case for visible text unless a channel or brand artifact has a deliberate reason to use another case. Uppercase is allowed for terse technical readouts, coordinates, codes, and artifact-derived labels when casing carries operational meaning. Do not use uppercase as a general style for navigation, buttons, headings, or ordinary metadata. Do not add periods to titles, labels, or compact metadata unless they are complete sentences.

## Layout

### Content budget

Before composing, reduce the material.

- One primary idea, task, or decision per field.
- One heading level by default.
- One short supporting passage at most; omit it when the subject is self-evident.
- No automatic eyebrow, index, caption, description, or metadata stack.
- No section made only to explain another section.
- No repeated principle stated in heading, body, and label.
- No multi-variant showcase unless comparison is the task.

These are starting limits, not quotas. Use even less when possible.

Use a shared alignment system for each composition. The exact grid changes by channel, but the principle stays stable: major content should share clear edges, local columns should not create accidental competing systems, and width changes should be intentional.

Elements that belong to one reading surface should share gutters and a leading edge. Interactive work defaults to a full-bleed canvas with fluid `20-44px` gutters. Use a maximum width only when reading measure or task focus needs one. Print, slides, and graphics should interpret “full-bleed field” as a compositional idea, not a CSS rule.

Universal spacing rhythm:

- Micro spacing: `4px`
- Tight spacing: `8px` to `12px`
- Standard stack: `24px`
- Section or group separation: `48px` to `72px`
- Major editorial separation: `112px`
- Wide editorial gaps: `144px`
- Comfortable text measure: `55-70ch`

Use generous negative space for editorial pace and emphasis, but keep related information visibly grouped. Product surfaces should usually rely on compact local gaps—commonly `4px`, `8px`, `12px`, `16px`, and `24px`—and reserve `48px` or more for meaningful changes in task or region. If a composition feels too dense, remove low-value content before adding decorative space.

## Elevation & Depth

Depth is achieved through tonal surfaces, spacing, contrast, material, paper, imagery, and occasional rules rather than heavy shadows or decorative effects. Reserve shadows for real floating layers such as drawers, menus, dialogs, and lifted physical artifacts.

Default to no borders or dividers. First try space, alignment, type contrast, surface tone, or object placement. Add a rule only when removing it creates a real scanning or comprehension failure. Do not use rules to decorate rhythm, announce every section, or make sparse work feel finished. Selection should be a surface event, not a border event.

## Shapes

The shape language is modest and tight:

- Minimal radius: `4px`
- Standard UI/object radius: `6px`
- Image radius: around `8px`
- Full radius: only for compact tags, pills, or status markers

Do not mix unrelated radius languages in the same piece. Square or lightly rounded forms should feel intentional, not accidental.

## Imagery

Use real or generated raster imagery when imagery helps reveal the subject, proof, material, person, place, product, or mood. Favor atmospheric but legible photography with natural texture, shadow, and depth.

Do not use generic abstract vector art as a substitute for subject matter. Do not crop important subject matter so aggressively that the piece loses meaning. For personal/about content, black-and-white or textured image treatment is appropriate.

## Objects

Across channels, prefer low-friction objects: text links, concise metadata, restrained tables, quiet captions, small marks, subtle tonal surfaces, and simple containers. Use containment only when it improves comprehension.

Cards, panels, frames, boxes, and image containers should not become the default architecture. Start with an open field, rows, groups, and whitespace. Add containment only for a bounded summary, evidence object, floating layer, physical artifact, or genuinely modular tool.

Repeated records should usually be quiet rows without routine separators. Resting states stay calm; hover, focus, selection, context, and direct manipulation reveal the necessary controls. Strong selection may invert the entire object. Consecutive selections may merge visually.

Detail should preserve place. In interactive work, prefer inline editing, compact popovers, or an edge-anchored inspector over routing away from the working field. In static work, use notes, captions, insets, or appendices without fragmenting the main composition.

For summary data that does not need containment, allow individual key-data items to sit side by side in an open group. Inside every item, stack the label, value, and secondary text action in that order. Use the group-level stacked variant when available width or longer content makes a vertical sequence clearer. Reveal secondary specifications, detailed schedules, and supporting reference material through a nearby text action and an accessible disclosure or modal instead of placing all detail in the primary scan path.

When a small accent mark is used as a bullet or source marker beside text, vertically center the mark with the associated type. The mark should feel optically attached to the line it labels, not pinned to the top of the row.

## Do's and Don'ts

- Do let image, type, spacing, and contrast carry the experience.
- Do use tight negative letter spacing for major large headlines.
- Do keep body, metadata, captions, UI labels, and compact text at normal tracking.
- Do keep color roles consistent across channels.
- Do preserve the same design personality in light, dark, print, and presentation contexts.
- Do remove at least one layer of text, structure, or explanation from the obvious first draft.
- Don't default to cards, hero marquees, decorative gradients, ornamental vectors, generic icon grids, or visible grid overlays.
- Don't stretch editorial copy across the full available field.
- Don't use orange as a broad theme.
- Don't treat each channel as a separate brand.
- Don't produce a catalog of components, principles, states, or variants when one composed example can prove the direction.
