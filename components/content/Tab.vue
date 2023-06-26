<template>
  <Tab :name="name">
    <slot />
  </Tab>
</template>

<script setup lang="ts">
import { Tab } from 'vue3-tabs-component'

interface Props {
    name: string
}

defineProps<Props>()
</script>
