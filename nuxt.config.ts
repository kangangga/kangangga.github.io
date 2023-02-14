// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    // "~/assets/css/main.css",
    // ...
  ],
  plugins: [
    // ...
  ],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        // <meta name="description" content="My amazing site">
        // { name: "description", content: "My amazing site." },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
        { rel: "canonical", href: "https://kangangga.github.io" },
        // ...
      ],
    },
  },
});
