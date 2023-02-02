<template>
  <!-- <nuxt-link :to="$localePath(`/blog/tag/all`)" class="py-3 px-5 mt-5 inline-block text-medium lg:text-lg bg-blue-100 text-blue-400 font-semibold rounded mx-2">
    {{ $t('tag.all') }}
  </nuxt-link> -->
  <nuxt-link
    v-for="tag in tagList"
    :key="tag"
    :to="$localePath(`/blog/tag/${tag}`)"
    class="py-3 px-5 mt-5 inline-block text-medium lg:text-lg bg-blue-100 text-blue-400 font-semibold rounded mx-2"
  >
    {{ $t(`tag.${tag}`) }}
  </nuxt-link>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp()
const tagList = ['all', 'marketing', 'ux', 'ecommerce', 'other']
</script>
