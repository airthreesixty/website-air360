<template>
  <LandingPage>
    <template #content>
      <h1>Welcome to the Conversion Rate Mysteries Series II: 'The Invisible Product Option' by Air360!</h1>
      <h2>
        Dive into the Unseen World of Conversions
      </h2>
      <nuxt-img src="/en/content-gallery/mystery-case2.png" loading="lazy" width="456" class="w-35 sm:w-65 float-right shadow ml-5" />
      <p>Every hero needs a sidekick, and the experts at Air360 are here to be yours. We're thrilled to offer you an exclusive opportunity to download our use case, "Conversion Rate Mysteries Series II: The Invisible Product Option."</p>
      <h2>
        Why You Need This?
      </h2>
      <p>In the fast-paced world of eCommerce, understanding the hidden factors affecting your conversion rates is the key to success. Our use case is your ultimate sidekick, providing insights, strategies, and tips to unravel the enigmatic world of conversion rates.</p>
      <h2>What's Inside?</h2>
      <ul>
        <li>In-Depth Analysis: We break down the invisible product option and its impact on conversions.</li>
        <li>Practical Tips: Learn how to optimize your eCommerce strategy.</li>
        <li>Proven actions: Discover industry leaders' tactics to boost conversion rates.</li>
      </ul>
      <p>
        Get ready to solve your most puzzling conversion rate mysteries!
      </p>
      <p>Download now!</p>
    </template>
    <template #form>
      <Widget id="KTsGED4m" class="h-150" />
    </template>
  </LandingPage>
</template>

<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = "Welcome to the Conversion Rate Mysteries Series II: 'The Invisible Product Option' by Air360!"
const description = "Every hero needs a sidekick, and the experts at Air360 are here to be yours. We're thrilled to offer you an exclusive opportunity to download our use case, Conversion Rate Mysteries Series II: The Invisible Product Option."

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
  ogImage: `${runtimeConfig.public.baseUrl}/en/content-gallery/mystery-case2.png`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
