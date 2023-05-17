<template>
  <div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
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
    lang: locale.value,
  },
}))
</script>
