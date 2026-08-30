# MCMDS

MCMDS is the shared product-interface system used by Ledger, Scope, and Pipeline. Code owns token values and component APIs; Storybook documents behavior; the published Figma library owns visual composition; Code Connect binds the two.

```sh
npm install @brettmcm/mcmds
```

```tsx
import { Button, MCMProvider, Workspace } from '@brettmcm/mcmds'
import '@brettmcm/mcmds/styles.css'
```

For GitHub Packages, copy `.npmrc.example` to your user or project npm configuration and provide `NODE_AUTH_TOKEN` without committing it.

Run `npm run check` before release. Version with Changesets, publish the Figma library manually, then publish the npm package and Code Connect mappings.

Code Connect uses parserless `figma/*.figma.ts` templates configured by `figma.config.json`. Set `FIGMA_ACCESS_TOKEN` locally or in CI, then run `npx figma connect publish`. Never commit the token.
