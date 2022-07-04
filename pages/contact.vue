<template>
  <div class="absolute w-full h-full bg-slate-100">
    <section class="container text-center mt-9"></section>
  </div>
</template>

<script setup>
const me = reactive({
  name: "Angga Saputra - Kontak",
  slug: "@kangangga",
  description: "",
});

useHead({
  title: me.name,
  meta: [
    {
      name: "description",
      content: me.description,
    },
  ],
});
</script>
