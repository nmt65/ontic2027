import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: process.env.SITE_URL || 'https://ontic2027.example.ro',
  i18n: { defaultLocale: 'ro', locales: ['ro', 'en'], routing: { prefixDefaultLocale: true } },
  integrations: [],
  vite: { plugins: [tailwindcss()] }
});
