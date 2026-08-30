import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = name => JSON.parse(fs.readFileSync(path.join(root, 'tokens', name), 'utf8'))
const primitives = read('primitives.tokens.json')
const semantic = read('semantic.tokens.json')
const typography = read('typography.tokens.json')
const scale = read('scale.tokens.json')
const outDir = path.join(root, 'generated')

const value = token => {
  const v = token.$value
  if (Array.isArray(v)) return v.map(x => /\s/.test(x) ? `"${x}"` : x).join(', ')
  if (typeof v === 'object') return `${v.value}${v.unit === 'number' ? '' : v.unit}`
  return String(v)
}
const ref = raw => raw.replace(/^\{/, '').replace(/\}$/, '').split('.').reduce((o, k) => o[k], primitives)
const cssName = name => `--mcm-${name}`
const flatten = (node, prefix = [], rows = []) => {
  for (const [key, item] of Object.entries(node)) {
    if (key.startsWith('$')) continue
    if (item && '$value' in item) rows.push([prefix.concat(key).join('-'), item])
    else flatten(item, prefix.concat(key), rows)
  }
  return rows
}
const primitiveRows = flatten(primitives)
const typeRows = flatten(typography)
const scaleRows = flatten(scale)
const semanticRows = mode => flatten(semantic[mode]).map(([name, token]) => [name, token.$value.startsWith('{') ? ref(token.$value) : token])
const block = rows => rows.map(([name, token]) => `  ${cssName(name)}: ${value(token)};`).join('\n')
const light = semanticRows('light')
const dark = semanticRows('dark')
const tokensCss = `/* Generated from tokens/*.tokens.json. Do not edit. */\n:root, [data-mcm-theme="light"] {\n${block([...primitiveRows, ...typeRows, ...scaleRows, ...light])}\n  --mcm-layout-gutter: clamp(var(--mcm-layout-gutter-min), 3vw, var(--mcm-layout-gutter-max));\n}\n[data-mcm-theme="dark"] {\n${block(dark)}\n}\n@media (prefers-color-scheme: dark) {\n  :root:not([data-mcm-theme]) {\n${block(dark)}\n  }\n}\n`

const tokenObject = Object.fromEntries([...primitiveRows, ...typeRows, ...scaleRows].map(([n,t]) => [n, value(t)]))
const tokensTs = `/* Generated. */\nexport const tokens = ${JSON.stringify(tokenObject, null, 2)} as const\nexport type TokenName = keyof typeof tokens\n`
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src', 'component-manifest.source.json'), 'utf8'))
const skillDesign = `# MCMDS interface reference\n\nGenerated from the code-owned design system. Use the package and manifest for implementation; use the published Figma library for visual composition.\n\n## Required package\n\nInstall \`@brettmcm/mcmds\` and import \`@brettmcm/mcmds/styles.css\`. Compose exported components before adding product-local UI.\n\n## Visual rules\n\n- One continuous canvas; use surfaces for hover, selection, bounded summaries, and floating layers.\n- Inter is UI, Indivisible is restrained display, and Departure Mono is genuine technical metadata.\n- Prefer direct rows over cards, surface changes over borders, and contextual actions over permanent chrome.\n- Orange is semantic and rare; never use it as a rail, rule, stripe, underline, or edge accent.\n- Shared spacing is 4, 8, 12, 16, 24, 36, 48, and 72px. Controls are 36px; compact rows are 58px.\n- Verify light, dark, narrow, keyboard focus, selection, and reduced motion.\n\n## Shared components\n\n${manifest.components.map(c => `- **${c.name}** — ${c.purpose}`).join('\n')}\n\nCompose product-only patterns locally. Promote a pattern only after it proves useful in at least two products.\n`

const outputs = {
  'generated/tokens.css': tokensCss,
  'src/tokens.css': tokensCss,
  'generated/tokens.ts': tokensTs,
  'generated/component-manifest.json': JSON.stringify(manifest, null, 2) + '\n',
  'skill/DESIGN.md': skillDesign,
}
if (process.argv.includes('--check')) {
  const stale = Object.entries(outputs).filter(([file, body]) => !fs.existsSync(path.join(root, file)) || fs.readFileSync(path.join(root, file), 'utf8') !== body)
  if (stale.length) { console.error(`Generated files are stale: ${stale.map(([f]) => f).join(', ')}`); process.exit(1) }
} else {
  for (const [file, body] of Object.entries(outputs)) { fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); fs.writeFileSync(path.join(root, file), body) }
}
