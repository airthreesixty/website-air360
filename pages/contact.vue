<template>
  <ContentPage />
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

useHead({
  title: $i18n.t('contact.title'),
  meta: [
    { hid: 'description', name: 'description', content: $i18n.t('contact.content') },
  ],
})
</script>
