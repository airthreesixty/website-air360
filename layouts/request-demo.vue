<template>
  <div>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://air360.io/${$i18n.locale._value}/request-demo/`,
    },
  ],
  htmlAttrs: {
    lang: $i18n.locale._value,
  },
}))
</script>
