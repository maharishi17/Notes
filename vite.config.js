import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Notes/', // Set to your repository name
  plugins: [react()],
})
