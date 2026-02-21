import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    base: process.env.BASE_PATH || '/paginated-project-grid/',
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