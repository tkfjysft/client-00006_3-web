// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  outDir: './dist',
  // ★ここを追加：アセットやリンクの参照をすべて相対パスにする
  base: './',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    // デモ側のアセット出力フォルダ名を「_demo-assets」に変更する
    assets: '_demo-assets',
  },
  output: 'static',
});