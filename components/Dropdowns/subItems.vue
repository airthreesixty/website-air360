<template>
  <p class="font-bold text-black-600 mt-1 mb-2">
    {{ title }}
  </p>
  <ul class="mb-3">
    <slot name="items" />
  </ul>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>
