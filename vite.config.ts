import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^core-js\/.*/, replacement: path.resolve(__dirname, 'src/empty.js') }
    ]
  },
  optimizeDeps: {
    include: ['jspdf', 'qrcode', 'canvas-confetti', 'three']
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false
  }
})

