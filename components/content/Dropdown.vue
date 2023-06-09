<template>
  <div>
    <button :aria-expanded="isOpen" data-toggle="collapse" @click="onOpen">
      <div class="text-black-600 font-bold">
        {{ text }} <span><fa-icon :class="{'rotate-180': isOpen}" class="text-lg ml-1 transform transition-all text-primary-600" :icon="['far', 'angle-down']" /></span>
      </div>
    </button>
    <div v-if="isOpen" class="text-gray-600 mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

defineProps({
  text: {
    type: String,
    required: true,
  },
})

const onOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>
