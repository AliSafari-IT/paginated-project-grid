import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    base: '/paginated-project-grid/',  // Match the repository name for GitHub Pages
    server: {
      port: 3007,
      open: true
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@asafarim/paginated-project-grid': resolve(__dirname, '..')
      }
    },
  };
})