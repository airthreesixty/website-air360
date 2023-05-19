<template>
  <LandingPage>
    <template #content>
      <div class="flex justify-center">
        <div class="relative flex flex-col items-center mx-auto inline-flex">
          <nuxt-img src="/shoptalk_logo.png" loading="lazy" width="500" class="w-70 sm:w-80 md:w-100" />
          <nuxt-img src="/shoptalk.webp" loading="lazy" width="500" class="w-80 sm:w-100 md:w-135" />
          <MochiStandingMochi class="absolute w-20 top-30 left-0 sm:(top-45 w-25) md:(top-70 w-32)" />
        </div>
      </div>
      <h2 class="pt-10">
        Learn how Air360 can help you increase your conversion rate by 50% in less than 3 months.
      </h2>
      <p>Our eCommerce experience analytics platform helps you spot all opportunities to increase conversion & prioritize decisions to boost revenue fast.</p>
      <p>Meet Mochi, our mascot, in Barcelona and talk to one of our CRO experts to become a conversion hero.</p>
      <p>See you there!</p>
      <p class="font-bold">
        9 – 11 MAY – FIRA GRAN VÍA – BARCELONA
      </p>
    </template>
    <template #form>
      TODO form
    </template>
  </LandingPage>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = 'Air 360 eBook: Five Conversion Blockers and How to Fix Them'
const description = 'Five Conversion Blockers and How to Fix Them Improving Your UX Design with the Consumer in Mind Many conversion concerns can be solved with strategic choices in flow and function. In Part 1 of our three-part series, we take a look at the most impactful conversion blockers, and how companies can easily fix them. This […]'

definePageMeta({
  layout: 'request-demo',
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: `${runtimeConfig.public.baseUrl}/five-conversion-blockers.webp`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
