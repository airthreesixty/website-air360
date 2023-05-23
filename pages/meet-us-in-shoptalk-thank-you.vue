<template>
  <ThankYouPage>
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="page-thank-you__title">
        Thank you for being so interested in Air360!
      </h1>
      <MochiFlying class="mt-12 mb-10" />
      <p class="page-thank-you__description">
        We are on our way to Barcelona, but very soon a CRO expert will contact you to schedule a meeting with our team @Sholptalk Europe.
      </p>
      <p class="page-thank-you__description pt-5">
        In the meantime, grab a cup of coffee and find more inspiration with these blog posts
      </p>
    </div>
  </ThankYouPage>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Learn how Air360 can help you increase your conversion rate by 50% in less than 3 months.'
const description = 'Our eCommerce experience analytics platform helps you spot all opportunities to increase conversion & prioritize decisions to boost revenue fast. Meet Mochi, our mascot, in Barcelona and talk to one of our CRO experts to become a conversion hero.See you there!'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/shoptalk.webp`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  robots: 'noindex, follow',
})
</script>
