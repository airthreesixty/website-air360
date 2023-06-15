<template>
  <li>
    <button :aria-expanded="isOpen" class="w-full py-3 font-bold text-black-600 text-xl flex items-center justify-between" @click="toggle">
      {{ title }}<fa-icon :class="{'rotate-180': isOpen}" class="fa-lg transform transition-all text-primary-600" :icon="['far', 'angle-down']" />
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

const isOpen = ref(false)

// defineEmits<{(e: 'toggle'): void}>()
const emit = defineEmits(['toggle'])

const toggle = () => {
  isOpen.value = !isOpen.value
  emit('toggle')
}

defineProps<Props>()
</script>
