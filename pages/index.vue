<template>
  <NuxtLayout name="landing-page">
    <ContentPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

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
  title: 'Air360 - eコマースに最適なUX分析ツール',
  description: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにしコンバージョン率を改善します。',
  ogDescription: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにしコンバージョン率を改善します。',
  ogTitle: 'Air360 - eコマースに最適なUX分析ツール',
  ogImage: 'https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://jp.air360.io/',
})
</script>
