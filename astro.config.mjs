import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: process.env.SITE_URL || 'https://ontic2027.vercel.app',
  i18n: { defaultLocale: 'ro', locales: ['ro', 'en'], routing: { prefixDefaultLocale: true } },
  integrations: [],
  vite: { plugins: [tailwindcss()] }
});


