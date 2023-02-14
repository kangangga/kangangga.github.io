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
  slug: "@kangangga",
  description:
    "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun bekerja pada inisiatif pengembangan perangkat lunak yang kompleks. Saya bersemangat tentang pengembangan perangkat lunak dan saya menantikan untuk mengerjakan proyek baru dalam waktu dekat.",
});
useServerSeoMeta({
  title: () => me.name,
  ogTitle: () => me.name,
  description: () => `${me.description}`,
  ogDescription: () => `${me.description}`,
  twitterCard: "summary_large_image",
  ogImage: "https://kangangga.github.io/img/angga.png",
  // icon: "https://kangangga.github.io/img/favicon.ico",
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
