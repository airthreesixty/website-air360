<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container py-10 text-center lg:py-16">
      <figure class="max-w-screen-md mx-auto">
        <svg
          class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p class="text-2xl lg:text-3xl font-medium text-black-600">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <nuxt-img
            format="webp"
            class="w-15 h-15"
            :src="src"
            :alt="alt"
          />
          <div
            class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
          >
            <div class="pr-3 font-medium text-black-600 dark:text-white">
              <ContentSlot :use="$slots.name" unwrap="p" />
            </div>
            <div
              class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
            >
              <ContentSlot :use="$slots.role" unwrap="p" />
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  alt: string
  src: string
}

defineProps<Props>()
</script>
