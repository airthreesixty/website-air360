<template>
  <div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const { locale } = useI18n()
const runtimeConfig = useRuntimeConfig()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${runtimeConfig.public.baseUrl}/${$i18n.locale._value}/`,
    },
  ],
  htmlAttrs: {
    lang: locale,
  },
}))
</script>
