<template>
  <div class="bg-white">
    <div class="w-full border-left-[5px] border-[1px] border-left-primary-600 p-5 rounded-lg shadow-sm" @click="toggle">
      <div class="flex justify-between">
        <h3 class="text-black-600 font-semibold">
          <slot name="question" />
        </h3>
        <span><fa-icon :class="{'rotate-180': isOpen}" class="fa-xl pl-1 transform transition-all text-primary-600" :icon="['fa', 'angle-up']" /></span>
      </div>
      <p
        v-show="isOpen"
        class="mt-4 text-gray-600"
      >
        <slot name="answer" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
