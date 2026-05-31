import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Using a relative path makes it easier to host on GitHub Pages without breaking links
  base: './', 
  server: {
    watch: {
      usePolling: true, // Forces the server to look for file saves
    },
  },
})