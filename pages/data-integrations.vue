<template>
  <ContentDoc />
</template>

<script setup>
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('data-integrations.title'),
  description: t('data-integrations.content'),
  ogDescription: t('data-integrations.content'),
  ogTitle: t('data-integrations.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>
