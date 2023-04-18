import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')


// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: '/Sr.Massas/',
  plugins: [reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        profs: resolve(root, 'cardapio', 'index.html'),
      }
    }
  }
})
