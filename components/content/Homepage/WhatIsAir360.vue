<template>
  <section ref="target" class="relative pt-13 pb-2 md:pb-0 lg:mt-5">
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
      <div class="relative mt-5 mb-12 md:mb-30 max-w-[650px] mx-auto">
        <div class="image-blur">
          <nuxt-img class="rounded-[14px]" loading="lazy" format="webp" :src="src" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
// import { useIntersectionObserver } from '@vueuse/core'
interface Props {
  src: string
}

defineProps<Props>()
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
</script>
<style scoped>
/* .bg-gradient-bottom {
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
} */
.image-blur {
  background: linear-gradient(#fff,hsla(0,0%,100%,0)) padding-box,linear-gradient(90deg,#2D92E9,#C141AC,#E72192,#F04D66,#FD7043) border-box;
  border: 1px solid transparent;
  border-radius: 14px;
  width: 100%;
  height: 100%;
}

.image-blur::before {
  background: linear-gradient(#fff,hsla(0,0%,100%,0)) padding-box,linear-gradient(90deg,#2D92E9,#C141AC,#E72192,#F04D66,#FD7043) border-box;
  content: '';
  height: 100%;
  width: 100%;
  display: block;
  filter: blur(30px);
  z-index: -1;
  position: absolute;
  opacity: 0.7;
}

/* .test-blur::before {
  background-image: linear-gradient(90deg, #C141AC,#E72192);
  height: 100%;
  width: 100%;
  position: absolute;
  border: 12px solid transparent;
  background-clip: padding-box;
  content: "";
  filter:blur(36px);
  z-index: -1;
  opacity: 0.8;
} */
</style>
