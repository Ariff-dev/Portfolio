import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Supabase
          'vendor-supabase': ['@supabase/supabase-js'],
          // MD editor (el más pesado — se carga solo en /blog/editor)
          'vendor-md-editor': ['@uiw/react-md-editor'],
          // Markdown render
          'vendor-markdown': ['react-markdown', 'remark-gfm'],
          // Iconos
          'vendor-icons': ['react-icons'],
        },
      },
    },
  },
})
