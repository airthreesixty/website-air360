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

if ($i18n.locale._value === 'ja') {
  useSeoMeta({
    title: 'Air360 - eコマースに最適なUX分析ツール',
    description: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにしコンバージョン率を改善します。',
    ogDescription: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにしコンバージョン率を改善します。',
    ogTitle: 'Air360 - eコマースに最適なUX分析ツール',
    ogImage: 'https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp',
    twitterCard: 'summary_large_image',
    ogUrl: `${runtimeConfig.public.baseUrl}/${$i18n.locale._value}/`,
  })
} else {
  useSeoMeta({
    title: 'Air360 - The best UX analysis tool for e-commerce',
    description: 'Air360 is a tool for analyzing the customer experience on your website. Data reveals hidden user behavior and improves conversion rates.',
    ogDescription: 'Air360 is a tool for analyzing the customer experience on your website. Data reveals hidden user behavior and improves conversion rates.',
    ogTitle: 'Air360 - The best UX analysis tool for e-commerce',
    ogImage: 'https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp',
    twitterCard: 'summary_large_image',
    ogUrl: `${runtimeConfig.public.baseUrl}/${$i18n.locale._value}/`,
  })
}

</script>
