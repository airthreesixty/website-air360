<template>
  <section ref="target" class="bg-white">
    <div class="container py-7 lg:py-13">
      <div class="text-center">
        <span class="text-primary-600 font-bold">
          COLLECT
        </span>
        <h2 class="title2 mb-5">
          Air360 simplifies data collection
        </h2>
        <p class="text-gray-500 max-w-[600px] mx-auto">
          Air360 is a codeless & tagless solution so easy to set up anybody could do it. Forget about making efforts on tagging, mapping or grouping ever again.
        </p>
        <slot name="tabs" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const showVideo = ref(false)

const show = ref(1)

// if the tab is clicked, show the content of it
const select = (num:number) => {
  show.value = num
}

// test data
const test = [
  { id: 1, label: 'Tab1', content: 'コンテンツ1' },
  { id: 2, label: 'Tab2', content: 'コンテンツ2' },
  { id: 3, label: 'Tab3', content: 'コンテンツ3' },
]

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (!showVideo.value && isIntersecting) {
      showVideo.value = true
    }
  },
)
</script>
