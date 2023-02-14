<template>
  <div id="pdf-viewer" class="flex justify-center">
    <iframe
      ref="iframe"
      class="h-screen w-full"
      :src="src"
      @load="frameLoaded"
    />

    <div class="fixed inset-x-50 bottom-4">
      <NuxtLink
        to="/"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Kembali
      </NuxtLink>
      <button
        type="button"
        @click="onDownload"
        class="py-2 mr-2 mb-2 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
      >
        Download
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const iframe = ref(null);
const loading = ref(true);

function onDownload() {
  const link = document.createElement("a");
  link.href = props.src;
  link.download = "cv-angga.pdf";
  link.dispatchEvent(new MouseEvent("click"));
  link.remove();
}

function frameLoaded(el) {
  loading.value = false;
}
</script>

<style lang="scss" scoped>
#pdf-viewer {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  overflow: auto;
}
</style>
