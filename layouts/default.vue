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

<style lang="postcss">
.dropdown {
  @apply absolute bg-white p-4 rounded-lg border-gray-100 border;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
