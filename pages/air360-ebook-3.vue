<template>
  <LandingPage>
    <template #content>
      <h1>Why you need a UX Analytics Tool & How to Get it</h1>
      <nuxt-img src="/air360-ebook-3-cover.webp" loading="lazy" width="456" class="w-35 sm:w-57 float-right shadow ml-5" />
      <p>Businesses both large and small benefit from detailed and actionable CX insights. Yet many companies are reluctant to invest, and many stakeholders may need convincing.</p>
      <p>Inside this eBook, learn more about:</p>
      <ul>
        <li>Preparing your business case</li>
        <li>Identifying the biggest opportunity</li>
        <li>Choosing the feature set</li>
        <li>Pinpointing the UX projects to undertake</li>
        <li>Planning for objections</li>
      </ul>
      <p>Download it now!</p>
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

const title = 'Air 360 eBook: Why you need a UX Analytics Tool & How to Get it'
const description = 'Why you need a UX Analytics Tool & How to Get it Businesses both large and small benefit from detailed and actionable CX insights. Yet many companies are reluctant to invest, and many stakeholders may need convincing. Inside this eBook, learn more about: Preparing your business case Identifying the biggest opportunity Choosing the feature set Pinpointing […]'

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
  ogImage: `${runtimeConfig.public.baseUrl}/air360-ebook-3-cover.webp`,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

useScriptTag(
  '//js-eu1.hsforms.net/forms/embed/v2.js',
  () => {
    hbspt.forms.create({
      region: 'eu1',
      portalId: '27037851',
      formId: '9a76f158-eb8a-4858-9216-38cd0c3c441f',
      target: '#form',
      redirectUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/air360-ebook-3-thank-you/`,
      onFormSubmit: function ($form) {
        if (Air360) {
          Air360.identify($form.email.value)
        }
      },
    })
  })
</script>
