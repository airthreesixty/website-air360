<template>
  <main>
    <BlogPage :articles="data" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

// TODO english version as well
useHead({
  title: 'ブログ',
  meta: [
    { hid: 'description', name: 'description', content: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。' },
  ],
})

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData('blog', () =>
  queryContent($i18n.locale._value, 'blog')
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc'])
    .sort({ published: -1 })
    .find(),
)
</script>
