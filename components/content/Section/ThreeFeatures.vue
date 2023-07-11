<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
      <h2 class="mb-4 title2 max-w-[900px] mx-auto">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <!-- <p class="text-gray-500 sm:text-xl dark:text-gray-400">
        Here are a few reasons why you should choose Flowbite
      </p> -->
      <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon1]" />
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            <ContentSlot :use="$slots.title1" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.desc1" unwrap="p" />
          </p>
        </div>
        <div>
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon2]" />
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            <ContentSlot :use="$slots.title2" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.desc2" unwrap="p" />
          </p>
        </div>
        <div>
          <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon3]" />
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            <ContentSlot :use="$slots.title3" unwrap="p" />
          </h3>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.desc3" unwrap="p" />
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
}

defineProps<Props>()
</script>
