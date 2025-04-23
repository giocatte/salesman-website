// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Andrea Tognon",
      titleTemplate: "%s - Andrea Tognon",
      htmlAttrs: {
        lang: "it",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Andrea Tognon Rivenditore Autorizzato Polin" },
        { name: "author", content: "Andrea Tognon" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://andreatognon.it" },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  runtimeConfig: {
    public: {
      sitemap: {
        siteUrl: "https://andreatognon.it",
      },
      robots: {
        rules: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
        sitemap: "https://andreatognon.it/sitemap.xml",
      },
    },
  },

  googleFonts: {
    families: {
      Roboto: true,
      Inter: "200..700",
      "Nunito+Sans": "200..900",
    },
    display: "swap",
  },
  devServer: {
    host: "0.0.0.0", // Accetta connessioni da qualsiasi IP
  },
});
