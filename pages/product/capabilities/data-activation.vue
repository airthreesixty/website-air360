<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('data-activation.title'),
  description: t('data-activation.content'),
  ogDescription: t('data-activation.content'),
  ogTitle: t('data-activation.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}/en/data-activation/hero.png`,
  twitterCard: 'summary_large_image',
})
</script>
