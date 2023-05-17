<template>
  <AsyncPage page="homepage" />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
const { locale, t } = useI18n()
const runtimeConfig = useRuntimeConfig()

useHead({
  titleTemplate: '',
  script: [
    {
      src: 'https://fast.wistia.net/assets/external/E-v1.js',
      async: true,
      body: true,
    },
  ],
})

useSeoMeta({
  title: t('index.title'),
  description: t('index.description'),
  ogDescription: t('index.ogDescription'),
  ogTitle: t('index.ogTitle'),
  ogImage: '/heroIllustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}/${locale}/`,
})
</script>
