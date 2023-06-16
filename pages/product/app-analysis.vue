<template>
  <ContentDoc />
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()

useSeoMeta({
  title: t('app-analysis.title'),
  description: t('app-analysis.description'),
  ogDescription: t('app-analysis.description'),
  ogTitle: `Air360 - ${t('app-analysis.title')}`,
  ogImage: '/en/product/hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('app-analysis.title') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
