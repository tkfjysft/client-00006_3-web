// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  //   base: '/single/',
  outDir: './dist',

  site: 'https://sws.studio-condor.com/',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});