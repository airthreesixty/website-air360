<template>
  <ContentDoc />
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('contact.title'),
  meta: [
    { hid: 'description', name: 'description', content: t('contact.content') },
  ],
})
</script>
