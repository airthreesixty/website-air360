<template>
  <section class="bg-white py-10 lg:py-14 overflow-hidden">
    <div class="text-center container">
      <div class="rounded-lg max-w-[1050px] mx-auto p-5 lg:p-10">
        <div>
          <!-- <h2 class="title3 my-10">
            <ContentSlot :use="$slots.formTitle" unwrap="p" />
          </h2> -->
          <div class="md:text-center">
            <span class="text-primary-600 font-bold"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
            <h1 class="title1 mt-5 mb-8">
              <ContentSlot :use="$slots.title" unwrap="p" />
            </h1>
            <p class="textp">
              <ContentSlot :use="$slots.description" unwrap="p" />
            </p>
          </div>
          <div class="md:(grid grid-cols-2 items-center mt-10)">
            <div class="relative max-w-[500px] mx-auto mt-10">
              <nuxt-img :src="src" class="mb-8" />
            </div>
            <div>
              <h3 class="title2 mt-8 mb-10 md:text-left">
                <ContentSlot :use="$slots.formTitle" unwrap="p" />
              </h3>
              <div id="form">
                <Loading class="w-20 h-5 mx-auto" :is-full-page="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'

const { locale } = useI18n()

const formId = computed(() => {
  if (locale.value === 'en') {
    return '92f0c706-d0a1-4217-9ace-cbf6a3fe4ce6'
  }
  return 'b0f0f3f2-1a92-4541-b986-2024bc413977'
})

interface Props {
  src: string
}

defineProps<Props>()

useScriptTag(
  '//js-eu1.hsforms.net/forms/embed/v2.js',
  () => {
    // @ts-ignore
    hbspt.forms.create({
      region: 'eu1',
      portalId: '27037851',
      formId: formId.value,
      target: '#form',
      onFormSubmit: function ($form: any) {
        // @ts-ignore
        if (Air360) {
          // @ts-ignore
          Air360.identify($form.email.value)
        }
      },
    })
  })
</script>
