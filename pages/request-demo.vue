<template>
  <NuxtLayout name="request-demo">
    <ContentPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
})

useHead({
  title: 'デモのリクエスト',
  meta: [
    { hid: 'description', name: 'description', content: '' },
  ],
})
</script>
