// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=57-20
// source=src/components.tsx
// component=Drawer
import figma from 'figma'
const instance = figma.selectedInstance
const direction = instance.getEnum('Direction', { Right: 'right', Bottom: 'bottom' })
const title = instance.getString('Title')
export default { id: 'drawer', imports: ['import { Drawer } from "@brettmcm/mcmds"'], example: figma.code`<Drawer direction="${direction}" title="${title}">content</Drawer>`, metadata: { nestable: false } }
