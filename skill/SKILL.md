---
name: mcmds
description: Design or refine product interfaces with the shared MCMDS tokens and React components established by Ledger and Scope. Use for MCMDS product UI; not for brand, campaign, art, or marketing direction.
---

# MCMDS

Build quiet, compact product interfaces from the shared system.

1. Read [DESIGN.md](DESIGN.md) and `component-manifest.json`.
2. For React products, install `@brettmcm/mcmds`, import `@brettmcm/mcmds/styles.css`, and compose its exports before adding local equivalents.
3. Treat code tokens as exact value truth, Storybook as behavior truth, the published MCMDS Figma library as visual truth, and Code Connect as the component contract.
4. Keep product-specific patterns local. Flag them for promotion after they recur in a second product.

Preserve information architecture and behavior. Validate light, dark, narrow, focus, selection, and reduced motion. When references differ, follow behavior repeated in both Ledger and Scope rather than a one-off treatment.
