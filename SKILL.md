---
name: mcmds
description: Design or refine product interfaces with the shared MCMDS tokens and React components established by Ledger and Scope. Use for MCMDS product UI; not for brand, campaign, art, or marketing direction.
---

# MCMDS

Build quiet, compact product interfaces from the shared system.

1. Read [DESIGN.md](DESIGN.md) and `component-manifest.json`.
2. For React products, install the exact approved `@brettmcm/mcmds` version, import `@brettmcm/mcmds/styles.css`, and compose its exports before adding local equivalents.
3. Begin dashboard work with `MCMProvider > Workspace > TitleBar > KeyDataGroup > Tabs > RecordList`. Deviate only when the product's information architecture requires it; record the reason next to the local composition.
4. Treat code tokens as exact value truth, Storybook as behavior truth, the published MCMDS Figma library as visual truth, and Code Connect as the component contract. Stop when those sources or the installed package disagree; reconcile and version them before changing a product.
5. Do not recreate an exported button, field, input, selection control, tabs, record row/list, empty state, title bar, dialog, drawer, inspector, popover, toast, or command menu locally. Do not style MCMDS internals by descendant element selectors. Use documented props, tokens, and a product-owned wrapper class.
6. Keep product-specific patterns local. Add an `mcmds-exception` comment explaining why an exported primitive cannot express the pattern. Flag it for promotion after it recurs in a second product.
7. Run `node scripts/audit-mcmds.mjs <product-root>` from this package before handoff. Resolve errors; review warnings deliberately.

Preserve information architecture and behavior. Validate light, dark, 1280px, 800px, 560px, keyboard focus, selection, empty/loading/error states, and reduced motion. For dashboard density and hierarchy, use Ledger as the baseline. When interaction references differ, follow behavior repeated in both Ledger and Scope rather than a one-off treatment.
