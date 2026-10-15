// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const retiredPaths = [
  '/pte-coaching',
  '/naati-ccl-urdu',
  '/australia-immigration',
  '/skills-assessment-australia',
  '/immigration',
  '/english-training',
  '/education-research'
];

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
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  output: 'static',
  outDir: './dist',
  redirects: {
    '/pte-coaching/': '/online-pte-classes/',
    '/naati-ccl-urdu/': '/naati-ccl-urdu-preparation/',
    '/australia-immigration/': '/australia-skilled-migration/',
    '/skills-assessment-australia/': '/skill-assessment-guidance/',
    '/immigration/': '/services/',
    '/english-training/': '/services/',
    '/education-research/': '/research/'
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (page.includes('/404')) return false;
        try {
          const url = new URL(page);
          const cleanPath = url.pathname.replace(/\/$/, '');
          return !retiredPaths.includes(cleanPath);
        } catch {
          return true;
        }
      },
      serialize(item) {
        delete item.priority;
        delete item.changefreq;
        item.lastmod = new Date().toISOString();
        return item;
      }
    }),
    sitemapXmlAliasIntegration()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
