<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('product-tour.title'),
  description: t('product-tour.content'),
  ogDescription: t('product-tour.content'),
  ogTitle: t('product-tour.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
