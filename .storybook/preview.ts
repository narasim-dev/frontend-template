import type { Preview } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/theme'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        ThemeProvider,
        { theme: defaultTheme },
        React.createElement(Story)
      ),
  ],
}

export default preview
