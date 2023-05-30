<template>
  <nuxt-link>
    <article
      class="relative p-4 bg-white h-full rounded-lg border border-gray-200 shadow-md"
    >
      <nuxt-img
        format="webp"
        class="mb-5 rounded-lg h-50 w-full object-cover"
        :src="imageSrc"
      />
      <h2
        class="mt-2 mb-2 text-xl font-bold tracking-tight text-black-600 dark:text-white"
      >
        {{ title }}
      </h2>
      <p class="text-gray-500">
        {{ description }}
      </p>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  description: string,
  imageSrc: string
}

defineProps<Props>()
</script>
