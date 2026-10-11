<template>
  <div class="min-h-screen bg-slate-50">
    <div class="mx-auto max-w-screen-2xl px-4 py-4 md:py-8">
      <h1 class="mb-8 text-center text-3xl font-bold text-slate-800">
        Preencha seus dados e veja seu site tomar forma!
      </h1>
      <ThemeSelector />
      <div class="my-6">
        <ProgressBar :percent="(business.step * 50) / 3" />
      </div>
      <div class="grid gap-6 md:grid-cols-[380px_1fr] lg:grid-cols-[450px_1fr]">
        <!-- Formulário -->
        <div class="rounded-2xl bg-white p-6 shadow-lg">
          <template v-if="business.step === 1">
            <h2 class="mb-4 text-2xl font-semibold">Dados da Confeitaria</h2>
            <BaseInput v-model="business.name" placeholder="Nome" required :error="errors.name" />
            <BaseInput v-model="business.city" placeholder="Cidade" required :error="errors.city" />
            <BaseInput v-model="business.heroBadge" placeholder="Selo ou slogan curto" :error="errors.heroBadge" />
            <BaseInput v-model="business.heroTitle" placeholder="Título principal" :error="errors.heroTitle" />
            <BaseTextarea v-model="business.heroSubtitle" placeholder="Subtítulo da landing page" :rows="2"
              :error="errors.heroSubtitle" />
            <h2 class="mb-4 text-2xl font-semibold">Logotipo</h2>
            <BaseImageUpload v-model="business.logo" accept="image/png,image/jpeg,image/svg+xml" @change="uploadLogo" />
            <p class="mt-2 text-sm text-slate-500">
              Recomendado: imagem quadrada PNG ou SVG com fundo transparente.
            </p>
          </template>
          <template v-if="business.step === 2">
            <h2 class="mb-4 text-2xl font-semibold">Contato</h2>
            <BaseInput v-model="whatsappMasked" placeholder="WhatsApp" :error="errors.whatsapp" />
            <BaseInput v-model="business.instagram" placeholder="Instagram" :error="errors.instagram" />
            <BaseInput v-model="business.contactTitle" placeholder="Título da seção de contato"
              :error="errors.contactTitle" />
            <BaseTextarea v-model="business.contactDescription" placeholder="Texto que será exibido na seção de contato"
              :rows="4" :error="errors.contactDescription" />
            <BaseTextarea v-model="business.mapUrl" placeholder="Cole a URL ou iframe do Google Maps" :rows="2" />
            <div label="Mapa de localização" v-if="business.mapUrl"
              class="mt-2 border border-slate-200 bg-slate-50 p-4 text-center text-slate-500 overflow-hidden rounded-xl shadow-md"
              v-html="business.mapUrl"></div>
          </template>
          <template v-if="business.step === 3">
            <h2 class="mb-4 text-2xl font-semibold">Sobre o Negócio</h2>
            <BaseInput v-model="business.aboutTitle" placeholder="Título da seção" :error="errors.aboutTitle" />
            <BaseTextarea v-model="business.aboutDescription" placeholder="Conte um pouco sobre seu negócio..."
              :rows="4" :error="errors.aboutDescription" />
            <div class="mt-8">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="text-lg font-semibold">Diferenciais</h3>
              </div>
              <div v-for="feature in business.aboutFeatures" :key="feature.id"
                class="mb-4 rounded-xl border border-slate-200 p-4">
                <div class="mb-3 flex justify-end">
                  <button type="button"
                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
                    @click="removeFeature(feature.id)">
                    ✕
                  </button>
                </div>
                <div class="space-y-4">
                  <BaseInput v-model="feature.title" placeholder="Título" />
                  <BaseTextarea v-model="feature.description" placeholder="Descrição" />
                  <BaseImageUpload v-model="feature.image" accept="image/*"
                    @change="(file) => uploadFeatureImage(file, feature)" />
                </div>
              </div>
            </div>
            <button type="button" @click="addFeature"
              class="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-(--primary) bg-white py-4 font-medium text-(--primary) transition-all hover:bg-(--primary-light) hover:shadow-md">
              <span class="text-xl">+</span>
              Adicionar Diferencial
            </button>
          </template>
          <template v-if="business.step === 4">
            <h2 class="mb-6 text-2xl font-semibold">Produtos</h2>
            <div v-if="!business.products.length"
              class="mb-6 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center">
              <div class="mb-2 text-4xl">🍰</div>
              <p class="text-slate-500">Nenhum produto cadastrado</p>
            </div>
            <div v-for="(product, index) in business.products" :key="product.id"
              class="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="font-medium text-slate-700">
                  Produto {{ index + 1 }}
                </h3>
                <button type="button"
                  class="flex h-8 w-8 items-center justify-center cursor-pointer rounded-full bg-black/70 text-white shadow-md transition hover:bg-red-600"
                  @click="removeProduct(product.id)">
                  ✕
                </button>
              </div>
              <div class="space-y-4">
                <BaseInput v-model="product.name" placeholder="Nome do produto" />
                <BaseTextarea v-model="product.description" placeholder="Descrição" />
                <BaseInput :model-value="product.price" placeholder="Preço"
                  @update:model-value="(value) => updatePrice(product, value)" />
                <BaseImageUpload v-model="product.image" accept="image/*" @change="(file) => uploadImage(file, product)"
                  placeholder="Selecione uma imagem para o produto" />
              </div>
            </div>
            <!-- Botão após o último produto -->
            <button type="button" @click="addProduct"
              class="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-(--primary) bg-white py-4 font-medium text-(--primary) transition-all hover:bg-(--primary-light) hover:shadow-md">
              <span class="text-xl">+</span>
              Adicionar Produto
            </button>
          </template>
          <template v-if="business.step === 5">
            <h2 class="mb-4 text-2xl font-semibold">Galeria de Fotos</h2>
            <BaseImageUploadMultiple v-model="business.gallery" @change="uploadGalleryImages" />
          </template>
          <template v-if="business.step === 6">
            <h2 class="mb-4 text-2xl font-semibold">Finalizar</h2>
            <button @click="saveAndPreview"
              class="gap-2 mb-2 rounded-2xl border-2 border-(--primary) bg-white py-4 font-medium text-(--primary) transition-all hover:bg-(--primary) hover:text-white w-full">
              Visualizar Landing
            </button>
            <button @click="downloadSite"
              class="gap-2 w-full rounded-2xl text-green-600 bg-white py-4 font-medium transition-all hover:bg-green-600 hover:text-white border-2 border-green-600">
              Baixar Site (.zip)
            </button>
          </template>
          <div class="mt-6 flex justify-between">
            <button @click="prevStep" :hidden="business.step === 1"
              class="rounded-lg bg-gray-600 px-5 py-2 font-medium text-white hover:bg-gray-700 disabled:opacity-50">
              Voltar
            </button>
            <button v-if="business.step < 6" @click="nextStep"
              class="rounded-lg bg-(--primary) px-5 py-2 text-white hover:bg-(--primary-dark)">
              Próximo
            </button>
          </div>
        </div>
        <!-- Preview -->
        <div
          class="hidden md:block rounded-2xl bg-white p-2 shadow-lg lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
          <LandingPageView preview />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { businessStore } from "../stores/businessStore";

