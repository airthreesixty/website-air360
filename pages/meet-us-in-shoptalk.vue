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
        9 - 11 MAY - FIRA GRAN VÍA - BARCELONA
      </p>
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

const title = 'Learn how Air360 can help you increase your conversion rate by 50% in less than 3 months.'
const description = 'Our eCommerce experience analytics platform helps you spot all opportunities to increase conversion & prioritize decisions to boost revenue fast. Meet Mochi, our mascot, in Barcelona and talk to one of our CRO experts to become a conversion hero.See you there!'

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
  ogImage: `${runtimeConfig.public.baseUrl}/shoptalk.webp`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

useScriptTag(
  '//js-eu1.hsforms.net/forms/embed/v2.js',
  () => {
    hbspt.forms.create({
      region: 'eu1',
      portalId: '27037851',
      formId: 'd0f2183f-f624-434d-abda-8e723186a681',
      target: '#form',
      redirectUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/meet-us-in-shoptalk-thank-you/`,
      onFormSubmit: function ($form) {
        if (Air360) {
          Air360.identify($form.email.value)
        }
      },
    })
  })
</script>
