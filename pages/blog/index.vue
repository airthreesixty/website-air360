<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
// TODO english version as well
if ($i18n.locale.value === 'ja') {
  useSeoMeta({
    title: 'ブログ',
    description: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。',
    ogDescription: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。',
    ogTitle: 'Air360 - ブログ',
    ogImage: 'https://air360.io/wp-content/uploads/2022/11/conversion-rate-optimization.jpg',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://air360.io/ja/blog/',
  })
} else {
  useSeoMeta({
    title: 'Blog',
    description: 'Learn about the latest trends in eCommerce UX, tips and tricks for improving conversion rates, and how Air360 can help you deliver.',
    ogDescription: 'Learn about the latest trends in eCommerce UX, tips and tricks for improving conversion rates, and how Air360 can help you deliver.',
    ogTitle: 'Air360 - Blog',
    ogImage: 'https://air360.io/wp-content/uploads/2022/11/conversion-rate-optimization.jpg',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://air360.io/en/blog/',
  })
}

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData('blog', () =>
  queryContent($i18n.locale._value, 'blog')
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc'])
    .sort({ published: -1 })
    .find(),
)
</script>
