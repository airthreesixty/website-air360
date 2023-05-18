<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const { t } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: t('blog-index.title'),
  description: t('blog-index.description'),
  ogDescription: t('blog-index.ogDescription'),
  ogTitle: `Air360 - ${t('blog-index.title')}`,
  ogImage: '/heroIllustration.webp',
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData('blog', () =>
  queryContent($i18n.locale._value, 'blog')
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc'])
    .sort({ published: -1 })
    .find(),
)
</script>
