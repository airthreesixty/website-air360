<template>
  <section class="bg-white container py-10">
    <div class="text-center">
      <div>
        <span class="text-primary-600 font-bold"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
        <h1 class="title1 mt-5">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
      </div>
      <div class="bg-primary-100 max-w-[1050px] mx-auto p-5 lg:p-10 mt-15 md:(flex items-center gap-3)">
        <nuxt-img src="/promotion/checklist.png" class="w-70 h-70 lg:(w-90 h-90) mx-auto" />
        <div>
          <h2 class="title3 my-10">
            <ContentSlot :use="$slots.formTitle" unwrap="p" />
          </h2>
          <div id="form" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScriptTag } from '@vueuse/core'

const runtimeConfig = useRuntimeConfig()
const { locale } = useI18n()

useScriptTag(
  '//js-eu1.hsforms.net/forms/embed/v2.js',
  () => {
    hbspt.forms.create({
      region: 'eu1',
      portalId: '27037851',
      formId: '4651f467-09d5-42da-ac55-8c93960a37e6',
      target: '#form',
      redirectUrl: `${runtimeConfig.public.baseUrl}/${locale.value}/air360-ebook-1-thank-you/`,
      onFormSubmit: function ($form) {
        if (Air360) {
          Air360.identify($form.email.value)
        }
      },
    })
  })
</script>
