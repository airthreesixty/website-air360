<template>
  <AsyncPage page="homepage" />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
const { locale, t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

useHead({
  titleTemplate: '',
})

useSeoMeta({
  title: t('index.title'),
  description: t('index.description'),
  ogDescription: t('index.ogDescription'),
  ogTitle: t('index.ogTitle'),
  ogImage: '/heroIllustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/`,
})

if (route.fullPath === '/') {
  document.location = '/en/'
}
</script>
