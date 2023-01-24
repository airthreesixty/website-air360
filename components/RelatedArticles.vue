<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-white dark:bg-gray-900"
  >
    <div class="px-4 mx-auto max-w-screen-[1400px] lg:px-8">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        関連記事
      </h2>
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <BlogCard v-for="article in data" :key="article._path" :data="article">
        </BlogCard>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { BlogArticle } from '~~/interfaces/blog'
const { $i18n } = useNuxtApp()

const route = useRoute()

const props = defineProps({
  data: {
    type: Object as () => BlogArticle,
    required: true,
  },
})

console.log(route.fullPath)

const { data } = await useAsyncData('blog', () =>
  queryContent($i18n.locale._value, 'blog')
    .sort({ published: -1 })
    .find(),
)
</script>
