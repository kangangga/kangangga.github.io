<template>
  <div class="absolute w-full h-full bg-slate-100">
    <section class="container text-center mt-9">
      <UserAvatar src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp">
        <template #name> {{ me.name }} </template>
        <template #slug> {{ me.slug }}</template>
      </UserAvatar>
    </section>
  </div>
</template>

<script setup>
const me = reactive({
  name: "Angga Saputra",
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
