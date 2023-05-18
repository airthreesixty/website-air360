<template>
  <ContentPage />
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('product.title'),
  description: t('product.description'),
  ogDescription: t('product.ogDescription'),
  ogTitle: `Air360 - ${t('product.title')}`,
  ogImage: '/en/sunburst.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
