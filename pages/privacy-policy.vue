<template>
  <div class="flex justify-center">
    <div class="prose max-w-screen-md px-6 py-12 lg:px-8 lg:py-16">
      <ContentPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

useHead({
  title: $i18n.t('privacy-policy.title'),
  meta: [
    { hid: 'description', name: 'description', content: $i18n.t('privacy-policy.content') },
  ],
})
</script>
