// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/capabilities': '/services',
    '/use-cases': '/',
    '/facilities': '/contact',
    '/documentation': '/',
    '/rfq': '/contact',
  },
});