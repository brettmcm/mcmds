// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=30-60
// source=src/components.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance
const label = instance.getString('Label')
const checked = instance.getEnum('State', { Unchecked: false, Checked: true, Mixed: 'indeterminate', Disabled: false })
const disabled = instance.getEnum('State', { Unchecked: false, Checked: false, Mixed: false, Disabled: true })
export default { id: 'selection-control', imports: ['import { Checkbox } from "@brettmcm/mcmds"'], example: figma.code`<Checkbox label="${label}" checked={${checked}} disabled={${disabled}} />`, metadata: { nestable: true } }
