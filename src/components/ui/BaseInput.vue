<script setup>
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  error: String,
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label v-if="label" class="mb-1 block text-sm font-medium">
      {{ label }}
    </label>
    <p v-if="error" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
           'w-full rounded-lg border border-slate-300 px-4 py-3 mb-4 text-slate-800 placeholder:text-slate-400 focus:border-[var(--primary)]-500 focus:outline-none',
        error
          ? 'border-red-500 focus:border-red-500'
          : 'border-[var(--primary)] focus:border-[var(--primary)]'
      ]"
    />
  </div>
</template>
