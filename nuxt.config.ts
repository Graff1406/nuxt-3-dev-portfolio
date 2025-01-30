// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css', '~/assets/css/google-fonts.css'],

  icon: {
    customCollections: [
      {
        prefix: 'app-icon',
        dir: './assets/icons'
      },
    ],
  },

  compatibilityDate: '2025-01-29',
})