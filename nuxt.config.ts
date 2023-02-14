const me = {
  name: "Angga Saputra",
  title: "Angga Saputra",
  username: "@kangangga",
  description:
    "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun bekerja pada inisiatif pengembangan perangkat lunak yang kompleks. Saya bersemangat tentang pengembangan perangkat lunak dan saya menantikan untuk mengerjakan proyek baru dalam waktu dekat.",
  keywords:
    "angga saputra, angga, saputra, software engineer, software, developer, fullstack, full-stack, web, mobile, mobile app, mobile application, mobile developer, mobile engineer, mobile software engineer, mobile software developer, mobile software developer engineer",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: me.name,
  description: me.description,
  givenName: "Angga",
  familyName: "Saputra",
  gender: "Male",
  sameAs: "https://orcid.org/0000-0001-7794-2993",
  url: "https://kangangga.github.io",
  image: "https://kangangga.github.io/img/angga.png",
  email: "masangga.com@gmail.com",
};

const jsonLdImageObject = {
  "@context": "https://schema.org/",
  "@type": "ImageObject",
  contentUrl: "https://kangangga.github.io/img/angga.png",
  license: "https://kangangga.github.io/license",
  acquireLicensePage: "https://kangangga.github.io/how-to-use-my-images",
  creditText: me.name,
  creator: {
    "@type": "Person",
    name: me.name,
    description: me.description,
    givenName: "Angga",
    familyName: "Saputra",
    gender: "Male",
    sameAs: "https://orcid.org/0000-0001-7794-2993",
    url: "https://kangangga.github.io",
    image: "https://kangangga.github.io/img/angga.png",
    email: "masangga.com@gmail.com",
  },
  name: me.name,
};

const jsonLdLogo = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://kangangga.github.io",
  logo: "https://kangangga.github.io/img/angga.png",
};

export default defineNuxtConfig({
  ssr: false,
  css: [
    // "~/assets/css/main.css",
    // ...
  ],
  plugins: [
    // ...
  ],
  modules: ["nuxt-security", "@kevinmarrec/nuxt-pwa", "@nuxtjs/tailwindcss"],

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      title: me.name,
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        { name: "keywords", content: me.keywords },
        // { name: "description", content: me.description },
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
        // { property: "og:url", content: "https://kangangga.github.io" },
        // { property: "og:type", content: "website" },
        // { property: "og:title", content: me.title },
        // {
        //   property: "og:image",
        //   content: "https://kangangga.github.io/img/angga.png",
        // },
        // { property: "og:description", content: me.description },
        // { name: "twitter:card", content: "summary" },
        // { name: "twitter:site", content: me.username },
        // { name: "twitter:creator", content: me.username },
        // { name: "twitter:description", content: me.description },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
        { rel: "canonical", href: "https://kangangga.github.io" },
        // ...
      ],
      script: [
        {
          type: "application/ld-json",
          children: JSON.stringify(jsonLdPerson),
        },
        {
          type: "application/ld-json",
          children: JSON.stringify(jsonLdImageObject),
        },
        {
          type: "application/ld-json",
          children: JSON.stringify(jsonLdLogo),
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
      theme: {
        extend: {},
      },
    },
  },
  pwa: {
    workbox: {
      // enabled: import.meta.env.PROD ? true : false,
      enabled: process.env.NODE_ENV === "development" ? false : true,
    },
    icon: {
      fileName: "./img/icon.webp",
    },
    meta: {
      lang: "id",
      name: me.name,
      author: me.name,
      description: me.description,
      ogHost: "https://kangangga.github.io",
      ogImage: {
        path: "/img/angga.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
      ogSiteName: me.name,
      ogTitle: me.title,
      ogDescription: me.description,
      ogUrl: "https://kangangga.github.io",
      twitterCard: "summary",
      twitterSite: me.username,
      twitterCreator: me.username,
    },
    manifest: {
      lang: "id",
      name: me.name,
      short_name: "Angga",
      description: me.description,
      theme_color: "#4285f4",
      background_color: "#ffffff",
      categories: ["portofolio", "personal", "developer"],
    },
  },
  security: {
    enabled: true,
    hidePoweredBy: true,

    // Other options
  },
});
