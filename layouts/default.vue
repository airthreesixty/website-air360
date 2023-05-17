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
const { locale } = useI18n()
const runtimeConfig = useRuntimeConfig()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${runtimeConfig.public.baseUrl}${route.path}`,
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
}))
</script>
