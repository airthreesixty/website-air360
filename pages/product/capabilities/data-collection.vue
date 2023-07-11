<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('data-collection.title'),
  description: t('data-collection.content'),
  ogDescription: t('data-collection.content'),
  ogTitle: t('data-collection.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}/en/data-collection/hero.png`,
  twitterCard: 'summary_large_image',
})
</script>