import { createEmptyProduct } from "../utils/products";
import { saveBusiness } from "../utils/storage";
import { resizeImage } from "../utils/imageHelper";

import BaseInput from "../components/ui/BaseInput.vue";
import BaseTextarea from "../components/ui/BaseTextarea.vue";
import BaseImageUpload from "../components/ui/BaseImageUpload.vue";
import BaseImageUploadMultiple from "../components/ui/BaseImageUploadMultiple.vue";
import ThemeSelector from "../components/ui/ThemeSelector.vue";
import ProgressBar from "../components/ui/ProgressBar.vue";
import LandingPageView from "./LandingPageView.vue";

import { maskPhone, maskCurrency } from "../utils/formatters";

const router = useRouter();
const business = businessStore;
const errors = reactive({
  name: "",
  city: "",
  heroBadge: "",
  heroTitle: "",
  heroSubtitle: "",
  whatsapp: "",
  instagram: "",
  contactTitle: "",
  contactDescription: "",
  aboutTitle: "",
  aboutDescription: "",
});

let saveTimeout;

watch(
  business,
  (newValue) => {
    clearTimeout(saveTimeout);

    saveTimeout = setTimeout(() => {
      saveBusiness(newValue);
    }, 500);
  },
  {
    deep: true,
  },
  () => currentSection.value,
  (section) => {
    document.title = `${section} | ${business.name || "Confeitaria"}`;
  },
  { immediate: true },
);
// Computed whatsapp number
const whatsappMasked = computed({
  get: () => business.whatsapp,
  set: (value) => {
    business.whatsapp = maskPhone(value);
  },
});

