<template>
  <div class="container pt-5 pb-6 md:pb-5 lg:py-10">
    <div class="md:(grid grid-cols-2 gap-5)">
      <div class="text-center self-center md:text-left">
        <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
        <h1 class="title1 my-5 font-bold text-black-600">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" />
        </div>
      </div>
      <div class="flex items-center">
        <nuxt-img format="webp" :src="src" loading="lazy" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
}

defineProps<Props>()
</script>
