<template>
  <div class="container my-10 pt-10 pb-6 md:pb-10 lg:pt-14">
    <div>
      <div class="text-left">
        <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
        <h1 class="title2 my-5 font-bold text-black-600">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8 max-w-[1000px]">
          <ContentSlot :use="$slots.description" />
        </div>
        <div class="flex justify-start">
          <div class="flex flex-col mt-5 md:flex-row md:gap-4">
            <div class="w-52 md:mb-0">
              <ButtonPrimary theme="primary" :slug="slug">
                {{ $t("learn-more") }}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slug: string
}

defineProps<Props>()
</script>
