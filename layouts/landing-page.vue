<template>
  <div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const runtimeConfig = useRuntimeConfig()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${runtimeConfig.public.baseUrl}/${locale.value}/`,
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
}))
</script>
