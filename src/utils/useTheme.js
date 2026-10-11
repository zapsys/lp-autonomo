import { ref } from "vue";

const currentTheme = ref("pink");

const themes = {
  pink: {
    name: "Rosa",
    primary: "#d9779b",
    light: "#fbcfe8",
    dark: "#be185d",
  },
  rose: {
    name: "Rose",
    primary: "#e11d48",
    light: "#fecdd3",
    dark: "#be123c",
  },
  purple: {
    name: "Roxo",
    primary: "#7c3aed",
    light: "#c4b5fd",
    dark: "#5b21b6",
  },
  indigo: {
    name: "Índigo",
    primary: "#4f46e5",
    light: "#c7d2fe",
    dark: "#3730a3",
  },
  blue: {
    name: "Azul",
    primary: "#2563eb",
    light: "#93c5fd",
    dark: "#1d4ed8",
  },
  sky: {
    name: "Azul Claro",
    primary: "#0ea5e9",
    light: "#bae6fd",
    dark: "#0369a1",
  },
  teal: {
    name: "Turquesa",
    primary: "#0d9488",
    light: "#99f6e4",
    dark: "#115e59",
  },
  green: {
    name: "Verde",
    primary: "#10b981",
    light: "#a7f3d0",
    dark: "#047857",
  },
  emerald: {
    name: "Esmeralda",
    primary: "#059669",
    light: "#a7f3d0",
    dark: "#065f46",
  },
  lime: {
    name: "Lima",
    primary: "#65a30d",
    light: "#d9f99d",
    dark: "#4d7c0f",
  },
  yellow: {
    name: "Amarelo",
    primary: "#eab308",
    light: "#fef08a",
    dark: "#a16207",
  },
  amber: {
    name: "Âmbar",
    primary: "#f59e0b",
    light: "#fde68a",
    dark: "#b45309",
  },
  orange: {
    name: "Laranja",
    primary: "#f97316",
    light: "#fdba74",
    dark: "#ea580c",
  },
  red: {
    name: "Vermelho",
    primary: "#dc2626",
    light: "#fecaca",
    dark: "#991b1b",
  },
  slate: {
    name: "Grafite",
    primary: "#475569",
    light: "#cbd5e1",
    dark: "#1e293b",
  },
  brown: {
    name: "Chocolate",
    primary: "#92400e",
    light: "#fcd34d",
    dark: "#78350f",
  },
};

function applyTheme(theme) {
  const root = document.documentElement;

  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-light", theme.light);
  root.style.setProperty("--primary-dark", theme.dark);
}

function setTheme(themeName) {
  const theme = themes[themeName];

  if (!theme) return;

  currentTheme.value = themeName;

  applyTheme(theme);

  localStorage.setItem("landing-theme", themeName);
}

function loadTheme() {
  const savedTheme = localStorage.getItem("landing-theme") || "pink";

  setTheme(savedTheme);
}

export function useTheme() {
  return {
    themes,
    currentTheme,
    setTheme,
    loadTheme,
  };
}
