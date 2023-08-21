<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import Modal from './Modal.vue'

const { open } = useModal({
  component: Modal,
  slots: {
    default: `<video
          autoplay
          class="my-auto w-full rounded-lg object-cover"
          loop
          muted
          playsinline
        >
          <source data-src="/videos/promotion.mp4" type="video/mp4" src="/videos/promotion.mp4">
        </video>`,
  },
})
</script>

<template>
  <VButton class="button border-2 text-primary-600 font-bold text-base border-primary-600 transition ease-in-out duration-300 hover:opacity-80 focus:opacity-80" @click="() => open()">
    <slot />
  </VButton>
</template>
