<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('data-analysis.title'),
  description: t('data-analysis.content'),
  ogDescription: t('data-analysis.content'),
  ogTitle: t('data-analysis.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}/en/data-activation/hero.png`,
  twitterCard: 'summary_large_image',
})
</script>
