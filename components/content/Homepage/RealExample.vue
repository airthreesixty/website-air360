<template>
  <section ref="target" class="bg-white">
    <div
      class="container gap-8 items-center pt-7 xl:gap-16 md:grid md:grid-cols-2 md:py-16 lg:pb-14"
    >
      <nuxt-img loading="lazy" format="webp" class="w-full h-auto shadow-lg rounded-lg md:hidden dark:hidden" src="/clubmedResort.jpg" :alt="$t('clubmed-pic')" />
      <div class="mt-4 md:mt-0">
        <h2
          :class="{'border-b-4 border-black-600 inline-block pb-2': border}"
          class="mb-4 title2 text-left"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p
          class="mb-6 font-light text-gray-500 md:text-base lg:text-xl xl:leading-8 dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
        >
          <dl
            class="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-2 dark:text-white"
          >
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                <Vue3AutoCounter
                  ref="counter1"
                  :start-amount="0"
                  :end-amount="100"
                  :duration="3"
                  prefix="+"
                  suffix="%"
                  :autoinit="false"
                />
              </dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.achievement1" unwrap="p" />
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                <Vue3AutoCounter
                  ref="counter2"
                  :start-amount="0"
                  :end-amount="50"
                  :duration="3"
                  prefix="+"
                  suffix="%"
                  :autoinit="false"
                />
              </dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.achievement2" unwrap="p" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <nuxt-img loading="lazy" format="webp" class="hidden shadow-lg w-full h-auto rounded-lg md:block dark:hidden" src="/clubmedResort.jpg" :alt="$t('clubmed-pic')" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Vue3AutoCounter from 'vue3-autocounter'

interface Props {
  border?: Boolean
}

withDefaults(defineProps<Props>(), {
  border: () => false,
})

const target = ref()
const counter1 = ref()
const counter2 = ref()

const start = () => {
  counter1.value?.start()
  counter2.value?.start()
}

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      start()
      observer.value?.unobserve(entry.target)
    }
  }, {
    threshold: 0.5,
  })
  observer.value.observe(target.value)
})
</script>
