<template>
  <div class="container pt-10 pb-6 md:pb-10 lg:pt-14">
    <div class="md:(grid grid-cols-2)">
      <div class="text-center md:text-left">
        <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
        <h1 class="title1 my-5 font-bold text-black-600">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" />
        </div>
        <div class="flex justify-center md:justify-start">
          <div class="flex flex-col mt-5 md:flex-row md:gap-4">
            <div class="w-52 md:mb-0">
              <PopupTrigger id="AJVqkglY">
                <ButtonPrimary theme="primary" slug="javascript:void(0)">
                  {{ $t("request-demo.title") }}
                </ButtonPrimary>
              </PopupTrigger>
            </div>
            <p v-if="app" class="mt-2 md:mt-0 text-black-600 flex items-center justify-center">
              <ContentSlot :use="$slots.subDescription" />
              <span class="ml-1"><img src="/iosIcon.svg" class="w-10" alt="IOS icon"></span>
            </p>
          </div>
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
  app?: boolean
  src: string
}

withDefaults(defineProps<Props>(), {
  app: false,
})
</script>
