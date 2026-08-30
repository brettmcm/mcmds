import fs from 'node:fs'
import path from 'node:path'

const target = process.env.MCMDS_SKILL_DIR || path.join(process.env.HOME, '.codex', 'skills', 'mcmds')
fs.mkdirSync(target, { recursive: true })
for (const [source, dest] of [['skill/SKILL.md', 'SKILL.md'], ['skill/DESIGN.md', 'DESIGN.md'], ['generated/component-manifest.json', 'component-manifest.json']]) {
  fs.copyFileSync(source, path.join(target, dest))
}
console.log(`Installed MCMDS skill to ${target}`)
