<template>
  <div>
    <fa-icon class="fa-3x text-primary-600 mb-2" :icon="['far', icon]" />
    <h3 class="mb-2 text-xl font-bold text-black-600" :class="{'text-white':dark}">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>
    <p class="mb-4 text-gray-500" :class="{'text-gray-300':dark}">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
    icon: string
    dark?: boolean
}

defineProps<Props>()
</script>
