<template>
  <Tab :name="name">
    <nuxt-img :src="src" />
    <slot />
  </Tab>
</template>

<script setup lang="ts">
import { Tabs, Tab } from 'vue3-tabs-component'

interface Props {
    src: string
    name: string
}

defineProps<Props>()
</script>
