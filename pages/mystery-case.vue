<template>
  <LandingPage>
    <template #content>
      <h1>Conversion Rate Mysteries</h1>
      <h2>
        The Big Checkout Drop off
      </h2>
      <nuxt-img src="/air360-cr-misteries.jpg" loading="lazy" width="456" class="w-35 sm:w-57 float-right shadow ml-5" />
      <p>It is no mystery that checkout abandonment is usually a significant pain or a common challenge in the eCommerce industry.</p>
      <p>Learn how big online beverage distributor brand quickly found out why their users were dropping on their checkout to improve their performance.</p>
      <p>Download our Air360 Papel and learn more.</p>
    </template>
    <template #form>
      TODO form
    </template>
  </LandingPage>
</template>

<script setup>
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
  ogImage: `${runtimeConfig.public.baseUrl}/air360-cr-misteries.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
