import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel'
  },

  pinceau: {
    configFileName: 'tokens.config'
  },

  theme: '..',

  typescript: {
    includeWorkspace: true
  }
});
