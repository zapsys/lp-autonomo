<template>
  <div>
    <!-- Site exportado -->
    <LandingPageView v-if="business.exported" />
    <!-- Editor -->
    <router-view v-else />
  </div>
</template>

<script setup>
import { computed, watchEffect, onMounted } from "vue";
import LandingPageView from "./views/LandingPageView.vue";
import { businessStore, updateBusinessStore } from "./stores/businessStore";
import { loadBusinessFile } from "./utils/storage";

const business = businessStore;

/**
* Carrega business.json
* quando a landing exportada for aberta
*/
onMounted(async () => {
  const exportedData =
    await loadBusinessFile();

  if (exportedData?.exported) {
    updateBusinessStore(
      exportedData
    );
  }
});

const pageTitle = computed(() =>
  business.name
    ? `${business.name} | ${business.heroBadge || "Doces Feitos com Amor"}`
    : "Minha Confeitaria",
);

function updateMeta(selector, attr, value) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    if (selector.includes("property=")) {
      const property = selector.match(/property="([^"]+)"/)?.[1];
      if (property) element.setAttribute("property", property);
    }

    if (selector.includes("name=")) {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) element.setAttribute("name", name);
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attr, value || "");
}

function updateFavicon(url) {
  let favicon = document.querySelector('link[rel="icon"]');

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.href = url || "/favicon.svg";
}

watchEffect(() => {
  document.title = pageTitle.value;

  updateMeta('meta[name="description"]', "content", business.heroSubtitle);

  updateMeta(
    'meta[name="keywords"]',
    "content",
    `confeitaria, bolos, doces, sobremesas${business.name ? `, ${business.name}` : ""
    }`,
  );

  updateMeta('meta[name="author"]', "content", business.name || "lp-autonomo");

  updateMeta('meta[name="robots"]', "content", "index, follow");

  updateMeta('meta[property="og:title"]', "content", pageTitle.value);

  updateMeta(
    'meta[property="og:description"]',
    "content",
    business.heroSubtitle,
  );

  updateMeta(
    'meta[property="og:image"]',
    "content",
    business.logo || "/favicon.svg",
  );

  updateMeta('meta[property="og:url"]', "content", window.location.href);

  updateMeta('meta[property="og:type"]', "content", "website");

  updateMeta(
    'meta[property="og:site_name"]',
    "content",
    business.name || "lp-autonomo",
  );

  updateMeta('meta[property="og:locale"]', "content", "pt_BR");

  updateMeta('meta[name="twitter:title"]', "content", pageTitle.value);

  updateMeta(
    'meta[name="twitter:description"]',
    "content",
    business.heroSubtitle,
  );

  updateMeta(
    'meta[name="twitter:image"]',
    "content",
    business.logo || "/favicon.svg",
  );

  updateMeta('meta[name="twitter:card"]', "content", "summary_large_image");

  updateMeta(
    'meta[name="twitter:creator"]',
    "content",
    business.instagram || "@lp-autonomo",
  );

  document.documentElement.lang = "pt-BR";

  updateFavicon(business.logo);
});
</script>
