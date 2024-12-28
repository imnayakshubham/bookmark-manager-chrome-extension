import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  ssr: {
    noExternal: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
