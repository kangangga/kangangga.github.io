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
});
