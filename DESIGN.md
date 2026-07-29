---
version: alpha
name: MCM Design Co.
description: A channel-agnostic design system for MCM Design Co. visual work across digital product, web, print, presentation, social, editorial, and graphic design applications.
colors:
  dark-canvas: "#000000"
  dark-surface-subtle: "#050607"
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

MCM Design Co. uses a restrained editorial system that can move across channels: digital product, websites, print, presentations, reports, social graphics, editorial layouts, and branded artifacts. The system should feel refined, grounded, culturally aware, and practical. It should avoid generic SaaS defaults, decorative portfolio maximalism, and cold technical layout that does not reveal subject matter, material, state, proof, or decision.

This file defines the universal system. It should not carry channel-specific production mechanics. Use `CHANNELS/*.md` for medium-specific translation, such as CSS implementation, print bleed, slide layout, or social crop behavior.

## Colors

The palette is built from pure black and white endpoints, quiet cool secondary grays, and a warm orange accent. Use the palette as a system of roles, not just fixed screen colors.

Dark roles:

- Canvas: `#000000`
- Subtle surface: `#050607`
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

Use orange as the primary MCM brand signal, not the default interaction color and not a theme. It is best for short rules, small marks, critical emphasis, data semantics, or a focused branded call to action. It should rarely dominate a composition.

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

On compact product and operational surfaces, keep most text inside a narrow `12px` to `16px` band. Use four practical bands by default: technical metadata at `11px` to `12px`, secondary UI at `12px` to `13px`, primary UI and content at `14px` to `16px`, and a workspace or page identity at `18px` to `24px`. These bands are ranges, not a requirement to use four different sizes in every view.

Establish product hierarchy through surface relationships and text contrast first, weight second, spacing third, and size last. Most interfaces should use only two or three recurring text sizes plus a restrained workspace title. Keep summary values at regular or medium weight unless stronger emphasis communicates a real state or decision. Large editorial display roles remain available for brand pages, campaigns, case studies, and genuine section turns; they are not the product default.

Use sentence case for visible text unless a channel or brand artifact has a deliberate reason to use another case. Uppercase is allowed for terse technical readouts, coordinates, codes, and artifact-derived labels when casing carries operational meaning. Do not use uppercase as a general style for navigation, buttons, headings, or ordinary metadata. Do not add periods to titles, labels, or compact metadata unless they are complete sentences.

## Layout

Use a shared alignment system for each composition. The exact grid changes by channel, but the principle stays stable: major content should share clear edges, local columns should not create accidental competing systems, and width changes should be intentional.

Headers, main content, and footers or source notes that belong to one reading surface should share the same maximum width, gutters, and leading edge. A focused operational page may use a narrower centered workspace than an editorial page; `980px` is the preferred digital reference width for that pattern.

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

Depth is achieved through tonal surfaces, spacing, contrast, material, paper, imagery, and occasional rules rather than heavy shadows or decorative effects. In physical media, paper stock, ink density, and image texture can carry depth. In digital product work, adjacent tonal surfaces should do most of the structural work.

Treat borders and dividers as exceptions, not default architecture. Add a rule only when surface relationships, spacing, alignment, and text contrast cannot communicate the boundary, or when repeated row alignment genuinely requires it. Tables, timelines, calculation transitions, sticky headers, and explicit comparison structures are valid uses. Avoid routine vertical dividers.

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

## Components and Objects

Across channels, prefer low-friction objects: text links, concise metadata, restrained tables, quiet captions, small marks, subtle tonal surfaces, and simple containers. Use containment only when it improves comprehension.

Cards, panels, frames, boxes, and image containers should not become the default architecture. They are useful for repeated objects, modular information, physical cards, contained tools, or intentionally framed artifacts.

For summary data that does not need containment, allow individual key-data items to sit side by side in an open group. Inside every item, stack the label, value, and secondary text action in that order. Use the group-level stacked variant when available width or longer content makes a vertical sequence clearer. Reveal secondary specifications, detailed schedules, and supporting reference material through a nearby text action and an accessible disclosure or modal instead of placing all detail in the primary scan path.

When a small accent mark is used as a bullet or source marker beside text, vertically center the mark with the associated type. The mark should feel optically attached to the line it labels, not pinned to the top of the row.

## Do's and Don'ts

- Do let image, type, spacing, and contrast carry the experience.
- Do use tight negative letter spacing for major large headlines.
- Do keep body, metadata, captions, UI labels, and compact text at normal tracking.
- Do keep color roles consistent across channels.
- Do preserve the same design personality in light, dark, print, and presentation contexts.
- Don't default to cards, hero marquees, decorative gradients, ornamental vectors, generic icon grids, or visible grid overlays.
- Don't stretch editorial copy across the full available field.
- Don't use orange as a broad theme.
- Don't treat each channel as a separate brand.
