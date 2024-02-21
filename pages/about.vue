<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('about.title'),
  description: t('about.content'),
  ogDescription: t('about.content'),
  ogTitle: t('about.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
