<template>
  <main>
    <BlogCard v-for="article in data" :key="article._path" :data="article" />
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData('blog', () => queryContent($i18n.locale._value, 'blog').sort({ published: -1 }).only(['published', 'tags', 'readingTime', 'title', 'image', '_path']).find())
</script>
