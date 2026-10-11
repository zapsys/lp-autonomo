<script setup>
import { computed } from "vue";

const props = defineProps({
  percent: {
    type: Number,
    default: 0
  }
});

const safePercent = computed(() =>
  Math.min(100, Math.max(0, props.percent))
);
</script>
<template>
  <div class="w-full">
    <div
      class="h-3 overflow-hidden rounded-full bg-slate-200"
    >
      <div
        class="h-full rounded-full bg-[var(--primary)] transition-all duration-500 ease-out"
        :style="{ width: `${safePercent}%` }"
      />
    </div>

    <div class="mt-2 text-right text-sm text-slate-500">
      {{ Math.round(safePercent) }}%
    </div>
  </div>
</template>