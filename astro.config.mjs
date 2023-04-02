import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://AstroBuild.tips',
  integrations: [tailwind(), mdx(), react(), vue()],
});
