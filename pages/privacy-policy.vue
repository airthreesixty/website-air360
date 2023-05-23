<template>
  <div class="flex justify-center">
    <div class="prose max-w-screen-md px-6 py-12 lg:px-8 lg:py-16">
      <ContentDoc />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('privacy-policy.title'),
  meta: [
    { hid: 'description', name: 'description', content: t('privacy-policy.content') },
  ],
})
</script>
