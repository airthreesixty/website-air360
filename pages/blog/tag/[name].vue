<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { $i18n, $localePath } = useNuxtApp()
const route = useRoute()
const router = useRouter()

// TODO english version as well
if ($i18n.locale.value === 'ja') {
  useSeoMeta({
    title: route.params.name as string,
    ogTitle: route.params.name as string,
    description: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。',
    ogDescription: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。',
    twitterCard: 'summary_large_image',
    ogUrl: `https://jp.air360.io/blog/tag/${route.params.name}/`,
  })
} else {
  useHead({
    title: 'Blog',
  })
}
// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`tag-${route.params.name}`, () => queryContent($i18n.locale._value, 'blog/').where({ tags: { $contains: route.params.name } }).sort({ published: -1 }).only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc']).find())

if (!data.value) {
  router.push($localePath('/blog'))
}
</script>
