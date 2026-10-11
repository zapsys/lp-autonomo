<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  rows: {
    type: [Number, String],
    default: 2,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium">
      {{ label }}
      <span v-if="required" class="ml-1 text-red-500"> * </span>
    </label>
    <p v-if="error" class="mt-1 text-sm text-red-500">
      {{ error }}
    </p>
    <textarea
      :value="modelValue"
      :rows="rows"
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
