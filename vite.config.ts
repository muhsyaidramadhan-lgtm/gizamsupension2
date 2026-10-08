import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// Nama repo GitHub kamu = gizamsupension2
// URL: https://muhsyairamadhan-lgtm.github.io/gizamsupension2/
const REPO_NAME = 'gizamsupension2';

export default defineConfig({
  // Wajib untuk GitHub Pages project site
  base: `/${REPO_NAME}/`,
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
