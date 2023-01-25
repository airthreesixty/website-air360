<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-white dark:bg-gray-900"
  >
    <div class="px-4 mx-auto max-w-screen-[1400px] lg:px-8">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        関連記事
      </h2>
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="article in data" :key="article._path" :data="article" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
const { path } = useRoute()

const { data } = await useAsyncData(`blog-${path}`, () =>
  queryContent($i18n.locale._value, '/blog')
    .sort({ published: -1 })
    .where({ _path: { $ne: `/${$i18n.locale._value}${path}` } })
    .find(),
)
</script>
