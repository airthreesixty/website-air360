<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { $i18n, $localePath } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const runtimeConfig = useRuntimeConfig()

if ($i18n.locale.value === 'ja') {
  useSeoMeta({
    title: route.params.name as string,
    ogTitle: route.params.name as string,
    description: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。',
    ogDescription: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。',
    twitterCard: 'summary_large_image',
    ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  })
} else {
  useSeoMeta({
    title: route.params.name as string,
    ogTitle: route.params.name as string,
    description: 'Learn about the latest trends in eCommerce UX, tips and tricks for improving conversion rates, and how Air360 can help you deliver.',
    ogDescription: 'Learn about the latest trends in eCommerce UX, tips and tricks for improving conversion rates, and how Air360 can help you deliver.',
    twitterCard: 'summary_large_image',
    ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
  })
}
// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`tag-${route.params.name}`, () => queryContent($i18n.locale._value, 'blog/').where({ tags: { $contains: route.params.name } }).sort({ published: -1 }).only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc']).find())

if (!data.value) {
  router.push($localePath('/blog'))
}
</script>
