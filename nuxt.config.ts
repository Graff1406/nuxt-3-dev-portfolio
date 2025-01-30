// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css', '~/assets/css/google-fonts.css', '~/assets/css/tailwind.css'],

  compatibilityDate: '2025-01-29',
})