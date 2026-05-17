---
version: alpha
name: MCM Design Co.
description: A channel-agnostic design system for MCM Design Co. visual work across digital product, web, print, presentation, social, editorial, and graphic design applications.
colors:
  dark-canvas: "#080a09"
  dark-surface: "#0f1110"
  dark-surface-raised: "#151715"
  dark-ink: "#f1f1ec"
  dark-muted: "#8f8f8a"
  dark-tertiary: "#5f625e"
  dark-accent: "#e04f2f"
  dark-success: "#6f8b6a"
  dark-alert: "#d85a36"
  light-canvas: "#f4f1ea"
  light-surface: "#ebe7dd"
  light-surface-raised: "#fffaf0"
  light-ink: "#121411"
  light-muted: "#6f706a"
  light-tertiary: "#9a978d"
  light-accent: "#d84e31"
  light-success: "#5f7d58"
  light-alert: "#c84f34"
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

MCM Design Co. uses a restrained editorial system that can move across channels: digital product, websites, print, presentations, reports, social graphics, editorial layouts, and branded artifacts. The system should feel refined, grounded, culturally aware, and practical. It should avoid generic SaaS defaults, decorative portfolio maximalism, and cold technical layout.

This file defines the universal system. It should not carry channel-specific production mechanics. Use `CHANNELS/*.md` for medium-specific translation, such as CSS implementation, print bleed, slide layout, or social crop behavior.

## Colors

The palette is built from high-contrast neutrals, quiet secondary grays, and a warm orange accent. Use the palette as a system of roles, not just fixed screen colors.

Dark roles:

- Canvas: `#080a09`
- Surface: `#0f1110`
- Raised surface: `#151715`
- Ink: `#f1f1ec`
- Muted text: `#8f8f8a`
- Tertiary text: `#5f625e`
- Accent: `#e04f2f`
- Success: `#6f8b6a`
- Alert: `#d85a36`

Light roles:

- Canvas: `#f4f1ea`
- Surface: `#ebe7dd`
- Raised surface: `#fffaf0`
- Ink: `#121411`
- Muted text: `#6f706a`
- Tertiary text: `#9a978d`
- Accent: `#d84e31`
- Success: `#5f7d58`
- Alert: `#c84f34`

Use orange as a signal, not a theme. It is best for short rules, small marks, active states, critical emphasis, or focused calls to action. It should rarely dominate a composition.

Light and dark expressions should feel like the same system under different ambient light. Light work should not become a soft beige brand. Dark work should not become a generic technical dashboard.

## Typography

Prefer Indivisible as the primary type family:

```text
"indivisible", "Indivisible", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Use channel files to translate type into CSS `rem`, print points, slide sizes, or platform-specific units.

Core hierarchy:

- Display: major page, cover, poster, campaign, or section-turn text. Use tight negative tracking when large enough.
- Headline: section titles and major content headings. Tight tracking is appropriate at larger sizes; normal tracking is better for smaller headings.
- Lead: measured editorial copy or prominent explanatory text. Slight negative tracking may work at large sizes.
- Body: readable long-form text. Use normal tracking and controlled measure.
- Label: metadata, status, captions, annotations, navigation, and compact descriptors. Use normal tracking.

Major large headlines may use negative letter spacing. Body copy, metadata, UI labels, tables, buttons, captions, annotations, and compact production text should use normal letter spacing.

Use sentence case for visible text unless a channel or brand artifact has a deliberate reason to use another case. Do not add periods to titles, labels, or compact metadata unless they are complete sentences.

## Layout

Use a shared alignment system for each composition. The exact grid changes by channel, but the principle stays stable: major content should share clear edges, local columns should not create accidental competing systems, and width changes should be intentional.

Universal spacing rhythm:

- Micro spacing: `4px`
- Tight spacing: `8px` to `12px`
- Standard stack: `24px`
- Section or group separation: `48px` to `72px`
- Major editorial separation: `112px`
- Wide editorial gaps: `144px`
- Comfortable text measure: `55-70ch`

Use generous negative space for pace and emphasis, but keep related information visibly grouped. If a composition feels too dense, remove low-value content before adding decorative space.

## Elevation & Depth

Depth is achieved through tonal surfaces, spacing, contrast, material, paper, imagery, and thin rules rather than heavy shadows or decorative effects. In physical media, paper stock, ink density, and image texture can carry depth. In digital media, tonal surfaces and borders should do most of the work.

Prefer horizontal structure and whitespace over vertical dividers. Use vertical rules only when they clarify a specific comparison, timeline, table, or production structure.

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

Across channels, prefer low-friction objects: text links, thin rules, concise metadata, restrained tables, quiet captions, small marks, and simple containers. Use containment only when it improves comprehension.

Cards, panels, frames, boxes, and image containers should not become the default architecture. They are useful for repeated objects, modular information, physical cards, contained tools, or intentionally framed artifacts.

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
