// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=31-23
// source=src/components.tsx
// component=KeyData
import figma from 'figma'
const instance = figma.selectedInstance
const emphasis = instance.getEnum('Emphasis', { false: false, true: true })
const labelNode = instance.findText('Label')
const valueNode = instance.findText('Value')
const secondaryNode = instance.findText('Secondary')
const label = labelNode && labelNode.type === 'TEXT' ? labelNode.textContent : ''
const value = valueNode && valueNode.type === 'TEXT' ? valueNode.textContent : ''
const secondary = secondaryNode && secondaryNode.type === 'TEXT' ? secondaryNode.textContent : ''
export default { id: 'key-data', imports: ['import { KeyData } from "@brettmcm/mcmds"'], example: figma.code`<KeyData label="${label}" value="${value}" secondary="${secondary}" active={${emphasis}} />`, metadata: { nestable: true } }
