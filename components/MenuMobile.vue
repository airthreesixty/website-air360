<template>
  <nav :class="{'-translate-x-full': !isActive, 'translate-x-0': isActive}" class="absolute container bg-white -top-2 left-0 h-screen w-screen z-10 transform transition-all duration-500">
    <div class="flex justify-between py-3 mb-5">
      <Logo is-dark />
      <fa-icon class="fa-2xl text-gray-500" :icon="['far', 'xmark']" />
    </div>
    <div>
      <DropdownsItemBlocks />
    </div>
  </nav>
  <button class="z-100 absolute left-0" @click="toggle">
    Test
  </button>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const isActive = ref(true)

const toggle = () => {
  isActive.value = !isActive.value
}
</script>
