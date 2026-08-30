import { execFileSync } from 'node:child_process'
import fs from 'node:fs'

execFileSync(process.execPath, ['scripts/generate.mjs'], { stdio: 'inherit' })
execFileSync('npx', ['tsup', 'src/index.ts', 'generated/tokens.ts', '--format', 'esm', '--clean', '--out-dir', 'dist'], { stdio: 'inherit' })
fs.copyFileSync('dist/src/index.js', 'dist/index.js')
fs.copyFileSync('dist/generated/tokens.js', 'dist/tokens.js')
fs.rmSync('dist/src', { recursive: true, force: true })
fs.rmSync('dist/generated', { recursive: true, force: true })
execFileSync('npx', ['tsc', '-p', 'tsconfig.build.json'], { stdio: 'inherit' })
fs.copyFileSync('.tmp-types/src/index.d.ts', 'dist/index.d.ts')
fs.copyFileSync('.tmp-types/src/components.d.ts', 'dist/components.d.ts')
fs.copyFileSync('.tmp-types/generated/tokens.d.ts', 'dist/tokens.d.ts')
fs.rmSync('.tmp-types', { recursive: true, force: true })
fs.copyFileSync('generated/tokens.css', 'dist/tokens.css')
fs.copyFileSync('src/styles.css', 'dist/styles.css')
fs.copyFileSync('generated/component-manifest.json', 'dist/component-manifest.json')
