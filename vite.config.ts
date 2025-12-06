import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readdirSync, statSync } from 'fs'

// Get all component directories
function getComponentEntries() {
  const componentsDir = resolve(__dirname, 'src/components')
  const entries: Record<string, string> = {}

  try {
    const dirs = readdirSync(componentsDir)
    for (const dir of dirs) {
      const fullPath = resolve(componentsDir, dir)
      if (statSync(fullPath).isDirectory()) {
        entries[`components/${dir}/index`] = resolve(fullPath, 'index.ts')
      }
    }
  } catch {
    // No components yet
  }

  // Add theme
  entries['theme/index'] = resolve(__dirname, 'src/theme/index.ts')

  return entries
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: getComponentEntries(),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
})
