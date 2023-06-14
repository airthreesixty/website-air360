<template>
  <div :id="`collapse-${index}`" class="mt-5">
    <button :aria-expanded="isOpen[index]" data-toggle="collapse" class="w-full border-b border-gray-200" @click="onOpen(index)">
      <div class="text-black-600 font-bold lg:text-lg flex justify-between items-center pb-3">
        <slot name="title" />
        <span><fa-icon :class="{'rotate-180': isOpen[index]}" class="text-2xl ml-1 transform transition-all text-primary-600" :icon="['far', 'angle-down']" /></span>
      </div>
    </button>
    <div :class="{'max-h-screen': isOpen[index]}" class="text-gray-500 prose max-h-0 overflow-hidden transition-all duration-400 ease mt-3">
      <slot name="description" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  index: number
}

const props = defineProps<Props>()

const isOpen = ref([])

const onOpen = (index: number) => {
  isOpen.value[index] = !isOpen.value[index]
  // console.log(isOpen.value)
}
</script>
