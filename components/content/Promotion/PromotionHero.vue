<template>
  <div class="container py-10 lg:pt-14">
    <div class="md:(grid grid-cols-5 gap-x-4)">
      <div class="text-center md:text-left md:col-span-2">
        <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
        <h1 class="title1 my-5 font-bold text-black-600">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="text-gray-500 lg:text-lg xl:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <div class="flex flex-col gap-4 w-[50%]">
          <ButtonPrimary theme="primary">
            製品デモをリクエスト
          </ButtonPrimary>
          <ButtonPrimary theme="outlinePrimary">
            5分のデモ動画を視聴
          </ButtonPrimary>
        </div>
      </div>
      <div class="mt-5 md:mt-0 mx-auto md:self-center md:col-span-3">
        <nuxt-img format="webp" :src="src" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" />
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
