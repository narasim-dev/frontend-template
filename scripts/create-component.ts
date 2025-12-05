#!/usr/bin/env tsx

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const componentName = process.argv[2]

if (!componentName) {
  console.error('Usage: npm run create:component <ComponentName>')
  process.exit(1)
}

const componentsDir = path.join(__dirname, '..', 'src', 'components', componentName)

if (fs.existsSync(componentsDir)) {
  console.error(`Component ${componentName} already exists`)
  process.exit(1)
}

fs.mkdirSync(componentsDir, { recursive: true })

// Component file
const componentContent = `import styled from 'styled-components'

export interface ${componentName}Props {
  children?: React.ReactNode
}

const Styled${componentName} = styled.div\`
  // Add styles here using theme from ThemeProvider:
  // color: \${({ theme }) => theme.colors.text};
\`

export function ${componentName}({ children }: ${componentName}Props) {
  return <Styled${componentName}>{children}</Styled${componentName}>
}
`

// Index file
const indexContent = `export { ${componentName} } from './${componentName}'
export type { ${componentName}Props } from './${componentName}'
`

// Test file
const testContent = `import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { ${componentName} } from './${componentName}'
import { defaultTheme } from '@/theme'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>)

describe('${componentName}', () => {
  it('renders children', () => {
    renderWithTheme(<${componentName}>Test content</${componentName}>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
`

// Stories file
const storiesContent = `import type { Meta, StoryObj } from '@storybook/react-vite'
import { ${componentName} } from './${componentName}'

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ${componentName}>

export const Default: Story = {
  args: {
    children: '${componentName} content',
  },
}
`

fs.writeFileSync(path.join(componentsDir, `${componentName}.tsx`), componentContent)
fs.writeFileSync(path.join(componentsDir, 'index.ts'), indexContent)
fs.writeFileSync(path.join(componentsDir, `${componentName}.test.tsx`), testContent)
fs.writeFileSync(path.join(componentsDir, `${componentName}.stories.tsx`), storiesContent)

console.log(`✅ Component ${componentName} created at src/components/${componentName}/`)
console.log(`
Files created:
  - ${componentName}.tsx
  - index.ts
  - ${componentName}.test.tsx
  - ${componentName}.stories.tsx

Don't forget to export from src/index.ts:
  export { ${componentName} } from './components/${componentName}'
  export type { ${componentName}Props } from './components/${componentName}'
`)
