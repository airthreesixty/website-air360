<template>
  <div class="text-center flex flex-col">
    <nuxt-img class="mx-auto mb-4 w-45 h-45 rounded-lg" :src="src" alt="Avatar" />
    <div class="mb-1 text-2xl text-white font-bold">
      <ContentSlot :use="$slots.role" unwrap="p" />
    </div>
    <div class="prose text-gray-300 mt-2">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
}

defineProps<Props>()
</script>
