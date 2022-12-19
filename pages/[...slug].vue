<template>
  <main>
    <ContentDoc class="prose" :path="path" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const route = useRoute()

const pathWithoutLocale = computed(() => {
  const matches = route.path.match(/^(\/(en|ja))?(.*)/)
  return matches ? matches[3] : ''
})

const path = computed(() => {
  // TODO the value from the plugin is wrong, remove _value when it's fixed
  return `/${$i18n.locale._value}${pathWithoutLocale.value}`
})
</script>
