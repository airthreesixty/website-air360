<template>
  <main>
    <ContentDoc :path="path" />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const pathWithoutLocale = computed(() => getPathWithoutLocale(route.path))

const path = computed(() => {
  return `/${locale.value}${pathWithoutLocale.value}`
})
</script>
