<template>
  <button type="button" @click="copy(source)">
    <fa-icon class="fa-xl" :icon="['fas', 'link']" />
  </button>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const source = computed(() => `${runtimeConfig.public.baseUrl}${route.fullPath}`)
const { copy } = useClipboard({ source })
</script>
