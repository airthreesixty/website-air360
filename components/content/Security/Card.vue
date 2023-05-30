<template>
  <div class="border rounded-lg p-4 shadow-md">
    <div class="flex flex-col items-center">
      <h2 class="font-bold text-black-600 mb-1">
        {{ title }}
      </h2>
      <p class="text-center text-black-600 mb-3">
        {{ description }}
      </p>
      <a v-if="more" href="#" class="text-primary-600">More<fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  more?: boolean
}

withDefaults(defineProps<Props>(), {
  more: false,
})
</script>
