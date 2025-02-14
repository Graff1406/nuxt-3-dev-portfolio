// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "@nuxt/image"],

  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],

  compatibilityDate: "2025-01-29",
  image: {
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
