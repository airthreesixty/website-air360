<template>
  <ThankYouPage />
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Learn how Air360 can help you increase your conversion rate by 50% in less than 3 months.'
const description = 'Our eCommerce experience analytics platform helps you spot all opportunities to increase conversion & prioritize decisions to boost revenue fast. Meet Mochi, our mascot, in Barcelona and talk to one of our CRO experts to become a conversion hero.See you there!'

definePageMeta({
  layout: 'request-demo',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/shoptalk.webp`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
