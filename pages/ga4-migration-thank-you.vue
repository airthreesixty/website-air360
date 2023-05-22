<template>
  <ThankYouPage />
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const title = t('ga4-migration.title')
const description = t('ga4-migration.description')

definePageMeta({
  layout: 'request-demo',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/en/ga4-migration.webp`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
