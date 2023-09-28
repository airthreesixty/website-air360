<template>
  <ContentDoc />
</template>

<script setup>
const { t, locale } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const imgSrc = computed(() => {
  if (locale.value === 'en') {
    return '/en/promotion/checklist.png'
  }
  return '/promotion/conversionSuccess.png'
})

useSeoMeta({
  title: t('promotion-roadmap.title'),
  description: t('promotion-roadmap.content'),
  ogDescription: t('promotion-roadmap.content'),
  ogTitle: t('promotion-roadmap.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}${imgSrc.value}`,
  twitterCard: 'summary_large_image',
})
</script>
