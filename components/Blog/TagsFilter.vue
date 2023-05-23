<template>
  <nav aria-label="Tags">
    <nuxt-link
      :to="$localePath(`/blog`)"
      class="tag__link"
    >
      {{ $t(`tag.all`) }}
    </nuxt-link>
    <nuxt-link
      v-for="tag in tagList"
      :key="tag"
      :to="$localePath(`/blog/tag/${tag}`)"
      class="tag__link"
    >
      {{ $t(`tag.${tag}`) }}
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
const tagList = ['marketing', 'ux', 'ecommerce', 'data', 'other']
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
