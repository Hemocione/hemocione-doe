export default defineNuxtConfig({
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-vercel-analytics",
    "@nuxtjs/tailwindcss",
  ],

  nitro: {
    preset: "vercel-edge",
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  css: ["~/assets/css/global.css", "~/assets/css/transitions.css"],

  googleFonts: {
    families: {
      Roboto: true,
    },
  },

  app: {
    pageTransition: {
      name: "slide-left",
      mode: "out-in",
      appear: true,
    },
    layoutTransition: {
      name: "slide-left",
      mode: "out-in",
    },
  },

  image: {
    domains: ["cdn.hemocione.com.br"],
    alias: {
      cdn: "https://cdn.hemocione.com.br",
    },
  },

  compatibilityDate: "2024-09-12",
});