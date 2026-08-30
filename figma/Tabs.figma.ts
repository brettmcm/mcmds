// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-12
// source=src/components.tsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance
const labelNode = instance.findText('Label')
const label = labelNode && labelNode.type === 'TEXT' ? labelNode.textContent : 'Tab'
const selected = instance.getEnum('State', { Default: false, Hover: false, Selected: true })
export default { id: 'tabs', imports: ['import { Tabs } from "@brettmcm/mcmds"'], example: figma.code`<Tabs defaultValue="${selected ? 'tab' : ''}" items={[{ value: "tab", label: "${label}", content: children }]} />`, metadata: { nestable: false } }
