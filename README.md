# @narasim/frontend-template

Boilerplate for React frontend modules with TypeScript, styled-components, Vitest, and Storybook.

## Quick Start

```bash
npm install
npm run dev        # Start Vite dev server
npm run storybook  # Start Storybook
npm test           # Run tests
```

## Scripts

| Script | Description |
| ------ | ----------- |
| `dev` | Start Vite dev server |
| `build` | Build for production |
| `types` | Type check |
| `test` | Run tests |
| `test:watch` | Run tests in watch mode |
| `test:coverage` | Run tests with coverage |
| `storybook` | Start Storybook |
| `storybook:build` | Build Storybook |
| `lint` | Run ESLint |
| `create:component` | Generate new component |

## Creating Components

```bash
npm run create:component Button
```

This creates:
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
│       ├── Button.tsx
│       ├── Button.test.tsx
│       ├── Button.stories.tsx
│       └── index.ts
├── theme/           # Theme tokens
│   └── index.ts
├── test/            # Test setup
│   └── setup.ts
└── index.ts         # Public exports
```

## Using as npm Package

This template is configured to be published as an npm package:

```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

Build and use in other projects:

```bash
npm run build
```

## Creating New Modules

To create a new frontend module based on this template:

1. Clone this repository
2. Update `package.json` with new name
3. Remove example components
4. Start building!

Future: `npx @narasim/cli create-module my-module`

## Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **styled-components** — CSS-in-JS
- **Vitest** — Testing
- **Testing Library** — Component testing
- **Storybook 8** — Component documentation
