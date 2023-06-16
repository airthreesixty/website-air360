<template>
  <ContentDoc />
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()

useSeoMeta({
  title: t('website-analysis.title'),
  description: t('website-analysis.description'),
  ogDescription: t('website-analysis.description'),
  ogTitle: `Air360 - ${t('website-analysis.title')}`,
  ogImage: '/en/product/hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('website-analysis.title') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
