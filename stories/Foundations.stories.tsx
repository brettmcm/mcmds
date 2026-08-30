import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, EmptyState, Field, Input, KeyData, KeyDataGroup, RecordList, RecordRow, Stack, Tabs, TitleBar, Workspace } from '../src/components'

const meta = { title: 'MCMDS/System', component: Workspace } satisfies Meta<typeof Workspace>
export default meta
type Story = StoryObj<typeof meta>

export const ListWorkspace: Story = { render: () => <Workspace><TitleBar context="Pipeline" title="Opportunities" actions={<Button variant="primary">New opportunity</Button>} /><Stack gap="lg"><KeyDataGroup><KeyData label="Open" value="24" secondary="6 need attention" /><KeyData label="Pipeline" value="$184k" secondary="Next 90 days" /><KeyData label="Close rate" value="38%" secondary="Trailing quarter" /></KeyDataGroup><Tabs defaultValue="all" items={[{ value: 'all', label: 'All', content: <RecordList><RecordRow primary="Northstar" secondary="Identity system" metadata="$24,000" /><RecordRow primary="Common Ground" secondary="Product design" metadata="$18,500" selected /></RecordList> }, { value: 'active', label: 'Active', content: <EmptyState title="No active records" description="Change the filter or add a new opportunity." /> }]} /></Stack></Workspace> }
export const Form: Story = { render: () => <div style={{ maxWidth: 440 }}><Stack gap="lg"><Field label="Company" htmlFor="company"><Input id="company" defaultValue="Northstar" /></Field><Field label="Project" htmlFor="project" description="Keep this short and specific."><Input id="project" /></Field><Button variant="primary">Save project</Button></Stack></div> }
