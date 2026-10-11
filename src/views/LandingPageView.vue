<template>
  <div class="landing-page">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { businessStore, updateBusinessStore } from "../stores/businessStore";
import { loadBusinessData } from "../utils/loadBusinessData.js";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProductsSection from "../components/ProductsSection.vue";
import GallerySection from "../components/GallerySection.vue";
import ContactSection from "../components/ContactSection.vue";

// Aceita a prop "preview" para indicar se é uma pré-visualização ou não
const props = defineProps({
  preview: {
    type: Boolean,
    default: false,
  },
});
onMounted(async () => {
  const exportedData =
    await loadBusinessData();

  if (exportedData) {
    updateBusinessStore(
      exportedData
    );
  }
});
</script>
