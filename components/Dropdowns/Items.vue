<template>
  <li class="flex items-center justify-start">
    <NuxtLink :to="localePath(slug)" class="w-full py-3 border-b border-b-gray-200">
      <fa-icon class="fa-lg w-6 mr-3" :class="`${textColor}`" :icon="['far', icon]" /><span class="text-sm font-bold text-black-600">{{ text }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

interface Props {
  slug: string
  icon: string
  text: string
  textColor: string
}

defineProps<Props>()
</script>
