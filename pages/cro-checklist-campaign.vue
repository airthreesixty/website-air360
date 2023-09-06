<template>
  <div>
    <ContentDoc />
    <ModalsContainer />
  </div>
</template>

<script setup>
import { ModalsContainer } from 'vue-final-modal'
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('promotion-lp.title'),
  description: t('promotion-lp.content'),
  ogDescription: t('promotion-lp.content'),
  ogTitle: t('promotion-lp.title'),
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  ogImage: `${runtimeConfig.public.baseUrl}/promotion/checklist.png`,
  twitterCard: 'summary_large_image',
})
</script>
