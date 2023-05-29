<template>
  <div class="flex justify-around">
    <nuxt-link v-for="tag in tagList" :key="tag" :to="$localePath(`/roi-calculator-${tag.toLowerCase()}`)" class="tag__link">
      {{ tag }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
// Add YEN later
const tagList = ['USD', 'EUR']
</script>

<style scoped lang="postcss">
.tag__link {
  @apply py-3 px-4 mt-5 md:px-5 inline-block text-sm lg:text-lg bg-blue-100 text-blue-400 font-semibold rounded mx-1 md:mx-2 transition-colors;

  &.router-link-exact-active,
  &:hover {
    @apply text-white bg-blue-400;
  }
}
</style>
