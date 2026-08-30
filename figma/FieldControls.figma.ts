// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=30-45
// source=src/components.tsx
// component=Field
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const fieldValue = instance.getString('Value')
const type = instance.getEnum('Type', { Input: 'input', Select: 'select', Textarea: 'textarea' })
const disabled = instance.getEnum('State', { Default: false, Focus: false, Disabled: true })
let example
if (type === 'textarea') example = figma.code`<Field label="${label}"><Textarea defaultValue="${fieldValue}" ${disabled ? 'disabled' : ''} /></Field>`
else if (type === 'select') example = figma.code`<Field label="${label}"><Select placeholder="${fieldValue}" options={options} disabled={${disabled}} /></Field>`
else example = figma.code`<Field label="${label}"><Input defaultValue="${fieldValue}" ${disabled ? 'disabled' : ''} /></Field>`
export default { id: 'field-controls', imports: ['import { Field, Input, Select, Textarea } from "@brettmcm/mcmds"'], example, metadata: { nestable: true } }
