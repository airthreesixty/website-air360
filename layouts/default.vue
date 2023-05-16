<template>
  <div>
    <Menu />
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { $i18n } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${runtimeConfig.public.baseUrl}${route.path}`,
    },
  ],
  htmlAttrs: {
    lang: $i18n.locale._value,
  },
}))
</script>
