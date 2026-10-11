<template>
  <div class="relative">
    <label
      class="block cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-(--primary)"
    >
      <input type="file" accept="image/*" hidden @change="onFileChange" />

      <img
        v-if="preview"
        :src="preview"
        alt="Preview"
        class="h-56 w-full object-cover"
      />

      <div v-else class="flex h-56 items-center justify-center">
        <div class="text-center">
          <div class="mb-2 text-4xl">📷</div>

          <div class="text-slate-500">Clique para selecionar uma imagem</div>
        </div>
      </div>
    </label>
    <!-- Botão remover -->
    <button
      v-if="preview"
      type="button"
      class="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white shadow-md transition hover:bg-red-600"
      @click="removeImage"
    >
      ✕
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "change", "remove"]);

const preview = computed(() => props.modelValue);

function onFileChange(event) {
  const file = event.target.files?.[0];

  if (!file) return;

  emit("change", file);
}

function removeImage() {
  emit("update:modelValue", "");
  emit("remove");
}
</script>
