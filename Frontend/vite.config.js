import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: 'dist', // Explicitly set build output folder
    emptyOutDir: true, // Clears dist before building
  },
  // Optional: base path for deployment if hosted under subpath
  // base: '/GreenForge/', 
})
