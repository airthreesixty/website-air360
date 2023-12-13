<template>
  <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
      <fa-icon class="text-2xl lg:text-3xl text-primary-600" :icon="['far', icon]" />
    </div>
    <h3 class="mb-2 text-xl font-bold text-black-600">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>
    <p class="text-gray-500">
      <ContentSlot :use="$slots.desc" unwrap="p" />
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
    icon: string
}

defineProps<Props>()
</script>
