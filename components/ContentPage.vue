<template>
  <main>
    <ContentDoc :path="path" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const route = useRoute()

const pathWithoutLocale = computed(() => getPathWithoutLocale(route.path))

const path = computed(() => {
  // TODO the value from the plugin is wrong, remove _value when it's fixed
  return `/${$i18n.locale._value}${pathWithoutLocale.value}`
})
</script>
