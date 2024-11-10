import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://marianogarciagz.github.io/',

  output: 'static',
  format: 'directory',
  trailingSlash: 'never',
  integrations: [react(), sitemap({})],
})
