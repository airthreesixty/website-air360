<template>
  <LandingPage>
    <template #content>
      <h1>Five Conversion Blockers and How to Fix Them</h1>
      <h2>Improving Your UX Design with the Consumer in Mind</h2>
      <p>Many conversion concerns can be solved with strategic choices in flow and function. In Part 1 of our three-part series, we take a look at the most impactful conversion blockers, and how companies can easily fix them.</p>
      <p>This eBook uncovers:&nbsp;</p>
      <ul>
        <li>The most common causes of low conversion rates&nbsp;</li>
        <li>How to easily vanquish conversion rate killers&nbsp;</li>
        <li>Examples of successful UX design that quickly solve customer needs&nbsp;</li>
      </ul>
      <p>Download the eBook to learn more!</p>
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

// useHead({
//   title: 'Air 360 eBook: Five Conversion Blockers and How to Fix Them',
//   meta: [
//     { hid: 'description', name: 'description', content:  },
//   ],
// })

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
