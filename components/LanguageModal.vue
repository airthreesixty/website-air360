<template>
  <div class="absolute top-5 right-5 lg:top-11 lg:right-0">
    <div :class="{'border-gray-200': isDark, 'border-white': !isDark}" class="bg-white rounded-lg border-1 w-20 py-2 flex justify-center items-center shadow-lg">
      <LangSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
})
</script>
