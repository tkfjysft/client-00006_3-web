// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './dist',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static', // これだけでOK
});