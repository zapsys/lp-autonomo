<script setup>
import { useTheme } from "../../utils/useTheme";

const { themes, currentTheme, setTheme } = useTheme();
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3">
    <button
      v-for="(theme, name) in themes"
      :key="name"
      type="button"
      :title="name"
      :style="{ backgroundColor: theme.primary }"
      class="h-10 w-10 rounded-full border-2 border-white shadow-md transition hover:scale-110"
      @click="setTheme(name)"
    >
      <span
        v-if="currentTheme === name"
        class="flex h-full items-center justify-center text-white"
      >
        ✓
      </span>
    </button>
  </div>
</template>
