<template>
  <NuxtLink :to="slug" class="border-2 grid grid-cols-3 hover:opacity-70">
    <div class="col-span-1">
      <nuxt-img :src="src" class="h-full object-cover" />
    </div>
    <div class="col-span-2 p-3 my-auto">
      <span class="text-black-600 text-lg self-center">{{ title }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    src: string
    slug: string
    title: string
}

defineProps<Props>()
</script>

<style scoped>
.prose img {
    margin: 0;
}
</style>
