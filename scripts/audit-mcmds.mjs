import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.argv[2] || '.')
const ignored = new Set(['.git', '.next', 'dist', 'node_modules', 'out', 'storybook-static'])
const sourceExtensions = new Set(['.css', '.js', '.jsx', '.mjs', '.ts', '.tsx'])
const exportedNames = ['Button', 'CommandMenu', 'Dialog', 'Drawer', 'EmptyState', 'Field', 'IconButton', 'Input', 'Inspector', 'KeyData', 'KeyDataGroup', 'MCMProvider', 'Popover', 'RecordList', 'RecordRow', 'Select', 'Tabs', 'Textarea', 'TitleBar', 'Workspace']
const findings = []

function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) visit(filename)
    else if (sourceExtensions.has(path.extname(entry.name))) inspect(filename)
  }
}

function add(level, filename, line, message) {
  findings.push({ level, filename: path.relative(root, filename), line, message })
}

function inspect(filename) {
  const source = fs.readFileSync(filename, 'utf8')
  if (source.includes('mcmds-audit-ignore')) return
  const lines = source.split(/\r?\n/)
  lines.forEach((text, index) => {
    const line = index + 1
    if (/\.mcm-[\w-]+\s+(?:[a-z]|[.#[>+~])/.test(text)) add('error', filename, line, 'Styles a private MCMDS descendant; use a documented prop, token, or wrapper class.')
    if (/\b(?:function|const)\s+(?:Local)?(?:Button|Dialog|Drawer|EmptyState|Field|Input|Inspector|Popover|RecordList|RecordRow|Tabs|TitleBar)\b/.test(text) && !text.includes('mcmds-exception')) add('warning', filename, line, 'Possible local recreation of an exported MCMDS primitive.')
  })
}

function packageFiles(directory) {
  const result = []
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) result.push(...packageFiles(filename))
    else if (entry.name === 'package.json') result.push(filename)
  }
  return result
}

for (const filename of packageFiles(root)) {
  const manifest = JSON.parse(fs.readFileSync(filename, 'utf8'))
  const version = { ...manifest.dependencies, ...manifest.devDependencies }['@brettmcm/mcmds']
  if (version && /^[~^*]|\b(?:latest|next)\b/.test(version)) add('error', filename, 1, `MCMDS must be pinned exactly; found ${version}.`)
}

visit(root)
for (const finding of findings) console.log(`${finding.level.toUpperCase()} ${finding.filename}:${finding.line} ${finding.message}`)
const errors = findings.filter((finding) => finding.level === 'error').length
const warnings = findings.length - errors
console.log(`MCMDS audit: ${errors} error(s), ${warnings} warning(s); exports checked: ${exportedNames.length}`)
process.exitCode = errors ? 1 : 0
