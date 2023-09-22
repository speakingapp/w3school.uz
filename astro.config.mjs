import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [tailwind(), mdx()],
  adapter: vercel()
});