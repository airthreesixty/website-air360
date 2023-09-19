<template>
  <LandingPage>
    <template #content>
      <h1>Why Google Analytics is not enough to grow your brand</h1>
      <h2>Getting the full picture of site performance</h2>
      <nuxt-img src="/why-ga-is-not-enought.jpg" format="webp" loading="lazy" width="456" class="w-35 sm:w-65 float-right shadow ml-5" />
      <p>Next-generation user experience analytics tools are a necessary complement to Google Analytics.</p>
      <p>To get the best results from your GA setup, consider a tool that offers the customer insights that Google Analytics lacks. This eBook identifies eight areas where Google Analytics alone comes up short and explains how CRO tools bridge the gap with:</p>
      <ul>
        <li>Real-time, behavior-based user segmentation</li>
        <li>On-page analytics and page performance summaries</li>
        <li>Intelligent replays</li>
        <li>Autotracking</li>
        <li>Smart funnels</li>
        <li>Conversion rate audits and recommendations</li>
        <li>No data sampling or data sampling thresholds</li>
      </ul>
      <p>Download the eBook to learn more!</p>
    </template>
    <template #form>
      <div id="form">
        <Loading class="w-20 h-5 mx-auto" :is-full-page="false" />
      </div>
    </template>
  </LandingPage>
</template>

<script setup>
import { useScriptTag } from '@vueuse/core'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { locale } = useI18n()

const title = 'Air 360 eBook: Why Google Analytics is Not Enough to Grow Your Brand'
const description = 'Why Google Analytics is Not Enough to Grow Your Brand Getting the Full Picture of Site Performance Next-generation user experience analytics tools are a necessary complement to Google Analytics.   To get the best results from your GA setup, consider a tool that offers the customer insights that Google Analytics lacks. This eBook identifies eight […]'

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
  ogImage: `${runtimeConfig.public.baseUrl}/en/content-gallery/why-ga-is-not-enought.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

useScriptTag(
  '//js-eu1.hsforms.net/forms/embed/v2.js',
  () => {
    hbspt.forms.create({
      region: 'eu1',
      portalId: '27037851',
      formId: '7a92931e-0c8f-4067-a2d4-b436308f0073',
      target: '#form',
      redirectUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/air360-ebook-2-thank-you/`,
      onFormSubmit: function ($form) {
        if (Air360) {
          Air360.identify($form.email.value)
        }
      },
    })
  })
</script>
