<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        You rock! Your eBook is on its way!
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        Thanks for requesting ‘Why Google Analytics is Not Enough to Grow Your Brand’.
      </p>
      <a class="page-thank-you__button" href="https://go.esw.com/hubfs/eBooks/Ebook2_Air360-update.pdf" target="_blank">
        Download your eBook
      </a>
    </div>
  </ThankYouPage>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Thank you'
const description = 'You rock! Your eBook is on its way! Thanks for requesting ‘Why Google Analytics is Not Enough to Grow Your Brand’.'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/en/content-gallery/why-ga-is-not-enought.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  robots: 'noindex, follow',
})
</script>
