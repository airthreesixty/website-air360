<template>
  <section
    class="pt-10 md:pt-0 overflow-hidden"
  >
    <div class="container md:(flex items-center) xl:-mb-10">
      <div
        ref="targetLeft"
        class="relative"
      >
        <h2 class="title3 text-black-600 font-bold mb-5">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div ref="targetRight" class="relative max-w-[400px] lg:max-w-[500px] mx-auto md:(-mb-15 mt-5)">
        <nuxt-img src="/promotion/1.png" />
        <div class="absolute top-18 -left-3 md:-left-28 lg:-left-31 text-xs md:text-sm lg:text-base max-w-[120px] text-black-600">
          <div class="bg-white w-40 md:w-60 lg:w-75 p-4 md:p-6 shadow-gray rounded-full">
            <p><ContentSlot :use="$slots.text1" unwrap="p" /></p>
            <p>
              <ContentSlot :use="$slots.text2" unwrap="p" />
            </p>
          </div>
        </div>
        <div class="absolute top-[42%] right-5 md:right-25 lg:right-35 text-xs md:text-sm lg:text-base max-w-[110px] text-black-600">
          <div class="bg-white w-40 md:w-60 lg:w-75 p-4 md:p-6 shadow-gray rounded-full">
            <p>
              <ContentSlot :use="$slots.text3" unwrap="p" />
            </p>
          </div>
        </div>
        <BlobLightPink class="absolute top-0 -right-21 lg:-right-60 -z-1 overflow-hidden" />
        <BlobLightBlue class="absolute top-28 -left-21 lg:-left-50 -z-1" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const targetLeft = ref()
const targetRight = ref()

useMotion(targetLeft, {
  initial: {
    opacity: 0,
    x: -100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 500,
      duration: 600,
    },
  },
})

useMotion(targetRight, {
  initial: {
    opacity: 0,
    x: 100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1000,
      duration: 600,
    },
  },
})
</script>
