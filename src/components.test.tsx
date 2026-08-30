import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button, Checkbox, Field, Input, KeyData, RecordRow, Tabs, TitleBar } from './components'

describe('MCMDS components', () => {
  it('exposes semantic button variants', () => { render(<Button variant="primary">Save</Button>); expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('data-variant', 'primary') })
  it('connects field labels to controls', () => { render(<Field label="Name" htmlFor="name"><Input id="name" /></Field>); expect(screen.getByLabelText('Name')).toHaveAttribute('id', 'name') })
  it('supports accessible checkbox changes', () => { render(<Checkbox label="Selected" />); fireEvent.click(screen.getByRole('checkbox')); expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'checked') })
  it('marks selected records semantically', () => { render(<RecordRow primary="Acme" selected />); expect(screen.getByRole('button', { name: /Acme/ })).toHaveAttribute('data-selected', 'true') })
  it('keeps key data interactive and identifies the active summary', () => { render(<KeyData label="Active proposals" value="3" active />); expect(screen.getByRole('button', { name: /Active proposals/ })).toHaveAttribute('aria-current', 'true') })
  it('keeps title accessories outside the heading name', () => { render(<TitleBar context="Radsmth" title="Scope" titleAccessory={<button>Switch project</button>} />); expect(screen.getByRole('heading', { name: 'Scope' })).toBeVisible(); expect(screen.getByRole('button', { name: 'Switch project' })).toBeVisible() })
  it('renders tab content', () => { render(<Tabs defaultValue="one" items={[{ value: 'one', label: 'One', content: 'First' }, { value: 'two', label: 'Two', content: 'Second' }]} />); expect(screen.getByText('First')).toBeVisible() })
})
