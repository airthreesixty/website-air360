<template>
  <div class="text-center flex flex-col">
    <nuxt-img class="mx-auto mb-4 w-45 h-45 rounded-lg" :src="src" alt="Avatar" />
    <div class="mb-1 text-2xl text-black-600 font-bold">
      {{ role }}
    </div>
    <div class="prose text-gray-500 mt-2">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  role: string
}

defineProps<Props>()
</script>
