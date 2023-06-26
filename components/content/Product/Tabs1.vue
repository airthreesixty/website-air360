<template>
  <!-- <div class="w-full whitespace-nowrap py-6 overflow-x-auto">
    <div class="flex justify-start gap-x-5">
      <slot />
    </div>
  </div> -->
  <Tabs>
    <Tab name="Auto-Tracking">
      Test1
    </Tab>
    <Tab name="Custom data collection">
      Test2
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { Tab, Tabs } from 'vue3-tabs-component'
</script>
