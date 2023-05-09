<template>
  <div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: 'https://jp.air360.io/',
    },
  ],
}))
</script>
