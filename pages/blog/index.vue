<template>
  <main>
    <BlogPage>
      <!-- <template #searchBar>
        <BlogSearchBar />
      </template> -->
      <template #articles>
        <BlogCard v-for="article in data" :key="article._path" :data="article" />
      </template>
    </BlogPage>
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()

useHead({
  title: 'ブログ',
  meta: [
    { hid: 'description', name: 'description', content: 'eコマースUXの最新トレンド、コンバージョン率向上のためのヒントやコツ、Air360がどのように提供できるかをご紹介します。' },
  ],
})

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData('blog', () =>
  queryContent($i18n.locale._value, 'blog')
    .sort({ published: -1 })
    .find(),
)
</script>
