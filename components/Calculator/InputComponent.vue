<template>
  <div class="relative">
    <input
      :id="id"
      :type="type"
      placeholder=" "
      :value="modelValue"
      class="peer rounded-lg border-gray-300 px-6 pt-6 pb-1 w-full text-gray-600 bg-white appearance-none outline-none focus:outline-none focus:ring-0"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <label :for="id" class="absolute text-md text-gray-500 duration-150 scale-75 transform -translate-y-3 top-4 z-10 origin-top-left left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: number | null;
  id: string;
  label: string;
  type?: 'text' | 'number';
}

defineProps<Props>()

defineEmits<{(e: 'update:modelValue', value: number): void}>()
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance:textfield;
}
</style>
