<template>
  <ClientOnly>
    <Tabs :options="{ useUrlFragment: false }">
      <slot />
    </Tabs>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Tabs } from 'vue3-tabs-component'
</script>
