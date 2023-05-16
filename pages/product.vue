<template>
  <ContentPage />
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: $i18n.t('product.title'),
  description: $i18n.t('product.description'),
  ogDescription: $i18n.t('product.ogDescription'),
  ogTitle: `Air360 - ${$i18n.t('product.title')}`,
  ogImage: $i18n.t('product.ogImage'),
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
