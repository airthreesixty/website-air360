<template>
  <div class="flex flex-col items-center">
    <div class="w-18 h-18 flex justify-center items-center rounded-lg mb-2" :class="`bg-${color}-100`">
      <fa-icon class="fa-3x" :icon="['far', icon]" :class="`text-${color}-600`" />
    </div>
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
    color?: string
}

withDefaults(defineProps<Props>(), {
  color: 'primary',
})
</script>
