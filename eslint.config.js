// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'

export default [js.configs.recommended, {
  files: ['src/**/*.{ts,tsx}'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      React: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': typescript,
    'react-hooks': reactHooks,
  },
  rules: {
    ...typescript.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
}, {
  ignores: ['dist/', 'node_modules/', 'storybook-static/', '*.config.js', '*.config.ts'],
}, ...storybook.configs["flat/recommended"]];
