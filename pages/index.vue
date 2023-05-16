<template>
  <NuxtLayout name="landing-page">
    <ContentPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
const { $i18n } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()

definePageMeta({
  layout: false,
})

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
  title: $i18n.t('index.title'),
  description: $i18n.t('index.description'),
  ogDescription: $i18n.t('index.ogDescription'),
  ogTitle: $i18n.t('index.ogTitle'),
  ogImage: 'https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}/${$i18n.locale._value}/`,
})
</script>
