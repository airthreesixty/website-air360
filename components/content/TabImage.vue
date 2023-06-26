<template>
  <div class="w-full mx-auto mb-5 mt-3 md:w-4/5 xl:w-full">
    <img :src="src" class="shadow-lg rounded-lg">
  </div>
</template>

<script setup lang="ts">
interface Props {
    src: string
}

defineProps<Props>()
</script>
