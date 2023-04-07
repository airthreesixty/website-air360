<template>
  <div>
    <ContentPage />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

useHead({
  title: 'Air360 - eコマースに最適なUX分析ツール',
  titleTemplate: '',
  meta: [
    { hid: 'description', name: 'description', content: 'Air360はウェブサイト上の顧客体験を分析するツールです。 データによって隠れているユーザーの行動を明らかにし、それに基づいてコンバージョン率を改善します。' },
  ],
  script: [
    {
      src: 'https://fast.wistia.net/assets/external/E-v1.js',
      async: true,
      body: true,
    },
  ],
})

useSeoMeta({
  ogImage: 'https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.air360.io/',
})
</script>

<style scoped>
  svg {
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn {
    --width: 180px;
    --height: 60px;
    position: relative;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }
</style>
