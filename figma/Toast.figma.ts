// url=https://www.figma.com/design/byecc9rbUX92o72mcyLaVW/mcmds?node-id=55-15
// source=src/index.ts
// component=toast
import figma from 'figma'
const instance = figma.selectedInstance
const status = instance.getEnum('Status', { Default: 'message', Success: 'success', Alert: 'error' })
const title = instance.getString('Title')
const description = instance.getString('Description')
export default { id: 'toast', imports: ['import { toast } from "@brettmcm/mcmds"'], example: figma.code`toast.${status}("${title}", { description: "${description}" })`, metadata: { nestable: false } }
