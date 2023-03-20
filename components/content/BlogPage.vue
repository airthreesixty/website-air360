<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-[1400px] text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-2xl tracking-tight font-extrabold text-black-600 lg:text-4xl dark:text-white"
        >
          Air360 {{ $t('blog') }}
        </h2>
        <!-- <h3 v-if="tagList.includes(tag)" class="text-xl mb-3 text-black-600 md:text-2xl">
          {{ $t(`tag.${tag}`) }}
        </h3> -->
        <p class="font-light mb-1 text-gray-500 md:text-xl dark:text-gray-400">
          {{ $t('how-to-increase-conversion') }}
        </p>
        <BlogTagsFilter />
        <BlogSearchBar v-model="searchedArticles" />
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="article in filteredArticles" :key="article._path" :data="article" />
      </div>
      <div v-if="!filteredArticles.length">
        <p class="text-center text-black-600">
          {{ $t('no-search-result') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BlogArticle } from '~~/interfaces/blog'

const props = defineProps({
  articles: {
    type: Array as () => BlogArticle[],
    required: true,
  },
})

const searchedArticles = ref<string[] | null>(null)

const filteredArticles = computed(() => {
  if (searchedArticles.value !== null) {
    return props.articles.filter(article => searchedArticles.value?.includes(article._path))
  }
  return props.articles
})
</script>
