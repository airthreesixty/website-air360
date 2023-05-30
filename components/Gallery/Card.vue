<template>
  <nuxt-link :to="$localePath(slug)">
    <article
      class="relative p-4 bg-white h-full rounded-lg border border-gray-200 shadow-md"
    >
      <nuxt-img
        format="webp"
        class="mb-5 rounded-lg w-full object-cover"
        :src="imageSrc"
      />
      <h2
        class="mt-2 mb-2 text-2xl font-bold tracking-tight text-black-600 hover:underline dark:text-white"
      >
        {{ title }}
      </h2>
      <!-- <p class="text-gray-500">
        {{ description }}
      </p> -->
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
interface Props {
  title: string,
  imageSrc: string,
  slug: string
}

defineProps<Props>()
</script>
