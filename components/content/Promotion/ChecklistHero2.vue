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
              <div class="absolute -left-55 -bottom-10 lg:bottom-0 mochi-cart-wrapper">
                <MochiCart class="w-50 h-50 lg:(w-60 h-60) mochi-cart" />
              </div>
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
import { gsap } from 'gsap'

const { locale } = useI18n()

const formId = computed(() => {
  if (locale.value === 'en') {
    return '580f0257-6e66-4882-88c4-893274b97406'
  }
  return '4651f467-09d5-42da-ac55-8c93960a37e6'
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

onMounted(() => {
  let largeDevice = 1

  if (window.innerWidth >= 1024) {
    largeDevice = 1.25
  }
  gsap.to('.mochi-cart-wrapper', {
    ease: 'power2.inOut',
    keyframes: [
      { x: 0, y: 0, rotation: 0, duration: 0.23 },
      { x: 30 * largeDevice, y: 0, rotation: -5, duration: 0.23 },
      { x: 60 * largeDevice, y: -1, rotation: 0, duration: 0.23 },
      { x: 90 * largeDevice, y: -1, rotation: 5, duration: 0.23 },
      { x: 120 * largeDevice, y: 0, rotation: -4, duration: 0.23 },
      { x: 150 * largeDevice, y: 1, rotation: 0, duration: 0.23 },
      { x: 180 * largeDevice, y: 0, rotation: 4, duration: 0.23 },
      { x: 210 * largeDevice, y: 0, rotation: -3, duration: 0.23 },
      { x: 240 * largeDevice, y: 1, rotation: 0, duration: 0.23 },
      { x: 270 * largeDevice, y: 0, rotation: 3, duration: 0.23 },
      { x: 300 * largeDevice, y: 0, rotation: -2, duration: 0.23 },
      { x: 330 * largeDevice, y: 1, rotation: 0, duration: 0.23 },
      { x: 360 * largeDevice, y: 0, rotation: 2, duration: 0.23 },
      { x: 390 * largeDevice, y: 0, rotation: 0, duration: 0.32 },
    ],
  })
})
</script>

<style scoped>
.mochi-cart {
  transform: scale(-1, 1);
}
</style>
