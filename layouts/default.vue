<template>
  <div class="antialiased scroll-smooth">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
const me = reactive({
  name: "Angga Saputra",
  username: "@kangangga",
  description:
    "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun bekerja pada inisiatif pengembangan perangkat lunak yang kompleks. Saya bersemangat tentang pengembangan perangkat lunak dan saya menantikan untuk mengerjakan proyek baru dalam waktu dekat.",
  keywords:
    "angga saputra, angga, saputra, software, engineer, developer, fullstack, full-stack, full stack, web, mobile, mobile app, mobile application, mobile developer, mobile engineer, mobile software engineer, mobile software developer, mobile software developer engineer, mobile software developer engineer, mobile software developer engineer, mobile softwa",
});

useHead({
  title: me.name,
  meta: [
    { name: "description", content: me.description },
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
});

// useHead({
//   script: [
//     {
//       src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js",
//       body: true,
//     },
//   ],
// });
</script>
