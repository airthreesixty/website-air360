<template>
  <ContentPage />
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

// if ($i18n.locale._value === 'ja') {
//   useSeoMeta({
//     title: '製品',
//     description: 'Air360では顧客の行動を自動でトラッキングし、Chrome拡張機能やセッションリプレイ等様々な機能で簡単に顧客にとって最善のウェブサイトを目指せます。',
//     ogDescription: 'Air360では顧客の行動を自動でトラッキングし、Chrome拡張機能やセッションリプレイ等様々な機能で簡単に顧客にとって最善のウェブサイトを目指せます。',
//     ogTitle: 'Air360 - 製品',
//     ogImage: '/sunburst.png',
//     twitterCard: 'summary_large_image',
//     ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
//   })
// } else {
//   useSeoMeta({
//     title: 'Product',
//     description: 'Air360 automatically tracks customer behavior and makes it easy to create the best website for your customers with a variety of features such as Chrome extensions and session replay.',
//     ogDescription: 'Air360 automatically tracks customer behavior and makes it easy to create the best website for your customers with a variety of features such as Chrome extensions and session replay.',
//     ogTitle: 'Air360 - Product',
//     ogImage: '/en/sunburst.png',
//     twitterCard: 'summary_large_image',
//     ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
//   })
// }

useSeoMeta({
  title: $i18n.t('product.title'),
  description: $i18n.t('product.description'),
  ogDescription: $i18n.t('product.ogDescription'),
  ogTitle: `Air360 - ${$i18n.t('product.title')}`,
  ogImage: '/en/sunburst.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