async function addProduct() {
  business.products.push(createEmptyProduct());
}
async function removeProduct(id) {
  business.products = business.products.filter((product) => product.id !== id);
}
async function uploadLogo(file) {
  if (!file) return;

  business.logo = await resizeImage(file, 512, 0.9);
}
async function uploadImage(file, product) {
  if (!file) return;

  product.image = await resizeImage(file, 800, 0.7);
}
async function uploadGalleryImages(files) {
  for (const file of files) {
    const compressedImage = await resizeImage(file, 1200, 0.8);

    business.gallery.push(compressedImage);
  }
}
async function uploadFeatureImage(file, feature) {
  if (!file) return;
  feature.image = await resizeImage(file, 800, 0.8);
}
async function removeFeature(id) {
  business.aboutFeatures = business.aboutFeatures.filter(
    (feature) => feature.id !== id,
  );
}
function updatePrice(product, value) {
  product.price = maskCurrency(value);
}
function validateStep() {
  errors.name = "";
  errors.city = "";
  errors.heroBadge = "";
  errors.heroTitle = "";
  errors.heroSubtitle = "";
  errors.whatsapp = "";
  errors.instagram = "";
  errors.contactTitle = "";
  errors.contactDescription = "";
  errors.aboutTitle = "";
  errors.aboutDescription = "";

  let valid = true;

  if (business.step === 1) {
    if (!business.name?.trim()) {
      errors.name = "Informe o nome do negócio";
      valid = false;
    }
    if (!business.city?.trim()) {
      errors.city = "Informe a cidade do negócio";
      valid = false;
    }
    if (!business.heroBadge?.trim()) {
      errors.heroBadge = "Informe o selo ou slogan curto";
      valid = false;
    }
    if (!business.heroTitle?.trim()) {
      errors.heroTitle = "Informe o título principal";
      valid = false;
    }
    if (!business.heroSubtitle?.trim()) {
      errors.heroSubtitle = "Informe o subtítulo da landing page";
      valid = false;
    }
  } else if (business.step === 2) {
    if (!business.whatsapp?.trim()) {
      errors.whatsapp = "Informe seu WhatsApp";
      valid = false;
    }
    if (!business.instagram?.trim()) {
      errors.instagram = "Informe seu Instagram";
      valid = false;
    }
    if (!business.contactTitle?.trim()) {
      errors.contactTitle = "Informe o título da seção";
      valid = false;
    }
    if (!business.contactDescription?.trim()) {
      errors.contactDescription = "Informe uma descrição da seção";
      valid = false;
    }
  } else if (business.step === 3) {
    if (!business.aboutTitle?.trim()) {
      errors.aboutTitle = "Informe o título da seção";
      valid = false;
    }
    if (!business.aboutDescription?.trim()) {
      errors.aboutDescription = "Conte algo sobre seu negócio";
      valid = false;
    }
  }
  return valid;
}
function nextStep() {
  if (!validateStep()) {
    return;
  }
  if (business.step < 6) {
    business.step++;
  }
}
function prevStep() {
  if (business.step > 1) business.step--;
}
function addFeature() {
  business.aboutFeatures.push({
    id: Date.now(),
    title: "",
    description: "",
    image: "",
  });
}
function extractGoogleMapsUrl(value) {
  if (!value) return "";

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, "text/html");

    const iframe = doc.querySelector("iframe");

    if (iframe?.src) {
      return iframe.src;
    }
  } catch (error) {
    console.error(error);
  }

  const match = value.match(
    /https:\/\/www\.google\.com\/maps\/embed\?[^"' ]+/i,
  );

  return match?.[0] || value.trim();
}
function saveAndPreview() {
  const businessToSave = {
    ...business,

    products: business.products.map((product) => ({
      ...product,

      price:
        Number(String(product.price).replace(/\./g, "").replace(",", ".")) || 0,
    })),
  };

  saveBusiness(businessToSave);

  router.push("/landing");
}
async function downloadSite() {
  try {
    const response = await fetch("/api/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(business),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(errorText);

      throw new Error(
        `Erro HTTP ${response.status}`
      );
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }
    window.open(
      `/api/download/${result.filename}`,
      "_blank"
    );
  } catch (error) {
    console.error(error);

    alert("Erro ao gerar o ZIP.");
  }
}
</script>
