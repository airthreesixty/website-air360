<template>
  <button @click="$emit('open')">
    <!-- <span>{{ text }}</span> -->
    <nuxt-img format="webp" src="/en/autoTracking.jpeg" />
    <div class="text-gray-500">
      <ContentSlot :use="slots.description" />
    </div>
    <!-- <span><ContentSlot :use="slots.description" /></span> -->
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string
}

const slots = useSlots()
// I would like to pass the description by <ContentSlot :use="slots.description" /> to the parent or a better way?

defineProps<Props>()

defineEmits<{(e: 'open'): void}>()
</script>
