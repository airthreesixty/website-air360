<template>
  <div>
    <slot name="dropdowns" :collapse-status="collapseStatus" />
  </div>
</template>

<script setup lang="ts">
const collapseStatus = ref([])
</script>
