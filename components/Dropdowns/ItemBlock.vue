<template>
  <li>
    <button class="w-full py-3 font-bold text-black-600 text-xl flex items-center justify-between" @click="$emit('toggle')">
      {{ title }}<fa-icon class="fa-lg text-primary-600" :icon="['far', 'angle-down']" />
      <span class="sr-only">Open mobile menu</span>
    </button>
    <div>
      <slot name="subItems" />
    </div>
  </li>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineEmits<{(e: 'toggle'): void}>()

defineProps<Props>()
</script>
