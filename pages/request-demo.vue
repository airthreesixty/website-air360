<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
  layout: 'request-demo',
})

useHead({
  title: t('request-demo.title'),
  meta: [
    { hid: 'description', name: 'description', content: t('request-demo.content') },
  ],
})
</script>
