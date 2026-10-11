<template>
  <div class="space-y-4">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Imagens -->
      <div v-for="(image, index) in modelValue" :key="index"
        class="relative aspect-square overflow-hidden rounded-2xl border border-slate-200">
        <img :src="image" :alt="`Imagem ${index + 1}`" :title="`Imagem ${index + 1}`"
          class="h-full w-full object-cover" />

        <button type="button"
          class="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-600"
          @click="removeImage(index)">
          ✕
        </button>
      </div>
      <!-- Adicionar Nova -->
      <label
        class="group relative flex aspect-square w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition-all hover:border-(--primary) hover:bg-slate-100">
        <input hidden multiple type="file" accept="image/*" @change="onFilesSelected" />

        <div class="flex flex-col items-center justify-center text-center">
          <div class="text-6xl font-light text-slate-400 transition group-hover:text-(--primary)">
            +
          </div>

          <span class="mt-2 text-sm font-medium text-slate-500">
            Adicionar imagens
          </span>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

function removeImage(index) {
  const images = [...props.modelValue];

  images.splice(index, 1);

  emit("update:modelValue", images);
}

function onFilesSelected(event) {
  const files = [...event.target.files];

  emit("change", files);

  event.target.value = "";
}
</script>
