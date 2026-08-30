// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-43
// source=src/components.tsx
// component=RecordRow
import figma from 'figma'
const instance = figma.selectedInstance
const selected = instance.getEnum('State', { Default: false, Hover: false, Selected: true })
const primaryNode = instance.findText('Primary')
const secondaryNode = instance.findText('Secondary')
const metadataNode = instance.findText('Metadata')
const primary = primaryNode && primaryNode.type === 'TEXT' ? primaryNode.textContent : ''
const secondary = secondaryNode && secondaryNode.type === 'TEXT' ? secondaryNode.textContent : ''
const metadata = metadataNode && metadataNode.type === 'TEXT' ? metadataNode.textContent : ''
export default { id: 'record-row', imports: ['import { RecordRow } from "@brettmcm/mcmds"'], example: figma.code`<RecordRow primary="${primary}" secondary="${secondary}" metadata="${metadata}" selected={${selected}} />`, metadata: { nestable: true } }
