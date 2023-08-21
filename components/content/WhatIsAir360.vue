<template>
  <section ref="target" class="relative pt-22 pb-2 md:pb-0">
    <div class="bg-gradient-top" />
    <div class="bg-gradient-bottom" />
    <div class="container text-center">
      <div>
        <h2 class="mt-2 text-2xl font-semibold text-black-600 md:text-3xl lg:text-4xl">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="mx-auto mt-5 max-w-prose text-md text-gray-500 lg:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="my-12">
        <div class="mx-auto md:w-9/12" style="position: relative; padding-bottom: 56.25%; height: 0;">
          <iframe
            v-if="showIframe"
            src="https://www.loom.com/embed/ec06bf3738f64c8e960b2c0eccaf89b0?sid=cb91bf0c-e504-4098-91d4-c7afbbb919dc?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%;"
            class="rounded-lg h-full md:h-9/12"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
const target = ref(null)
const showIframe = ref(false)
useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (!showIframe.value && isIntersecting) {
      showIframe.value = true
    }
  },
)
</script>
<style scoped>
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
</style>
