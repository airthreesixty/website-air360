<template>
  <ContentPage />
</template>

<script setup lang="ts">
const { locale } = useI18n()

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const title = t('ga4-migration.title')
const description = t('ga4-migration.description')

const ogImage = computed(() => {
  if (locale.value === 'en') {
    return `${runtimeConfig.public.baseUrl}/en/ga4-migration.webp`
  }
  return `${runtimeConfig.public.baseUrl}/ga4-migration.webp`
})

definePageMeta({
  layout: 'request-demo',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: ogImage.value,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
