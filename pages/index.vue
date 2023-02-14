<template>
  <div class="flex items-center justify-center h-screen bg-slate-100 flex-wrap">
    <section class="max-w-md justify-center">
      <div class="text-center">
        <img
          alt="Angga Saputra"
          src="~/assets/img/angga.webp"
          class="bg-white rounded-xl mb-4 mx-auto shadow-lg shadow-blue-200"
          width="200"
          height="280"
        />
        <!-- h-52 w-36  -->
        <h5 class="text-xl font-medium leading-tight mb-1">{{ me.name }}</h5>

        <a href="https://github.com/kangangga" class="text-slate-700">
          {{ me.slug }}
        </a>

        <div>
          <p class="text-slate-800 mt-4 text-sm md:text-base px-2">
            “Profesional IT yang berorientasi detail dengan pengalaman 8 tahun
            sebagai software engineer specialist dan system/network engineer.”
          </p>
        </div>

        <div class="mt-3">
          <NuxtLink
            to="/cv"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Download CV
          </NuxtLink>
        </div>

        <!-- <div>
          <embed src="/cv-angga.pdf" width="1440px" height="900px" />
        </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>
const me = reactive({
  name: "Angga Saputra",
  slug: "@kangangga",
  description:
    "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun bekerja pada inisiatif pengembangan perangkat lunak yang kompleks. Saya bersemangat tentang pengembangan perangkat lunak dan saya menantikan untuk mengerjakan proyek baru dalam waktu dekat.",
});

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

useHead({
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
});
</script>
