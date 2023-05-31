<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: route.params.name as string,
  ogTitle: route.params.name as string,
  description: t('blog-index.description'),
  ogDescription: t('blog-index.ogDescription'),
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})

const { data } = await useAsyncData(`tag-${route.params.name}`, () => queryContent(locale.value, 'blog/').where({ tags: { $contains: route.params.name } }).sort({ published: -1 }).only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc']).find())

if (!data.value) {
  router.push(localePath('/blog'))
}
</script>
