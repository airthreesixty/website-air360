<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
      <h2 class="mb-4 title2">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <p class="text-gray-500 sm:text-xl">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
      <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
        <div class="flex flex-col">
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon1]" />
          <h3 class="mb-2 text-xl font-bold text-black-600">
            <ContentSlot :use="$slots.title1" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500">
            <ContentSlot :use="$slots.desc1" unwrap="p" />
          </p>
        </div>
        <div class="flex flex-col">
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon2]" />
          <h3 class="mb-2 text-xl font-bold text-black-600">
            <ContentSlot :use="$slots.title2" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.desc2" unwrap="p" />
          </p>
        </div>
        <div class="flex flex-col">
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon3]" />
          <h3 class="mb-2 text-xl font-bold text-black-600">
            <ContentSlot :use="$slots.title3" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.desc3" unwrap="p" />
          </p>
        </div>
        <div class="flex flex-col">
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon4]" />
          <h3 class="mb-2 text-xl font-bold text-black-600">
            <ContentSlot :use="$slots.title4" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500">
            <ContentSlot :use="$slots.desc4" unwrap="p" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  icon1: string
  icon2: string
  icon3: string
  icon4: string
}

defineProps<Props>()
</script>
