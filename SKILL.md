---
name: mcmds
description: Apply Brett McMillin / MCM Design Co. design-system and brand-taste guidance across UI/UX, websites, product interfaces, print, presentations, reports, social graphics, editorial layouts, and other visual design channels. Use when the user asks for work to match Brett's design style, MCM Design Co., the mcmds skill, or his design system.
---

# mcmds

Use this skill to make generated work feel aligned with MCM Design Co.: editorial, image-led, restrained, culturally sharp, and built with product-design rigor. The system is channel-agnostic by default. Do not assume the output is a website or interface unless the task calls for that.

This is the single source of truth for MCM Design Co. and Dusty Times work. When a user asks for Dusty Times, DTDS, or Dusty Times Design System guidance, use this skill and apply the Dusty Times identity layer in `BRAND.md` and the Dusty Times logo assets in `assets/logos/`.

Across all channels, visible type should use sentence case unless the user explicitly defines another case for a specific artifact. Proper nouns, acronyms, and brand names may keep their correct casing, but never use all-uppercase styling, all-caps labels, or CSS such as `text-transform: uppercase` unless explicitly requested.

## Source Layers

- `DESIGN.md` defines the universal design system: color, typography, spacing, proportion, shape, depth, imagery, and reusable primitives.
- `BRAND.md` defines universal taste: creative judgment, restraint, rhythm, hierarchy, negative space, alignment, grid-breaking, imagery, and decision rules.
- `CHANNELS/*.md` defines application guidance for a specific medium or output channel.
- `assets/mcmds.css` is the reusable implementation asset for digital product, web, and HTML outputs.
- `assets/logos/*.png` contains Dusty Times identity artwork for Dusty Times outputs.

## How to Use

1. Always read `DESIGN.md` for universal foundations.
2. Always read `BRAND.md` for taste and decision-making.
3. Select the relevant channel file:
   - `CHANNELS/digital-product.md` for UI/UX, websites, web apps, dashboards, HTML/CSS, product surfaces, and interactive prototypes.
   - `CHANNELS/print.md` for print collateral, PDFs intended for print, posters, one-sheets, brochures, leave-behinds, and physical production.
   - `CHANNELS/presentation.md` for decks, pitch presentations, strategy presentations, slide reports, and speaker/leave-behind slide systems.
   - `CHANNELS/social-graphic.md` for social posts, campaign graphics, announcement tiles, thumbnails, and feed/carousel compositions.
4. If no channel file exists for the requested medium, apply `DESIGN.md` and `BRAND.md`, then make conservative medium-specific decisions.
5. If modifying an existing project, follow its established tokens, assets, accessibility patterns, and production constraints first, then apply MCM guidance where it fits.
6. For Dusty Times work, use this same system with the Dusty Times identity layer and official Dusty Times logo artwork.

## Conflict Rules

- `DESIGN.md` wins for universal measurable values and system primitives.
- `BRAND.md` wins for universal judgment calls.
- A channel file wins for medium-specific production requirements, such as CSS behavior, print bleed, slide density, export constraints, or social crop safety.
- Host project constraints win when a codebase, print vendor, slide template, or platform has hard requirements.

## Maintenance Contract

`DESIGN.md`, `BRAND.md`, and `CHANNELS/*.md` are source guidance.

`assets/mcmds.css` is a reusable implementation asset for the digital-product channel. When `DESIGN.md` changes measurable primitives such as color, typography, spacing, radius, or component treatment, review and update `assets/mcmds.css` so standalone HTML output stays aligned.

Do not regenerate implementation assets blindly. Preserve hand-tuned CSS unless the source guidance clearly supersedes it.

## Verification

Before finishing, verify the work against the correct layer:

- Universal: does it preserve MCM color, type, proportion, restraint, and image logic?
- Identity: if a logo appears, does it use the correct official artwork with enough contrast and clear space?
- Brand: does it make a clear creative decision instead of defaulting to generic layout conventions?
- Channel: does it satisfy the production requirements of the medium?
- Output: does it remain legible, aligned, and useful at the sizes or contexts where it will actually be consumed?
