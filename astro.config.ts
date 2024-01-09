import { defineConfig } from 'astro/config'

// Import Astro integrations
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({ include: { mdi: ['*'] } }),
    sitemap(),
    tailwind(),
  ],
  // The production site will be hosted here
  site: 'https://execut.nl/',
})
