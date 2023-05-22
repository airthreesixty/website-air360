<template>
  <ThankYouPage />
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Conversion Rate Mysteries: The Big Checkout Drop off'
const description = 'It is no mystery that checkout abandonment is usually a significant pain or a common challenge in the eCommerce industry. Learn how big online beverage distributor brand quickly found out why their users were dropping on their checkout to improve their performance.'

definePageMeta({
  layout: 'request-demo',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/air360-cr-mysteries.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
