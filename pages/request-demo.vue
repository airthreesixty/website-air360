<template>
  <NuxtLayout name="request-demo">
    <ContentPage />
  </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
  layout: false,
})

useHead({
  title: t('request-demo.title'),
  meta: [
    { hid: 'description', name: 'description', content: t('request-demo.content') },
  ],
})
</script>
