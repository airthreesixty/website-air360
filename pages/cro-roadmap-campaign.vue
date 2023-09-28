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
  return '/promotion/checklist.png'
})

useSeoMeta({
  title: t('promotion-lp.title'),
  description: t('promotion-lp.content'),
  ogDescription: t('promotion-lp.content'),
  ogTitle: t('promotion-lp.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}${imgSrc.value}`,
  twitterCard: 'summary_large_image',
})
</script>
