<template>
  <section class="bg-white py-10 lg:py-14 overflow-hidden">
    <div class="text-center container md:(grid grid-cols-2 items-center justify-around gap-3)">
      <div class="relative max-w-[500px] mx-auto">
        <nuxt-img :src="src" class="mb-8" />
      </div>
      <div class="p-5 lg:p-10">
        <div id="roadmap-download-form" class="h-160 md:h-158 lg:h-140">
          <!-- <h2 class="title3 my-10">
            <ContentSlot :use="$slots.formTitle" unwrap="p" />
          </h2> -->
          <!-- <div class="md:text-left">
            <span class="text-primary-600 font-bold"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
            <h1 class="title2 mt-5 mb-8">
              <ContentSlot :use="$slots.title" unwrap="p" />
            </h1>
          </div>
          <div id="form">
            <Loading class="w-20 h-5 mx-auto" :is-full-page="false" />
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { createWidget } from '@typeform/embed'

onMounted(() => {
  createWidget('VL6oTlqs', {
    container: document.querySelector('#roadmap-download-form')!,
  })
})

interface Props {
  src: string
}

defineProps<Props>()
</script>
