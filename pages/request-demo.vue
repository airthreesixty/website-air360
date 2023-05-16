<template>
  <NuxtLayout name="request-demo">
    <ContentPage />
  </NuxtLayout>
</template>

<script setup>
const { $i18n } = useNuxtApp()

definePageMeta({
  layout: false,
})

useHead({
  title: $i18n.t('request-demo.title'),
  meta: [
    { hid: 'description', name: 'description', content: $i18n.t('request-demo.content') },
  ],
})
</script>
