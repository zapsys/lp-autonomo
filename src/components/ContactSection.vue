<template>
  <section id="contato" class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-3xl font-bold text-slate-900">
        {{ business.contactTitle || "Fale Conosco" }}
      </h2>
      <div class="mt-6 grid gap-10 lg:grid-cols-2">
        <!-- Informações -->
        <div class="flex flex-col items-center justify-center space-y-6 text-center lg:items-start lg:text-left">
          <p class="text-slate-600">
            {{
              business.contactDescription ||
              "Entre em contato conosco para solicitar orçamentos, encomendas e tirar dúvidas."
            }}
          </p>
          <div class="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a :href="getWhatsAppLink(business.whatsapp)" target="_blank"
              class="inline-flex items-center rounded-xl bg-green-600 px-6 py-3 font-medium text-white shadow-md transition hover:-translate-y-1 hover:bg-green-700">
              📱 WhatsApp
            </a>
            <a :href="getInstagramLink(business.instagram)" target="_blank"
              class="inline-flex items-center rounded-xl bg-(--primary) px-6 py-3 font-medium text-white shadow-md transition hover:-translate-y-1 hover:bg-(--primary-dark)">
              📷 Instagram
            </a>
          </div>
        </div>
        <!-- Mapa / Placeholder -->
        <div class="flex justify-center lg:justify-start">
          <div v-if="business.mapUrl" class="w-full overflow-hidden rounded-xl shadow-lg" v-html="business.mapUrl">
          </div>
          <div v-else
            class="flex h-64 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white">
            <span class="text-slate-500">
              Mapa da localização
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(iframe) {
  width: 100%;
  height: 400px;
  border: 0;
  display: block;
}

@media (max-width: 1024px) {
  :deep(iframe) {
    height: 320px;
  }
}

@media (max-width: 640px) {
  :deep(iframe) {
    height: 280px;
  }
}
</style>

<script setup>
import { businessStore } from "../stores/businessStore";
import { getWhatsAppLink, getInstagramLink } from "../utils/links";

const business = businessStore;
</script>
