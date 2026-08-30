// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-102
// source=src/components.tsx
// component=Inspector
import figma from 'figma'
const instance = figma.selectedInstance
const titleNode = instance.findText('Title')
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : ''
export default { id: 'inspector', imports: ['import { Inspector } from "@brettmcm/mcmds"'], example: figma.code`<Inspector title="${title}">content</Inspector>`, metadata: { nestable: false } }
