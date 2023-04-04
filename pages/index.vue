<template>
  <div>
    <!-- <div class="container bg-[#5CA4EA] h-screen w-100 h-100 absolute left-[50%] top-[50%] flex justify-center items-center">
      <div class="w-45 h-15 absolute">
        <button class="btn w-45 h-15 cursor-pointer bg-transparent border-1 border-[#91C9FF] border-solid outline-none transition ease-in-out duration-1000 hover:transition hover:ease-in-out hover:duration-1000 hover:bg-[#4F95DA]">
          <svg
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            class="absolute left-0 top-0 fill-none stroke-[#fff]"
          >
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span class="text-white text-lg font-weight-100">HOVER ME</span>
        </button>
      </div>
    </div> -->
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
