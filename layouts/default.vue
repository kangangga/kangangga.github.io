<template>
  <div class="antialiased scroll-smooth">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js"></script> -->
    </Head>

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
  ogImage: "/angga.png",
  twitterCard: "summary_large_image",
  icon: "/favicon.ico",
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
