<template>
  <div class="bg-white border-left-[5px] border-[1px] py-3 border-left-primary-600 px-5 rounded-lg shadow-sm">
    <button class="flex justify-between w-full py-2" :aria-expanded="isOpen" data-toggle="collapse" @click="toggle">
      <h3 class="text-black-600 text-left font-semibold transition-all text-lg lg:text-xl">
        <slot name="question" />
      </h3>
      <span><fa-icon :class="{'rotate-180': isOpen}" class="fa-xl transform transition-all text-primary-600" :icon="['fa', 'angle-up']" /></span>
    </button>
    <div
      class="text-gray-600 prose max-h-0 overflow-hidden transition-all duration-400 ease"
      :class="{'max-h-screen': isOpen}"
    >
      <slot name="answer" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
