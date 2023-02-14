<template>
  <div class="flex items-center justify-center h-screen bg-slate-100 flex-wrap">
    <section class="max-w-md justify-center">
      <div class="text-center">
        <img
          alt="Angga Saputra"
          src="~/assets/img/angga.webp"
          class="bg-white rounded-xl mb-4 mx-auto shadow-lg shadow-blue-200"
          width="200"
        />
        <!-- h-52 w-36  -->
        <h5 class="text-xl font-medium leading-tight mb-1">{{ me.name }}</h5>

        <a href="https://github.com/kangangga" class="text-slate-700">
          {{ me.slug }}
        </a>

        <div>
          <p class="text-slate-800 mt-4 text-sm md:text-base">
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
});
</script>
