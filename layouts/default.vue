<template>
  <div>
    <Menu />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale, locales } = useI18n()
const runtimeConfig = useRuntimeConfig()
const { $localePath } = useNuxtApp()

const hrefAlternate = computed(() => {
  return locales.value
    .filter(l => l.code !== locale.value)
    .map(l => ({
      ref: 'alternate',
      hreflang: l.iso,
      href: `${runtimeConfig.public.baseUrl}${$localePath(getPathWithoutLocale(route.fullPath), l.code)}`,
    }))
})

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
    },
    ...hrefAlternate.value,
  ],
  htmlAttrs: {
    lang: locale.value,
  },
}))
</script>

<style lang="postcss">
.dropdown {
  @apply absolute bg-white p-4 rounded-lg border-gray-100 border;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
