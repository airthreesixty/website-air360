<template>
  <a v-for="l in availableLocales" :key="l.code" :href="switchLocalePath(l.code)" class="block text-gray-600 transition-all hover:(text-primary-600 text-shadow-primary)">
    {{
      l.name
    }}
  </a>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>
