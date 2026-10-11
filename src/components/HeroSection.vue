<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-gradient-to-b from-[var(--primary-light)] via-white to-white"
  >
    <!-- Efeito de fundo -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.15),transparent_60%)]"
    ></div>
    <div
      class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div class="mx-auto max-w-4xl text-center">
        <span
          class="inline-flex rounded-full bg-[var(--primary-light)] mb-3 px-4 py-2 text-sm font-medium text-[var(--primary)] border border-[var(--primary)] shadow-sm transition hover:bg-[var(--primary)] hover:text-white"
        >
          {{ business.heroBadge || "Confeitaria Artesanal" }}
        </span>
        <img
          v-if="business.logo"
          :src="business.logo"
          alt="Logo"
          class="mx-auto my-4 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
        />
        <h1
          class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          {{ business.heroTitle || "Doces Feitos com Amor" }}
        </h1>
        <p
          class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          {{
            business.heroSubtitle ||
            "Bolos, doces e sobremesas preparados com ingredientes selecionados e muito carinho."
          }}
        </p>
        <div
          v-if="business.city"
          class="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-500 shadow-sm"
        >
          📍 {{ business.city }}
        </div>
        <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            :href="getWhatsAppLink(business.whatsapp)"
            target="_blank"
            class="rounded-xl bg-[var(--primary)] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[var(--primary-dark)]"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#produtos"
            class="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-slate-50"
          >
            Ver Produtos
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { businessStore } from "../stores/businessStore";
import { getWhatsAppLink } from "../utils/links";

const business = computed(() => businessStore);
</script>
