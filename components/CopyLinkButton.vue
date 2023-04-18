<template>
  <button data-tooltip-target="tooltip-link" class="inline-flex items-center p-[5.5px] md:p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" @click="copy(source)">
    <div
      class="text-primary-600 transition ease-in-out duration-300 hover:text-primary-700 dark:hover:text-white"
    >
      <fa-icon class="fa-xl" :icon="['fas', 'link']" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const route = useRoute()

const source = computed(() => `https://jp.air360.io${route.fullPath}`)
const { copy } = useClipboard({ source })
</script>
