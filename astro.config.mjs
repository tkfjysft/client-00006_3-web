// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './dist',
  // すべてのアセット参照を相対パス（./）にする
  base: './',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
});