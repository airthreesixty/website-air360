<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        You rock! Here is your Use case
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        Thank you for downloading the Air360 Conversion rate mysteries use case
      </p>
      <p class="page-thank-you__description">
        <a class="page-thank-you__button" href="https://go.scalefast.com/hubfs/eBooks/Ebook1_Air360-update.pdf" target="_blank">
          Download the use case
        </a>
      </p>
    </div>
  </ThankYouPage>
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Conversion Rate Mysteries: The Big Checkout Drop off'
const description = 'It is no mystery that checkout abandonment is usually a significant pain or a common challenge in the eCommerce industry. Learn how big online beverage distributor brand quickly found out why their users were dropping on their checkout to improve their performance.'

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
