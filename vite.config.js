import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // Matches the old CRA output folder so the existing deploy config keeps working
  build: { outDir: 'build' },
})
