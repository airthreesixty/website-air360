<template>
  <div class="flex flex-col items-center">
    <div class="icon-bg-color w-18 h-18 flex justify-center items-center rounded-lg mb-2">
      <fa-icon class="fa-3x icon-color" :icon="['far', icon]" />
    </div>
    <h3 class="mb-2 text-xl font-bold text-black-600" :class="{'text-white':dark}">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>
    <p class="mb-4 text-gray-500" :class="{'text-gray-300':dark}">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
    icon: string
    dark?: boolean
    color?: string
    bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#e74b91',
  bgColor: '#FCE9F2',
})

const theme = {
  color: props.color,
  bgColor: props.bgColor,
}
</script>

<style lang="postcss" scoped>
.icon-color {
  color: v-bind('theme.color');
}

.icon-bg-color {
  background-color: v-bind('theme.bgColor');
}
</style>
