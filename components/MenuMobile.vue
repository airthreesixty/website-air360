<template>
  <nav :class="{'translate-x-full': !isActive, 'translate-x-0': isActive}" class="container fixed overflow-y-scroll bg-white top-0 right-0 h-[80vh] w-screen max-w-[375px] z-10 transform transition-all duration-500">
    <div class="flex justify-between py-3 mb-5">
      <Logo is-dark />
      <fa-icon class="fa-2xl text-gray-500 cursor-pointer" :icon="['far', 'xmark']" @click="$emit('close')" />
    </div>
    <div>
      <DropdownsItemBlocks />
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean
}

defineProps<Props>()

defineEmits<{(e: 'close'): void}>()
</script>
