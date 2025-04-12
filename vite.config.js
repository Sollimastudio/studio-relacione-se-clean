import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        googleVerification: resolve(__dirname, 'public/googlebe58f563df00c509.html')
      }
    }
  }
})