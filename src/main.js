import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

// Inicializa a biblioteca AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
});

// Importa o arquivo de estilos global
import "./assets/main.css";

import { useTheme } from "./utils/useTheme";

const { loadTheme } = useTheme();

loadTheme();

createApp(App).use(router).mount("#app");
