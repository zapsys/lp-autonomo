<template>
  <section id="sobre" class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        class="mb-6 text-center text-3xl font-bold text-slate-900 md:text-4xl"
      >
        {{ business.aboutTitle || "Sobre Nós" }}
      </h2>
      <p
        class="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-600"
      >
        {{
          business.aboutDescription ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }}
      </p>
      <!-- Fotos -->
      <div
        v-if="business.aboutImages?.length"
        class="mb-12 grid gap-6 md:grid-cols-3"
      >
        <img
          v-for="(image, index) in business.aboutImages"
          :key="index"
          :src="image"
          :alt="`Sobre nós ${index + 1}`"
          class="h-64 w-full rounded-2xl object-cover shadow-md transition duration-300 hover:scale-[1.02]"
        />
      </div>
      <!-- Diferenciais -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in business.aboutFeatures"
          :key="feature.id"
          class="overflow-hidden rounded-2xl bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div v-if="feature.image">
            <img
              :src="feature.image"
              :alt="feature.title"
              class="h-48 w-full object-cover"
            />
          </div>
          <div
            v-else
            class="flex h-48 items-center border-2 border-dashed border-slate-300 justify-center bg-slate-100"
          >
            <span class="text-slate-400"> Sem imagem </span>
          </div>
          <div class="p-6">
            <h3 class="mb-3 text-xl font-semibold text-slate-900">
              {{ feature.title }}
            </h3>

            <p class="text-slate-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { businessStore } from "../stores/businessStore";

const business = computed(() => businessStore);
</script>
