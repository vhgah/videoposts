// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'

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
      //
    ],
  },
  devToolbar: {
    enabled: false,
  },
})
