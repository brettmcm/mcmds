import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as RadioPrimitive from '@radix-ui/react-radio-group'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { Command } from 'cmdk'
import { Drawer as VaulDrawer } from 'vaul'
import { Toaster } from 'sonner'

type Theme = 'light' | 'dark'
type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
const cx = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(' ')

export interface MCMProviderProps extends React.HTMLAttributes<HTMLDivElement> { theme?: Theme }
export function MCMProvider({ theme, className, ...props }: MCMProviderProps) {
  return <div data-mcm-theme={theme} className={cx('mcm-provider', className)} {...props} />
}

export function Workspace({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <main className={cx('mcm-workspace', className)} {...props} />
}

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> { gap?: Gap; align?: 'start' | 'center' | 'end' | 'stretch' }
export function Stack({ gap = 'md', align = 'stretch', className, ...props }: LayoutProps) {
  return <div className={cx('mcm-stack', className)} data-gap={gap} data-align={align} {...props} />
}
export function Inline({ gap = 'sm', align = 'center', className, ...props }: LayoutProps) {
  return <div className={cx('mcm-inline', className)} data-gap={gap} data-align={align} {...props} />
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'neutral' | 'tonal' | 'primary' | 'danger'; size?: 'compact' | 'standard' }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'neutral', size = 'standard', className, type = 'button', ...props }, ref) =>
  <button ref={ref} type={type} className={cx('mcm-button', className)} data-variant={variant} data-size={size} {...props} />)
Button.displayName = 'Button'

export interface IconButtonProps extends ButtonProps { label: string }
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({ label, className, children, ...props }, ref) =>
  <Button ref={ref} aria-label={label} className={cx('mcm-icon-button', className)} {...props}>{children}</Button>)
IconButton.displayName = 'IconButton'

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> { label: string; htmlFor?: string; description?: string; error?: string; required?: boolean }
export function Field({ label, htmlFor, description, error, required, className, children, ...props }: FieldProps) {
  return <div className={cx('mcm-field', className)} data-invalid={Boolean(error) || undefined} {...props}>
    <LabelPrimitive.Root className="mcm-field__label" htmlFor={htmlFor}>{label}{required ? <span aria-hidden="true"> *</span> : null}</LabelPrimitive.Root>
    {children}
    {(error || description) && <span className="mcm-field__message" role={error ? 'alert' : undefined}>{error || description}</span>}
  </div>
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input ref={ref} className={cx('mcm-input', className)} {...props} />)
Input.displayName = 'Input'
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => <textarea ref={ref} className={cx('mcm-textarea', className)} {...props} />)
Textarea.displayName = 'Textarea'

export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps { value?: string; defaultValue?: string; onValueChange?: (value: string) => void; options: SelectOption[]; placeholder?: string; disabled?: boolean; name?: string }
export function Select({ options, placeholder = 'Select…', ...props }: SelectProps) {
  return <SelectPrimitive.Root {...props}><SelectPrimitive.Trigger className="mcm-select"><SelectPrimitive.Value placeholder={placeholder} /><SelectPrimitive.Icon aria-hidden="true">⌄</SelectPrimitive.Icon></SelectPrimitive.Trigger>
    <SelectPrimitive.Portal><SelectPrimitive.Content className="mcm-select-content" position="popper" sideOffset={4}><SelectPrimitive.Viewport>{options.map(o => <SelectPrimitive.Item className="mcm-select-item" key={o.value} value={o.value} disabled={o.disabled}><SelectPrimitive.ItemText>{o.label}</SelectPrimitive.ItemText></SelectPrimitive.Item>)}</SelectPrimitive.Viewport></SelectPrimitive.Content></SelectPrimitive.Portal>
  </SelectPrimitive.Root>
}

export interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'children'> { label: string }
export function Checkbox({ label, id, className, ...props }: CheckboxProps) { const generated = React.useId(); const controlId = id || generated; return <label className="mcm-choice" htmlFor={controlId}><CheckboxPrimitive.Root id={controlId} className={cx('mcm-checkbox', className)} {...props}><CheckboxPrimitive.Indicator>✓</CheckboxPrimitive.Indicator></CheckboxPrimitive.Root><span>{label}</span></label> }

export interface RadioOption { value: string; label: string; disabled?: boolean }
export interface RadioProps extends Omit<React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>, 'children'> { options: RadioOption[] }
export function Radio({ options, className, ...props }: RadioProps) { return <RadioPrimitive.Root className={cx('mcm-radio-group', className)} {...props}>{options.map(o => <label className="mcm-choice" key={o.value}><RadioPrimitive.Item className="mcm-radio" value={o.value} disabled={o.disabled}><RadioPrimitive.Indicator className="mcm-radio__indicator" /></RadioPrimitive.Item><span>{o.label}</span></label>)}</RadioPrimitive.Root> }

export interface TabItem { value: string; label: string; content: React.ReactNode; disabled?: boolean }
export interface TabsProps extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'children'> { items: TabItem[] }
export function Tabs({ items, className, ...props }: TabsProps) { return <TabsPrimitive.Root className={cx('mcm-tabs', className)} {...props}><TabsPrimitive.List className="mcm-tabs__list">{items.map(i => <TabsPrimitive.Trigger className="mcm-tabs__trigger" value={i.value} disabled={i.disabled} key={i.value}>{i.label}</TabsPrimitive.Trigger>)}</TabsPrimitive.List>{items.map(i => <TabsPrimitive.Content className="mcm-tabs__content" value={i.value} key={i.value}>{i.content}</TabsPrimitive.Content>)}</TabsPrimitive.Root> }

