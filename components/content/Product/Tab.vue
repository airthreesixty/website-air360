<template>
  <button @click="$emit('open')">
    <span>{{ text }}</span>
    <!-- <span><ContentSlot :use="slots.description" /></span> -->
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

// const slots = useSlots()
// console.log(slots.description)
defineProps<Props>()

defineEmits<{(e: 'open'): void, (e: 'desc'): void}>()
</script>
