<template>
  <ContentPage />
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

useHead({
  title: 'Air360',
  titleTemplate: '',
  meta: [
    { hid: 'description', name: 'description', content: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにし、それに基づいてコンバージョン率を改善します。' },
  ],
})

useSeoMeta({
  ogImage: 'https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp',
  twitterCard: 'summary_large_image',
})
</script>
