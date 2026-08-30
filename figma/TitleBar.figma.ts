// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-67
// source=src/components.tsx
// component=TitleBar
import figma from 'figma'
const instance = figma.selectedInstance
const titleNode = instance.findText('Title')
const contextNode = instance.findText('Context')
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : ''
const context = contextNode && contextNode.type === 'TEXT' ? contextNode.textContent : ''
export default { id: 'title-bar', imports: ['import { TitleBar } from "@brettmcm/mcmds"'], example: figma.code`<TitleBar title="${title}" context="${context}" />`, metadata: { nestable: true } }
