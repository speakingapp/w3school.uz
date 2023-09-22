import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  integrations: [tailwind(), mdx()],
  output: 'static',
  adapter: vercelStatic()
});