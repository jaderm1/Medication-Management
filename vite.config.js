import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    rewrites: [
      { source: "src/pages/map.jsx/", destination: "/map" },
      {source: 'src/pages/medication-list.jsx', destination :'/medication-list'},
      {source: 'src/pages/medication-registry.jsx', destination :'//medication-registry'},
      {source: 'src/pages/pharmacy-registry.jsx', destination :'/pharmacy-registry'}
    ]
  },
})