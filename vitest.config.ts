import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const alias = {
  '~': resolve(__dirname, './'),
  '@': resolve(__dirname, './'),
};

export default defineConfig({
  resolve: { alias },
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
  },
});