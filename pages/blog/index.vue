<template>
  <BlogPage :articles="data" />
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const localePath = useLocalePath()

useSeoMeta({
  title: t('blog-index.title'),
  description: t('blog-index.description'),
  ogDescription: t('blog-index.ogDescription'),
  ogTitle: `Air360 - ${t('blog-index.title')}`,
  ogImage: '/heroIllustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

const { data } = await useAsyncData('blog', () =>
  queryContent(locale.value, 'blog')
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc'])
    .sort({ published: -1 })
    .find(),
)

const breadcrumbs = [
  { name: t('home'), item: localePath('/') },
  { name: t('blog') },
]

useSchemaOrg([
  defineWebPage({
    '@type': 'ItemPage',
  }),
  defineBreadcrumb({ itemListElement: breadcrumbs }),
])
</script>
