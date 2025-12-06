# @narasim-dev/frontend-template

Boilerplate for React component libraries with TypeScript, styled-components, Vitest, and Storybook.

## Quick Start

```bash
npm install
npm run dev        # Start Storybook
npm test           # Run tests
npm run build      # Build for npm
```

## Scripts

| Script | Description |
| ------ | ----------- |
| `dev` | Start Storybook dev server |
| `build` | Build components for npm |
| `storybook:build` | Build Storybook static site |
| `types` | Type check |
| `test` | Run tests |
| `test:watch` | Run tests in watch mode |
| `lint` | Run ESLint |
| `format` | Format with Prettier |
| `create:component` | Generate new component |
| `changeset` | Create a changeset |
| `version` | Apply changesets and update versions |
| `release` | Build and publish to npm |

## Creating Components

```bash
npm run create:component Button
```

Creates:
```
src/components/Button/
├── Button.tsx
├── Button.test.tsx
├── Button.stories.tsx
└── index.ts
```

## Project Structure

```
src/
├── components/       # React components
│   └── Button/
├── theme/            # Theme tokens and types
│   └── index.ts
└── test/             # Test setup
    └── setup.ts
```

## Usage

Components are imported directly:

```tsx
import { Button } from '@narasim-dev/ui-kit/components/Button'
import { defaultTheme } from '@narasim-dev/ui-kit/theme'
```

Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@narasim-dev/ui-kit/theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Click me</Button>
    </ThemeProvider>
  )
}
```

## Versioning & Publishing

This template uses [Changesets](https://github.com/changesets/changesets) for versioning.

```bash
# After making changes, create a changeset
npm run changeset

# Apply versions and generate CHANGELOG
npm run version

# Build and publish to npm
npm run release
```

GitHub Action automatically creates Release PRs and publishes on merge.

## Creating New Modules

1. Clone this repository
2. Update `name` in `package.json`
3. Run `npm run create:component` to add components
4. Configure npm publishing (optional)

## Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **styled-components** — CSS-in-JS with ThemeProvider
- **Vitest** — Testing
- **Testing Library** — Component testing
- **Storybook 10** — Component documentation
- **Changesets** — Versioning and changelog
- **Husky** — Git hooks (lint + test on commit/push)
