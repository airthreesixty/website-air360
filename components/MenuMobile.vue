<template>
  <nav :class="{'-translate-x-full': !isActive, 'translate-x-0': isActive}" class="absolute container overflow-y-scroll bg-white -top-2 left-0 h-screen w-screen z-10 transform transition-all duration-500">
    <div class="flex justify-between py-3 mb-5">
      <Logo is-dark />
      <fa-icon class="fa-2xl text-gray-500" :icon="['far', 'xmark']" @click="$emit('close')" />
    </div>
    <div>
      <DropdownsItemBlocks />
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  isActive: () => void
}

defineProps<Props>()

defineEmits<{(e: 'close'): void}>()
</script>
