<template>
  <AsyncPage page="product" />
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()

useSeoMeta({
  title: t('product.title'),
  description: t('product.description'),
  ogDescription: t('product.ogDescription'),
  ogTitle: `Air360 - ${t('product.title')}`,
  ogImage: '/en/sunburst.png',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('product.title') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
