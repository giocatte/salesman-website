// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
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
        rules: [{
          userAgent: "*",
          allow: "/",
        }],
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
