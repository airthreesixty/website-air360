<template>
  <div class="bg-white border rounded-lg w-full p-4 sm:py-6 shadow-md max-w-[500px] mx-auto">
    <div class="flex flex-col items-center">
      <h3 class="font-bold text-lg text-black-600 mb-1">
        {{ title }}
      </h3>
      <p class="text-center text-black-600 mb-3">
        {{ description }}
      </p>
      <a v-if="more" :href="href" class="text-primary-600">More<fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  more?: boolean
  href?: string
}

withDefaults(defineProps<Props>(), {
  more: false,
  href: '/',
})
</script>
