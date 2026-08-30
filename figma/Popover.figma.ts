// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=53-13
// source=src/components.tsx
// component=Popover
import figma from 'figma'
const instance = figma.selectedInstance
const title = instance.getString('Title')
const content = instance.getString('Content')
export default { id: 'popover', imports: ['import { Button, Popover } from "@brettmcm/mcmds"'], example: figma.code`<Popover trigger={<Button>Open</Button>}><strong>${title}</strong><p>${content}</p></Popover>`, metadata: { nestable: false } }
