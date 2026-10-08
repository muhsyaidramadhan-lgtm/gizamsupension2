import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Ganti 'gizamsupension' sesuai NAMA REPO GitHub kamu
// URL jadi: https://USERNAME.github.io/gizamsupension/
const REPO_NAME = 'gizamsupension';

export default defineConfig({
  // Wajib untuk GitHub Pages (project site di subdirectory)
  base: process.env.GITHUB_PAGES === 'true' ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
