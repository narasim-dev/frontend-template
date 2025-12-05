import type { Meta, StoryObj } from '@storybook/react-vite'

const Welcome = () => (
  <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif' }}>
    <h1>👋 Welcome to @narasim-dev/frontend-template</h1>
    <p>This is a boilerplate for creating React component libraries.</p>

    <h2>Getting Started</h2>
    <p>Create your first component:</p>
    <pre
      style={{
        background: '#f4f4f4',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
      }}
    >
      npm run create:component Button
    </pre>

    <h2>What's Included</h2>
    <ul>
      <li>
        <strong>React 19</strong> + TypeScript
      </li>
      <li>
        <strong>Vite</strong> — Fast build tool
      </li>
      <li>
        <strong>styled-components</strong> — CSS-in-JS
      </li>
      <li>
        <strong>Vitest</strong> — Unit testing
      </li>
      <li>
        <strong>Storybook</strong> — Component documentation
      </li>
      <li>
        <strong>ESLint + Prettier</strong> — Code quality
      </li>
      <li>
        <strong>Husky</strong> — Git hooks
      </li>
    </ul>

    <h2>Scripts</h2>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
            Command
          </th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '8px' }}>
            <code>npm run dev</code>
          </td>
          <td style={{ padding: '8px' }}>Start dev server</td>
        </tr>
        <tr>
          <td style={{ padding: '8px' }}>
            <code>npm run storybook</code>
          </td>
          <td style={{ padding: '8px' }}>Start Storybook</td>
        </tr>
        <tr>
          <td style={{ padding: '8px' }}>
            <code>npm test</code>
          </td>
          <td style={{ padding: '8px' }}>Run tests</td>
        </tr>
        <tr>
          <td style={{ padding: '8px' }}>
            <code>npm run build</code>
          </td>
          <td style={{ padding: '8px' }}>Build for production</td>
        </tr>
        <tr>
          <td style={{ padding: '8px' }}>
            <code>npm run create:component</code>
          </td>
          <td style={{ padding: '8px' }}>Generate new component</td>
        </tr>
      </tbody>
    </table>
  </div>
)

const meta: Meta<typeof Welcome> = {
  title: 'Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Welcome>

export const Introduction: Story = {}
