<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// TODO install nuxt 3 module when it's out
import 'dayjs/locale/ja'

const route = useRoute()

useHead({
  titleTemplate: 'Air360 - %s',
})
</script>
