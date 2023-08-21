<template>
  <div class="container py-10 lg:pt-14 md:mb-5">
    <div class="md:(grid grid-cols-5 gap-x-4)">
      <div class="md:col-span-2 md:flex">
        <div class="self-center">
          <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
          <h1 class="font-bold text-4xl text-black-600 xl:text-5xl mt-5 md:mt-0 text-center md:text-left">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
          <div class="mx-auto md:hidden">
            <nuxt-img format="webp" :src="src" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" />
          </div>
          <p class="text-gray-500 text-center md:mt-4 md:text-left lg:text-lg xl:text-xl xl:leading-8">
            <ContentSlot :use="$slots.description" unwrap="p" />
          </p>
          <div class="flex flex-col mb-5 md:mb-0 md:items-start md:mx-0 gap-2 mt-6 w-52 lg:w-70 mx-auto">
            <a href="#request-form" class="button button-primary transition ease-in-out duration-300 hover:bg-primary-700 focus:bg-primary-700">
              <div class=" text-white font-bold text-base">
                <ContentSlot :use="$slots.cta1" unwrap="p" />
              </div>
            </a>
            <ModalPreview>
              <ContentSlot :use="$slots.cta2" unwrap="p" />
            </ModalPreview>
          </div>
        </div>
      </div>
      <div class="hidden mx-auto md:self-center md:col-span-3 md:block">
        <nuxt-img format="webp" :src="src" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModalPreview from '../ModalPreview.vue'

interface Props {
    src: string
}

defineProps<Props>()
</script>
