<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
// TODO english version as well
if ($i18n.locale.value === 'ja') {
  useHead({
    title: 'ブログ',
    meta: [
      { hid: 'description', name: 'description', content: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。' },
    ],
  })
} else {
  useHead({
    title: 'Blog',
    meta: [
      { hid: 'description', name: 'description', content: 'Learn about the latest trends in eCommerce UX, tips and tricks for improving conversion rates, and how Air360 can help you deliver.' },
    ],
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
