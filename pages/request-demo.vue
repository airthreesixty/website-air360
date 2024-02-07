<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('request-demo.title'),
  description: t('request-demo.content'),
  ogDescription: t('request-demo.content'),
  ogTitle: t('request-demo.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
