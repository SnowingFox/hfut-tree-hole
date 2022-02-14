import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, basename } from 'path'

function resolve(dir: string): string {
  return join(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@scss': resolve('src/assets/scss'),
    },
  },
})
