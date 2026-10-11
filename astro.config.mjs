// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Ensures sitemap.xml is generated directly at /sitemap.xml in dist
 * while maintaining compatibility with sitemap-index.xml
 */
function sitemapXmlAliasIntegration() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const indexPath = path.join(distPath, 'sitemap-index.xml');
        const sitemapPath = path.join(distPath, 'sitemap.xml');
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, sitemapPath);
          console.log('[sitemap-xml-alias] Successfully created dist/sitemap.xml from sitemap-index.xml');
        }
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://moazzamshoukat.com',
  trailingSlash: 'ignore',
  output: 'static',
  outDir: './dist',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        // Do not use artificial priority or change-frequency values as an SEO shortcut
        delete item.priority;
        delete item.changefreq;
        return item;
      }
    }),
    sitemapXmlAliasIntegration()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
