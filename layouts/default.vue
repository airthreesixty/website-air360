<template>
  <div>
    <Menu />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://jp.air360.io${route.path}`,
    },
  ],
}))
</script>
