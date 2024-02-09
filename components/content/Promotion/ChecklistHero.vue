<template>
  <section class="bg-white py-10 lg:py-14 overflow-hidden">
    <div class="text-center container md:(grid grid-cols-2 items-center justify-around gap-3)">
      <div class="relative max-w-[500px] mx-auto">
        <nuxt-img :src="src" class="mb-8" />
        <div class="absolute -left-55 -bottom-10 lg:bottom-0 mochi-cart-wrapper">
          <MochiCart class="w-50 h-50 lg:(w-60 h-60) mochi-cart" />
        </div>
      </div>
      <div class="p-5 lg:p-10">
        <Widget id="V76bES2c" class="h-145" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

interface Props {
  src: string
}

defineProps<Props>()

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
