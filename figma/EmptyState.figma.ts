// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-53
// source=src/components.tsx
// component=EmptyState
import figma from 'figma'
const instance = figma.selectedInstance
const titleNode = instance.findText('Title')
const descriptionNode = instance.findText('Description')
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : ''
const description = descriptionNode && descriptionNode.type === 'TEXT' ? descriptionNode.textContent : ''
export default { id: 'empty-state', imports: ['import { EmptyState } from "@brettmcm/mcmds"'], example: figma.code`<EmptyState title="${title}" description="${description}" />`, metadata: { nestable: true } }
