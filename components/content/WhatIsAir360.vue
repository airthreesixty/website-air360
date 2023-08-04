<template>
  <section ref="target" class="bg-white pt-22">
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
      const s = document.createElement('script')
      s.setAttribute('src', 'https://fast.wistia.net/assets/external/E-v1.js')
      document.body.appendChild(s)

      showIframe.value = true
    }
  },
)
</script>
