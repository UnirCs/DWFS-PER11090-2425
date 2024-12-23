import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "node:path"
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      src: "/src",
      components: "/src/components"
    },
  },
})
