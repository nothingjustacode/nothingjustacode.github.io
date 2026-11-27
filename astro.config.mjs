import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const USERNAME = 'njac';
const BASE = '/';

export default defineConfig({
  site: `https://${USERNAME}.github.io`,
  base: BASE,
  output: 'static',          // pure HTML/CSS/JS — GitHub Pages compatible
  compressHTML: true,
  integrations: [sitemap()], // generates sitemap-index.xml at build
});