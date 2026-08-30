// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=30-8
// source=src/components.tsx
// component=IconButton
import figma from 'figma'
const instance = figma.selectedInstance
const glyph = instance.getString('Glyph')
const disabled = instance.getEnum('State', { Default: false, Hover: false, Disabled: true })
export default { id: 'icon-button', imports: ['import { IconButton } from "@brettmcm/mcmds"'], example: figma.code`<IconButton label="Action" ${disabled ? 'disabled' : ''}>${glyph}</IconButton>`, metadata: { nestable: true } }
