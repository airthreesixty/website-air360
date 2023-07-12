<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('events-segments.title'),
  description: t('events-segments.content'),
  ogDescription: t('events-segments.content'),
  ogTitle: t('events-segments.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}/en/events-segments/hero.png`,
  twitterCard: 'summary_large_image',
})
</script>
