<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm relative"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-shrink-1 mr-auto ml-0 pl-0">
          <a href="/" class="flex items-center gap-3">
            <img
              v-if="business.logo"
              :src="business.logo"
              alt="Logo"
              class="h-10 w-10 rounded-full object-cover"
            />
            <span class="text-xl font-bold text-[var(--primary)]">{{
              business.name || "Confeitaria"
            }}</span>
          </a>
        </div>
        <div class="hidden md:flex md:space-x-8 px-4">
          <a
            href="#hero"
            class="text-gray-500 hover:text-[var(--primary)]"
            :class="menuLinkClass('hero')"
            >Início</a
          >
          <a
            href="#sobre"
            class="text-gray-500 hover:text-[var(--primary)]"
            :class="menuLinkClass('sobre')"
            >Sobre</a
          >
          <a
            href="#produtos"
            class="text-gray-500 hover:text-[var(--primary)]"
            :class="menuLinkClass('produtos')"
            >Produtos</a
          >
          <a
            href="#galeria"
            class="text-gray-500 hover:text-[var(--primary)]"
            :class="menuLinkClass('galeria')"
            >Galeria</a
          >
          <a
            href="#contato"
            class="text-gray-500 hover:text-[var(--primary)]"
            :class="menuLinkClass('contato')"
            >Contato</a
          >
        </div>
        <!-- Botão Mobile -->
        <div class="md:hidden">
          <button
            type="button"
            class="text-slate-500 hover:text-[var(--primary)]"
            @click="menuOpen = !menuOpen"
          >
            <!-- Hamburguer -->
            <svg
              v-if="!menuOpen"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- X -->
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <!-- Menu Mobile -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="menuOpen"
              class="absolute left-0 right-0 text-center top-full border-t border-slate-200 bg-white shadow-lg md:hidden"
            >
              <div class="flex flex-col space-y-4">
                <a
                  href="#hero"
                  @click="closeMenu"
                  :class="menuLinkClass('hero')"
                  >Início</a
                >
                <a
                  href="#sobre"
                  @click="closeMenu"
                  :class="menuLinkClass('sobre')"
                  >Sobre</a
                >
                <a
                  href="#produtos"
                  @click="closeMenu"
                  :class="menuLinkClass('produtos')"
                  >Produtos</a
                >
                <a
                  href="#galeria"
                  @click="closeMenu"
                  :class="menuLinkClass('galeria')"
                  >Galeria</a
                >
                <a
                  href="#contato"
                  @click="closeMenu"
                  :class="menuLinkClass('contato')"
                  >Contato</a
                >
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { businessStore } from "../stores/businessStore";

const business = businessStore;

const menuOpen = ref(false);
const activeSection = ref("hero"); // Default to hero section

let observer;

onMounted(() => {
  const sections = document.querySelectorAll("[id]");
  console.log("Sections found:", sections.length);
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  sections.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

function closeMenu() {
  menuOpen.value = false;
}
function menuLinkClass(section) {
  return [
    "border-b-2 pb-1 transition-all duration-200",
    activeSection.value === section
      ? "font-bold border-[var(--primary)] link:text-[var(--primary)]"
      : "border-transparent text-slate-600 hover:text-[var(--primary)]",
  ];
}
</script>
