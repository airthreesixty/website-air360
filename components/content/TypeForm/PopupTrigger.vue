<template>
  <div @click="toggle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import '@typeform/embed/build/css/popup.css'
import { createPopup } from '@typeform/embed'

interface Props {
    id: string
}

const props = defineProps<Props>()

const toggle = ref<(() => void) | undefined>(undefined)

onMounted(() => {
  try {
    const popup = createPopup(props.id)
    toggle.value = popup.toggle
  } catch (error) {
    console.error(error)
  }
})
</script>
