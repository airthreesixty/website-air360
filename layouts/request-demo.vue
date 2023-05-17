<template>
  <div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
    },
  ],
  htmlAttrs: {
    lang: $i18n.locale._value,
  },
}))
</script>
