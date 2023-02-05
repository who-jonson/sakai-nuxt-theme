import { defineNuxtConfig } from 'nuxt/config';
import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      meta: [
        { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },

  build: {
    transpile: [
      'chart.js',
      'primevue'
    ]
  },

  css: [
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    'prismjs/themes/prism-coy.css',
    resolve('./assets/styles/layout.scss'),
    resolve('./assets/demo/flags/flags.css')
  ],

  experimental: {
    reactivityTransform: true,
    treeshakeClientOnly: true
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    resolve('./modules/sakai-nuxt')
  ],

  plugins: [
    resolve('./plugins/primevue')
  ],

  vite: {
    build: {
      sourcemap: false
    }
  }
});
