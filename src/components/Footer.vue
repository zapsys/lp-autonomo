<template>
  <footer class="mt-16 border-t border-slate-200 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6 text-center">
        <!-- Nome da empresa -->
        <div class="flex flex-col items-center gap-2">
          <img
              v-if="business.logo"
              :src="business.logo"
              alt="Logo"
              class="h-16 w-16 rounded-full object-cover"
            />
          <h3 class="text-xl font-bold text-[var(--primary)]">
            {{ business.name || "Minha Confeitaria" }}
          </h3>
          <p class="mt-2 text-slate-600">
            <span>📍</span> {{ business.city || "Atendimento em toda a região" }}
          </p>
        </div>
        <!-- Direitos -->
        <div class="flex align-items items-center gap-4 border-t border-slate-200 pt-4 text-sm text-slate-500">
          © {{ new Date().getFullYear() }} {{ business.name || "Minha Confeitaria" }}. Todos os direitos reservados.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { businessStore } from "../stores/businessStore";
import { getInstagramLink, getWhatsAppLink } from "../utils/links";

const business = businessStore;
</script>
