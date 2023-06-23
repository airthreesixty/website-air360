<template>
  <div class="mt-5 h-auto">
    <button :aria-expanded="isOpen" data-toggle="collapse" class="w-full border-b border-gray-200" @click="onOpen">
      <div class="text-black-600 font-bold lg:text-lg xl:text-xl flex justify-between items-center pb-3">
        <slot name="title" />
        <span><fa-icon :class="{'rotate-180': isOpen}" class="text-2xl ml-1 transform transition-all icon-color" :icon="['far', 'angle-down']" /></span>
      </div>
    </button>
    <div v-show="isOpen" class="text-gray-500 prose transition-all duration-400 ease mt-3">
      <slot name="description" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: boolean
}

withDefaults(defineProps<Props>(), {
  product: false,
})

const isOpen = ref(false)

useListen('dropdown:close', () => {
  isOpen.value = false
})

const onOpen = () => {
  const oldIsOpen = isOpen.value
  useEvent('dropdown:close')
  // Wait for the dropdowns to close
  nextTick(() => {
    isOpen.value = !oldIsOpen
  })
}
</script>
