<template>
  <NuxtLink v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)" class="text-gray-600 transition-all hover:(text-primary-600 text-shadow-primary)">
    {{
      l.name
    }}
  </NuxtLink>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>
