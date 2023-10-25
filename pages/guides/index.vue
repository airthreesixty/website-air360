<template>
  <ContentDoc />
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()

useSeoMeta({
  title: t('guides.title'),
  description: t('guides.desc'),
  ogDescription: t('guides.desc'),
  ogTitle: `Air360 - ${t('guides.title')}`,
  ogImage: '/en/guides/cro-for-beginners/hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('guides') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'ItemPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
