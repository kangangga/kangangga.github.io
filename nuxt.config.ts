const me = {
  name: "Angga Saputra",
  title: "Angga Saputra",
  username: "@kangangga",
  description:
    "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun bekerja pada inisiatif pengembangan perangkat lunak yang kompleks. Saya bersemangat tentang pengembangan perangkat lunak dan saya menantikan untuk mengerjakan proyek baru dalam waktu dekat.",
  keywords:
    "angga saputra, angga, saputra, software engineer, software, developer, fullstack, full-stack, web, mobile, mobile app, mobile application, mobile developer, mobile engineer, mobile software engineer, mobile software developer, mobile software developer engineer",
};

export default defineNuxtConfig({
  // ssr: false,
  css: [
    // "~/assets/css/main.css",
    // ...
  ],
  plugins: [
    // ...
  ],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      title: me.name,
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        { name: "description", content: me.description },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#4285f4",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#4285f4",
        },
        {
          name: "google-site-verification",
          content: "077gzx1Lk-1iZJlyBEudhUr0JlQpVmxHR9BbcSpXk6E",
        },
        {
          name: "keywords",
          content: me.keywords,
        },
        { property: "og:url", content: "https://kangangga.github.io" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: me.title },
        {
          property: "og:image",
          content: "https://kangangga.github.io/img/angga.png",
        },
        { property: "og:description", content: me.description },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: me.username },
        { name: "twitter:creator", content: me.username },
        { name: "twitter:description", content: me.description },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
        { rel: "canonical", href: "https://kangangga.github.io" },
        // ...
      ],
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {},
      },
    },
  },
});
