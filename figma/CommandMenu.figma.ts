// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=54-6
// source=src/components.tsx
// component=CommandMenu
import figma from 'figma'
const instance = figma.selectedInstance
const placeholder = instance.getString('Placeholder')
export default { id: 'command-menu', imports: ['import { CommandMenu } from "@brettmcm/mcmds"'], example: figma.code`<CommandMenu open={open} onOpenChange={setOpen} placeholder="${placeholder}" items={items} />`, metadata: { nestable: false } }
