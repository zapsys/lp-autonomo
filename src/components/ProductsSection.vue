<template>
  <section id="produtos" class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        class="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl"
      >
        Nossos Produtos
      </h2>
      <div
        v-if="business.products.length"
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="product in business.products"
          :key="product.id"
          class="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <img
            v-if="product.image"
            :src="product.image"
            :alt="product.name"
            class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            v-else
            class="flex h-56 items-center justify-center bg-slate-100 text-slate-400"
          >
            Sem imagem
          </div>
          <div class="p-6">
            <h3 class="mb-2 text-xl font-semibold text-slate-900">
              {{ product.name }}
            </h3>
            <p class="mb-4 min-h-[3rem] text-slate-600 line-clamp-2">
              {{ product.description }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-[var(--primary)]">
                {{ formatCurrency(product.price) }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white"
      >
        <span class="text-slate-500"> Nenhum produto cadastrado </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { businessStore } from "../stores/businessStore";
import { formatCurrency } from "../utils/formatters";

const business = businessStore;
</script>
