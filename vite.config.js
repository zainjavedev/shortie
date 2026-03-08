import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        blog: resolve(__dirname, 'blog.html'),
        'blog-viral': resolve(__dirname, 'blog/how-to-go-viral-with-short-form-content.html'),
      },
    },
  },
})
