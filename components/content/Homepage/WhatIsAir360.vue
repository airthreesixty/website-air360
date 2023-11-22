<template>
  <section ref="target" class="relative pt-22 pb-2 md:pb-0">
    <!-- <div class="bg-gradient-top" />
    <div class="bg-gradient-bottom" /> -->
    <div class="container text-center">
      <div>
        <h2 class="mt-2 title2">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="mx-auto mt-5 max-w-prose textp xl:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="mt-5 mb-3 max-w-[650px] mx-auto">
        <nuxt-img loading="lazy" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" format="webp" :src="src" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// import { useIntersectionObserver } from '@vueuse/core'

const { locale } = useI18n()
// const target = ref(null)
// const showIframe = ref(false)
// useIntersectionObserver(
//   target,
//   ([{ isIntersecting }]) => {
//     if (!showIframe.value && isIntersecting) {
//       showIframe.value = true
//     }
//   },
// )

const src = computed(() => {
  if (locale.value === 'en') {
    return '/en/headaches.png'
  }

  return '/headaches.png'
})
</script>
<!-- <style scoped>
.bg-gradient-bottom {
  background: radial-gradient(95% 100% at -3.9% 100%,#E72192 0%,#F04D66 49.80803150067764%,#C141AC 74.08234947205608%,#2D92E9 99.95393495930529%);
  position: absolute;
  right: unset;
  z-index: -10;
  inset: 0;
  flex: none;
  overflow: hidden;
  border-top: outset;
}
.bg-gradient-top {
  background: radial-gradient(182.29999999999998% 95% at 50% 8.4%,#ffffff 0%,rgb(255,255,255) 28.345139819430482%,rgba(255,255,255,.88) 46.39900258832971%,hsla(0,0%,100%,0) 99.95393495930529%);
  position: absolute;
  right: unset;
  z-index: -1;
  inset: 0;
}
</style> -->
