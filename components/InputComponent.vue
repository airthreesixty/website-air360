<template>
  <div class="relative">
    <input :id="id" :type="type" placeholder=" " class="block rounded-lg border-gray-300 px-6 pt-6 pb-1 w-full text-gray-600 bg-white appearance-none focus:outline-none focus:ring-0 peer">
    <label :for="id" class="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:-translate-x-10">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
})
</script>