export interface KeyDataProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> { label: string; value: React.ReactNode; secondary?: React.ReactNode; active?: boolean }
export function KeyData({ label, value, secondary, active, className, type = 'button', ...props }: KeyDataProps) { return <button type={type} className={cx('mcm-key-data', className)} data-active={active || undefined} aria-current={active ? 'true' : undefined} {...props}><span className="mcm-key-data__label">{label}</span><strong className="mcm-key-data__value">{value}</strong>{secondary && <span className="mcm-key-data__secondary">{secondary}</span>}</button> }
export function KeyDataGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cx('mcm-key-data-group', className)} {...props} /> }

export interface RecordRowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { primary: React.ReactNode; secondary?: React.ReactNode; metadata?: React.ReactNode; selected?: boolean }
export const RecordRow = React.forwardRef<HTMLButtonElement, RecordRowProps>(({ primary, secondary, metadata, selected, className, ...props }, ref) => <button ref={ref} className={cx('mcm-record-row', className)} data-selected={selected || undefined} {...props}><span className="mcm-record-row__copy"><strong>{primary}</strong>{secondary && <span>{secondary}</span>}</span>{metadata && <span className="mcm-record-row__meta">{metadata}</span>}</button>)
RecordRow.displayName = 'RecordRow'
export function RecordList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cx('mcm-record-list', className)} role="list" {...props} /> }

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> { title: string; description?: string; action?: React.ReactNode }
export function EmptyState({ title, description, action, className, ...props }: EmptyStateProps) { return <div className={cx('mcm-empty-state', className)} {...props}><strong>{title}</strong>{description && <p>{description}</p>}{action}</div> }
export interface TitleBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> { title: React.ReactNode; context?: React.ReactNode; titleAccessory?: React.ReactNode; actions?: React.ReactNode }
export function TitleBar({ title, context, titleAccessory, actions, className, ...props }: TitleBarProps) { return <header className={cx('mcm-title-bar', className)} {...props}><div className="mcm-title-bar__copy">{context && <span className="mcm-title-bar__context">{context}</span>}<div className="mcm-title-bar__title"><h1>{title}</h1>{titleAccessory && <span className="mcm-title-bar__accessory">{titleAccessory}</span>}</div></div>{actions && <div className="mcm-title-bar__actions">{actions}</div>}</header> }

export interface DialogProps { open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; trigger?: React.ReactNode; title: string; description?: string; children: React.ReactNode; actions?: React.ReactNode }
export function Dialog({ trigger, title, description, children, actions, ...props }: DialogProps) { return <DialogPrimitive.Root {...props}>{trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}<DialogPrimitive.Portal><DialogPrimitive.Overlay className="mcm-overlay" /><DialogPrimitive.Content className="mcm-dialog"><DialogPrimitive.Title>{title}</DialogPrimitive.Title>{description && <DialogPrimitive.Description>{description}</DialogPrimitive.Description>}<div className="mcm-dialog__body">{children}</div>{actions && <div className="mcm-dialog__actions">{actions}</div>}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root> }

export interface DrawerProps { open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; trigger?: React.ReactNode; title: string; children: React.ReactNode; actions?: React.ReactNode; direction?: 'left' | 'right' | 'top' | 'bottom' }
export function Drawer({ trigger, title, children, actions, direction = 'right', ...props }: DrawerProps) { return <VaulDrawer.Root direction={direction} {...props}>{trigger && <VaulDrawer.Trigger asChild>{trigger}</VaulDrawer.Trigger>}<VaulDrawer.Portal><VaulDrawer.Overlay className="mcm-overlay" /><VaulDrawer.Content className="mcm-drawer" data-direction={direction}><div className="mcm-floating-header"><VaulDrawer.Title>{title}</VaulDrawer.Title></div><div className="mcm-floating-body">{children}</div>{actions && <div className="mcm-floating-actions">{actions}</div>}</VaulDrawer.Content></VaulDrawer.Portal></VaulDrawer.Root> }
export function Inspector(props: Omit<DrawerProps, 'direction'>) { return <Drawer direction="right" {...props} /> }

export interface PopoverProps { trigger: React.ReactNode; children: React.ReactNode; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; align?: 'start' | 'center' | 'end' }
export function Popover({ trigger, children, align = 'center', ...props }: PopoverProps) { return <PopoverPrimitive.Root {...props}><PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger><PopoverPrimitive.Portal><PopoverPrimitive.Content className="mcm-popover" align={align} sideOffset={4}>{children}</PopoverPrimitive.Content></PopoverPrimitive.Portal></PopoverPrimitive.Root> }

export function MCMToaster(props: React.ComponentProps<typeof Toaster>) { return <Toaster theme="system" position="bottom-right" toastOptions={{ className: 'mcm-toast' }} {...props} /> }

export interface CommandItem { value: string; label: string; keywords?: string[]; shortcut?: string; onSelect?: () => void }
export interface CommandMenuProps { open: boolean; onOpenChange: (open: boolean) => void; items: CommandItem[]; placeholder?: string; emptyLabel?: string }
export function CommandMenu({ open, onOpenChange, items, placeholder = 'Search commands…', emptyLabel = 'No results' }: CommandMenuProps) { return <Command.Dialog className="mcm-command" overlayClassName="mcm-overlay" open={open} onOpenChange={onOpenChange} label="Command menu"><Command.Input className="mcm-command__input" placeholder={placeholder} /><Command.List className="mcm-command__list"><Command.Empty className="mcm-command__empty">{emptyLabel}</Command.Empty>{items.map(i => <Command.Item className="mcm-command__item" key={i.value} value={i.value} keywords={i.keywords} onSelect={i.onSelect}><span>{i.label}</span>{i.shortcut && <kbd>{i.shortcut}</kbd>}</Command.Item>)}</Command.List></Command.Dialog> }
