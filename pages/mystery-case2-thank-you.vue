<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        Thank you for showing interest in our conversion rate mysteries series: The Invisible Product Option
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        Please check your email inbox to receive the document from us.
      </p>
      <a class="page-thank-you__button" href="/en/content-gallery/mystery-case2.pdf" download="/en/content-gallery/mystery-case2.pdf" target="_blank">
        Download
      </a>
    </div>
  </ThankYouPage>
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = "Welcome to the Conversion Rate Mysteries Series II: 'The Invisible Product Option' by Air360!"
const description = "Every hero needs a sidekick, and the experts at Air360 are here to be yours. We're thrilled to offer you an exclusive opportunity to download our use case, Conversion Rate Mysteries Series II: The Invisible Product Option."

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/en/content-gallery/mystery-case2`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  robots: 'noindex, follow',
})
</script>
