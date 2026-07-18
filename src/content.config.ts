import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/home" }),
  // 構造がバラバラなJSONを許容するための定義
  schema: z.any(),
});

export const collections = { home };