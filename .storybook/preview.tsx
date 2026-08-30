import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/styles.css'
import { MCMProvider } from '../src/components'

const preview: Preview = {
  decorators: [(Story, context) => <MCMProvider theme={context.globals.theme}><Story /></MCMProvider>],
  globalTypes: { theme: { description: 'Appearance', defaultValue: 'light', toolbar: { icon: 'paintbrush', items: ['light', 'dark'] } } },
  parameters: { layout: 'padded', a11y: { test: 'error' }, controls: { expanded: true } },
}
export default preview
