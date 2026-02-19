import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/RedesingGoiasConstrucoes/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Resolve figma assets
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
    // Ignore figma protocol warnings
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg'],
})
