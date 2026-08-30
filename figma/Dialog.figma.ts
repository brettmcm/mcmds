// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-82
// source=src/components.tsx
// component=Dialog
import figma from 'figma'
const instance = figma.selectedInstance
const titleNode = instance.findText('Title')
const descriptionNode = instance.findText('Description')
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : ''
const description = descriptionNode && descriptionNode.type === 'TEXT' ? descriptionNode.textContent : ''
export default { id: 'dialog', imports: ['import { Dialog } from "@brettmcm/mcmds"'], example: figma.code`<Dialog title="${title}" description="${description}">content</Dialog>`, metadata: { nestable: false } }
