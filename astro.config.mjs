// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
    port: 4322,
    allowedHosts: [
      'videoposts.docker',
      'videoposts.org',
      'https://videoposts.org',
    ],
  },
  devToolbar: {
    enabled: false,
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    //
  },
})
