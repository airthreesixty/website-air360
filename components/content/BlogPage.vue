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
        <BlogCard v-for="article in displayedArticles" :key="article._path" :data="article" />
      </div>
      <div class="flex justify-center">
        <button
          v-if="canLoadMore"
          class="text-gray-500 bg-white w-[178px] h-[50px] flex justify-center border-gray-200 border text-base font-bold mt-16 mb-0 inline-block transition ease-in-out duration-300 rounded-lg px-6 py-3 mb-2 focus:outline-none"
          @click="loadMore"
        >
          <div v-if="!isLoading">
            {{ $t('load-articles') }}
          </div>
          <Loading v-if="isLoading" class="w-20 h-5" :is-full-page="false" />
        </button>
      </div>
      <div v-if="!articles.length">
        <p class="text-center text-black-600">
          {{ $t('no-search-result') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import _ from 'lodash'
import { BlogArticle } from '~~/interfaces/blog'

const route = useRoute()
const props = defineProps({
  articles: {
    type: Array as () => BlogArticle[],
    required: true,
  },
})
const isLoading = ref(false)

const numArticlesPerLoad = 6
const searchedArticles = ref<string[] | null>(null)
const articles = ref<BlogArticle[]>(props.articles)
const displayedArticles = ref<BlogArticle[]>(props.articles.slice(0, numArticlesPerLoad))

const canLoadMore = computed(() => {
  return displayedArticles.value.length < articles.value.length && searchedArticles.value === null
})

watch([searchedArticles, articles], () => {
  if (searchedArticles.value !== null) {
    displayedArticles.value = articles.value.filter(article => searchedArticles.value?.includes(article._path))
  } else {
    displayedArticles.value = articles.value.slice(0, numArticlesPerLoad)
  }
},
{ immediate: true },
)

const loadMore = async () => {
  isLoading.value = true
  const currentPage = Number(route.query.page) || 0
  await navigateTo({
    path: '/blog',
    query: {
      page: currentPage + 1,
    },
  })
  _.debounce(() => {
    const currentArticlesCount = displayedArticles.value.length
    const newArticles = articles.value.slice(
      currentArticlesCount,
      currentArticlesCount + numArticlesPerLoad,
    )
    displayedArticles.value.push(...newArticles)
    isLoading.value = false
  }, 500)()
}
</script>
