<template>
  <LandingPage>
    <template #content>
      <h1>Conversion rate mysteries</h1>
      <h2>
        The big checkout drop off
      </h2>
      <nuxt-img src="/air360-cr-mysteries.jpg" loading="lazy" width="456" class="w-35 sm:w-65 float-right shadow ml-5" />
      <p>It is no mystery that checkout abandonment is usually a significant pain or a common challenge in the eCommerce industry.</p>
      <p>Learn how big online beverage distributor brand quickly found out why their users were dropping on their checkout to improve their performance.</p>
      <p>Download our Air360 Papel and learn more.</p>
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
  ogImage: `${runtimeConfig.public.baseUrl}/air360-cr-mysteries.jpg`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

useScriptTag(
  '//js-eu1.hsforms.net/forms/embed/v2.js',
  () => {
    hbspt.forms.create({
      region: 'eu1',
      portalId: '27037851',
      formId: '05426765-641a-4511-a475-9965ff681658',
      target: '#form',
      redirectUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/mystery-case-thank-you/`,
      onFormSubmit: function ($form) {
        if (Air360) {
          Air360.identify($form.email.value)
        }
      },
    })
  })
</script>
