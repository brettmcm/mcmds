---
name: mcmds
description: Apply Brett McMillin / MCM Design Co. design-system and brand-taste guidance across UI/UX, websites, product interfaces, print, presentations, reports, social graphics, editorial layouts, and other visual design channels. Use when the user asks for work to match Brett's design style, MCM Design Co., the mcmds skill, or his design system.
---

# mcmds

Use this skill to make generated work feel aligned with MCM Design Co.: editorial, image-led, restrained, culturally sharp, and built with product-design rigor. The system is channel-agnostic by default. Do not assume the output is a website or interface unless the task calls for that.

This is the single source of truth for MCM Design Co. and Dusty Times work. When a user asks for Dusty Times, DTDS, or Dusty Times Design System guidance, use this skill and apply the Dusty Times identity layer in `BRAND.md` and the Dusty Times logo assets in `assets/logos/`.

Use sentence case by default for visible text, including headings, labels, buttons, captions, slide titles, report titles, and social graphics. Terse technical readouts, coordinates, codes, and artifact-derived labels may use uppercase when casing carries operational meaning. Do not use uppercase as a general style for navigation, buttons, headings, or ordinary metadata.

For digital product work, use a surface-first hierarchy. Prefer subtle tonal relationships, text contrast, compact grouping, and stable placement over large type jumps or persistent divider lines. Use font size as the last hierarchy lever, and keep most interface text within a tight range.

## Source layers

- `DESIGN.md` defines the universal design system: color, typography, spacing, proportion, shape, depth, imagery, and reusable primitives.
- `BRAND.md` defines universal taste: creative judgment, restraint, rhythm, hierarchy, negative space, alignment, grid-breaking, imagery, and decision rules.
- `CREATIVE-DIRECTION.md` defines the MCMDS signal/evidence art-direction layer: technical material detail, dark operational atmosphere, controlled signal color, document-grid influence, and prompt-ready visual guidance.
- `CHANNELS/*.md` defines application guidance for a specific medium or output channel.
- `assets/mcmds.css` is the reusable implementation asset for digital product, web, and HTML outputs.
- `assets/logos/*.png` contains Dusty Times identity artwork for Dusty Times outputs.

## How to use

1. Always read `DESIGN.md` for universal foundations.
2. Always read `BRAND.md` for taste and decision-making.
3. Read `CREATIVE-DIRECTION.md` when the work should feel specifically MCMDS, Signal, studio-system, technical, artifact-led, evidence-led, or visually aligned with Brett's saved MCMDS references. Use it as an art-direction layer under the measurable rules in `DESIGN.md` and the taste rules in `BRAND.md`.
4. Select the relevant channel file:
   - `CHANNELS/digital-product.md` for UI/UX, websites, web apps, dashboards, focused operational reviews, HTML/CSS, product surfaces, and interactive prototypes.
   - `CHANNELS/print.md` for print collateral, PDFs intended for print, posters, one-sheets, brochures, leave-behinds, and physical production.
   - `CHANNELS/presentation.md` for decks, pitch presentations, strategy presentations, slide reports, and speaker/leave-behind slide systems.
   - `CHANNELS/social-graphic.md` for social posts, campaign graphics, announcement tiles, thumbnails, and feed/carousel compositions.
5. If no channel file exists for the requested medium, apply `DESIGN.md`, `BRAND.md`, and `CREATIVE-DIRECTION.md` when relevant, then make conservative medium-specific decisions.
6. If modifying an existing project, follow its established tokens, assets, accessibility patterns, and production constraints first, then apply MCM guidance where it fits.
7. For Dusty Times work, use this same system with the Dusty Times identity layer and official Dusty Times logo artwork.

## Conflict rules

- `DESIGN.md` wins for universal measurable values and system primitives.
- `BRAND.md` wins for universal judgment calls.
- `CREATIVE-DIRECTION.md` wins for MCMDS-specific visual atmosphere and influence translation only when it does not conflict with the role-based typography and casing rules, spacing, radius, containment, accessibility, or channel production requirements.
- A channel file wins for medium-specific production requirements, such as CSS behavior, print bleed, slide density, export constraints, or social crop safety.
- Host project constraints win when a codebase, print vendor, slide template, or platform has hard requirements.

## Maintenance contract

`DESIGN.md`, `BRAND.md`, `CREATIVE-DIRECTION.md`, and `CHANNELS/*.md` are source guidance.

`assets/mcmds.css` is a reusable implementation asset for the digital-product channel. When `DESIGN.md` changes measurable primitives such as color, typography, spacing, radius, or component treatment, review and update `assets/mcmds.css` so standalone HTML output stays aligned.

Do not regenerate implementation assets blindly. Preserve hand-tuned CSS unless the source guidance clearly supersedes it.

Use mymind as the live visual reference layer, not a mirrored Markdown archive. Do not pull from mymind automatically for every MCMDS task. Use MCMDS alone by default for applying established design rules, production cleanup, spacing, type, layout, contrast, responsiveness, and known channel guidance. Pull from mymind when the task needs fresh taste evidence, visual inspiration, concept exploration, moodboarding, calibration against saved visual preferences, or evolution of the system. When pulling mymind for MCMDS calibration or refresh work, prefer the `MCMDS` Space as the primary reference source before broader mymind searches. When a repeated pattern from mymind proves durable, promote it into `DESIGN.md`, `BRAND.md`, `CREATIVE-DIRECTION.md`, or the relevant `CHANNELS/*.md` file instead of storing a separate vault taste layer.

## Verification

Before finishing, verify the work against the correct layer:

- Universal: does it preserve MCM color, role-based type, proportion, restraint, and image logic?
- Creative direction: when MCMDS-specific direction is relevant, does it use signal color, technical material detail, dark operational atmosphere, and evidence-led imagery without violating the casing, spacing, radius, or containment rules?
- Identity: if a logo appears, does it use the correct official artwork with enough contrast and clear space?
- Brand: does it make a clear creative decision instead of defaulting to generic layout conventions?
- Channel: does it satisfy the production requirements of the medium?
- Output: does it remain legible, aligned, and useful at the sizes or contexts where it will actually be consumed?
