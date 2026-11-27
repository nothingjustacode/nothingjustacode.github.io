import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const USERNAME = 'njac';
const BASE = '/';

export default defineConfig({
  site: `https://${USERNAME}.github.io`,
  base: BASE,
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()], 
});