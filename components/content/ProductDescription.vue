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
        <Tabs>
          <!-- <Tab v-for="item in test" :key="item.id" :label="item.label" @open="select(item.id)" /> -->
          <slot name="tabs" />
        </Tabs>

        <nuxt-img format="webp" src="/en/autoTracking.jpeg" />
        <div class="text-gray-500">
          <div v-if="show == 1">
            <!-- <ContentSlot :use="slots.tabs." /> -->
            Tab1
          </div>
          <div v-else-if="show == 2">
            Tab2
          </div>
          <div v-else-if="show == 3">
            Tab3
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const showVideo = ref(false)

const show = ref(1)

const select = (num:number) => {
  show.value = num
}

const test = [
  { id: 1, label: 'Tab1', content: 'コンテンツ1' },
  { id: 2, label: 'Tab2', content: 'コンテンツ2' },
  { id: 3, label: 'Tab3', content: 'コンテンツ3' },
]

// const slots = useSlots()

// console.log(slots.tabs)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (!showVideo.value && isIntersecting) {
      showVideo.value = true
    }
  },
)
</script>
