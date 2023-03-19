<template>
  <NuxtLink :to="$localePath(prop.slug)" class="text-white text-center bg-primary-600 text-base font-bold w-full px-6 py-3 mt-5 mr-2 mb-2 inline-block transition ease-in-out duration-300 hover:bg-primary-700 rounded-lg focus:outline-none">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()

const prop = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
</script>
