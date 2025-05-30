import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"Fauz-Portfolio",
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 5173,       // Keep port fixed
    strictPort: true, // Prevent automatic port changes
    cors: true,       // Enable CORS
  }
})
