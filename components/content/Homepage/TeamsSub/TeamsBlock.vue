<template>
  <div class="text-center grid-card">
    <nuxt-img format="webp" class="mx-auto w-60 h-60 rounded-lg object-cover" :src="src" alt="Avatar" />
    <div class="-mb-5 text-2xl text-white font-bold">
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

<style scoped>
.grid-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
</style>
