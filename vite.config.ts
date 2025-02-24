import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss()],          
  server: {
    host: true, // Automatically determine the network address
    port: 3000, // Specify the port
    open: true, // Open the browser automatically
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Proxy API requests to another server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
    },
  },
 
})
