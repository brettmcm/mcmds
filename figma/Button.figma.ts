// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=29-17
// source=src/components.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const variant = instance.getEnum('Style', { Primary: 'primary', Neutral: 'neutral' })
const disabled = instance.getEnum('State', { Default: false, Hover: false, Disabled: true })
export default { id: 'button', imports: ['import { Button } from "@brettmcm/mcmds"'], example: figma.code`<Button variant="${variant}" ${disabled ? 'disabled' : ''}>${label}</Button>`, metadata: { nestable: true } }
