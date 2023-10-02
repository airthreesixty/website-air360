<template>
  <NuxtLink :to="props.slug" class="border-2 grid grid-cols-3 hover:opacity-70">
    <div class="col-span-1 h-full md:h-35">
      <nuxt-img :src="data?.image" class="h-full w-full object-cover" />
    </div>
    <div class="col-span-2 p-3 my-auto">
      <span class="text-black-600 text-sm md:text-lg self-center">{{ data?.title }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    slug: string
}

const props = defineProps<Props>()

const { data } = await useAsyncData(props.slug, () => queryContent(props.slug).findOne())
</script>

<style scoped>
.prose img {
    margin: 0;
}
</style>
