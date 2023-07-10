<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('events-segments.title'),
  description: t('events-segments.content'),
  ogDescription: t('events-segments.content'),
  ogTitle: t('events-segments.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
