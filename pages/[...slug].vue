<template>
  <main>
    <ContentDoc :path="path" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
// console.log($i18n.locale)
const route = useRoute()

const pathWithoutLocale = computed(() => {
  const matches = route.path.match(/^(\/(en|ja))?(.*)/)
  return matches ? matches[3] : ''
})

// console.log(pathWithoutLocale.value)

const path = computed(() => {
  // TODO the value from the plugin is wrong, remove _value when it's fixed
  return `/${$i18n.locale._value}${pathWithoutLocale.value}`
})
</script>
