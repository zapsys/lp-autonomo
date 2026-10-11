<template>
  <section id="galeria" class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        class="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl"
      >
        Galeria
      </h2>
      <div
        v-if="business.gallery.length"
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(image, index) in business.gallery"
          :key="index"
          class="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            :src="image"
            :alt="`Imagem ${index + 1}`"
            class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div
        v-else
        class="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50"
      >
        <span class="text-slate-500"> Nenhuma foto cadastrada </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { businessStore } from "../stores/businessStore";

const business = businessStore;
</script>
