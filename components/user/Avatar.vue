<template>
  <div>
    <img
      :src="src"
      class="rounded-full w-32 mb-4 mx-auto shadow-lg shadow-blue-200"
      alt="Avatar"
    />
    <slot>
      <h5 class="text-xl font-medium leading-tight mb-1">
        <slot name="name" />
      </h5>
      <p class="text-gray-500">
        <slot name="slug" />
      </p>
    </slot>
  </div>
</template>

<script setup>
defineProps(["src"]);
</script>
