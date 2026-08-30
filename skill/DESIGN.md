# MCMDS interface reference

Generated from the code-owned design system. Use the package and manifest for implementation; use the published Figma library for visual composition.

## Required package

Install `@brettmcm/mcmds` and import `@brettmcm/mcmds/styles.css`. Compose exported components before adding product-local UI.

## Visual rules

- One continuous canvas; use surfaces for hover, selection, bounded summaries, and floating layers.
- Inter is UI, Indivisible is restrained display, and Departure Mono is genuine technical metadata.
- Prefer direct rows over cards, surface changes over borders, and contextual actions over permanent chrome.
- Orange is semantic and rare; never use it as a rail, rule, stripe, underline, or edge accent.
- Shared spacing is 4, 8, 12, 16, 24, 36, 48, and 72px. Controls are 36px; compact rows are 58px.
- Verify light, dark, narrow, keyboard focus, selection, and reduced motion.

## Shared components

- **MCMProvider** — Theme and system boundary.
- **Workspace** — Continuous product canvas with the shared gutter.
- **Stack** — Vertical token-spaced layout.
- **Inline** — Horizontal token-spaced layout.
- **Button** — Neutral, tonal, primary, or destructive action.
- **IconButton** — Compact accessible icon action.
- **Field** — Label, control, description, and error composition.
- **Input** — Single-line text input.
- **Select** — Radix-backed option selection.
- **Textarea** — Multi-line input.
- **Checkbox** — Boolean selection control.
- **Radio** — Single choice within a group.
- **Tabs** — Surface-selected view navigation without an underline.
- **KeyData** — Compact label, value, and secondary fact.
- **KeyDataGroup** — Responsive group of up to three key data objects.
- **RecordRow** — Direct, hoverable product record.
- **RecordList** — Unbordered record collection.
- **EmptyState** — Concise task-region empty state.
- **TitleBar** — Workspace identity and essential actions.
- **Dialog** — Radix-backed centered floating decision.
- **Drawer** — Vaul-backed edge drawer.
- **Inspector** — Right-edge contextual detail layer.
- **Popover** — Radix-backed compact floating content.
- **MCMToaster** — System toast viewport.
- **toast** — System toast helper.
- **CommandMenu** — cmdk-backed command and search surface.

Compose product-only patterns locally. Promote a pattern only after it proves useful in at least two products.
