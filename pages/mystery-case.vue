<template>
  <LandingPage>
    <template #content>
      <h1>Conversion rate mysteries</h1>
      <h2>
        The big checkout drop off
      </h2>
      <nuxt-img src="/en/content-gallery/air360-cr-mysteries.jpg" loading="lazy" width="456" class="w-35 sm:w-65 float-right shadow ml-5" />
      <p>It is no mystery that checkout abandonment is usually a significant pain or a common challenge in the eCommerce industry.</p>
      <p>Learn how big online beverage distributor brand quickly found out why their users were dropping on their checkout to improve their performance.</p>
      <p>Download our Air360 Papel and learn more.</p>
    </template>
    <template #form>
      <div id="form" class="h-150">
        <!-- <Loading class="w-20 h-5 mx-auto" :is-full-page="false" /> -->
      </div>
    </template>
  </LandingPage>
</template>

<script setup lang="ts">
import { createWidget } from '@typeform/embed'

onMounted(() => {
  createWidget('ANe2bSWB', {
    container: document.querySelector('#form')!,
  })
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Conversion Rate Mysteries: The Big Checkout Drop off'
const description = 'It is no mystery that checkout abandonment is usually a significant pain or a common challenge in the eCommerce industry. Learn how big online beverage distributor brand quickly found out why their users were dropping on their checkout to improve their performance.'

definePageMeta({
  layout: 'request-demo',
})

useHead({
  titleTemplate: '',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/en/content-gallery/air360-cr-mysteries.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
