<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-white dark:bg-gray-900"
  >
    <div class="container">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        {{ $t('related-articles') }}
      </h2>
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="article in articles" :key="article._path" :data="article" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const { locale } = useI18n()

const { data: currentArticle } = await useAsyncData('article', () =>
  queryContent(route.path).findOne(),
)

const { data: articles } = await useAsyncData('related-articles', () =>
  queryContent(locale.value, 'blog')
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc', 'writerImg', 'writerName'])
    .where({ tags: { $in: currentArticle?.value?.tags }, _path: { $ne: currentArticle.value?._path } } as QueryBuilderWhere)
    .sort({ published: -1, $numeric: true })
    .limit(3)
    .find(),
)

// console.log([currentArticle.value.tags[0]])
// typescript complains about the useAsyncData type
// const { data } = await useAsyncData(`${route.params.slug}/`, async () => {
//   const randomPosts = await queryContent($i18n.locale._value, '/blog')
//     .where({ _path: { $ne: `/${$i18n.locale._value}${path}` } })
//     .sort({ published: -1 })
//     .limit(100)
//     .find()

//   const selectedPosts = shuffle(randomPosts).slice(0, 3)

//   return selectedPosts
// })

// function shuffle (array:any[]) {
//   let currentIndex = array.length
//   let temporaryValue, randomIndex

//   // While there remain elements to shuffle...
//   while (currentIndex !== 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex -= 1

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex]
//     array[currentIndex] = array[randomIndex]
//     array[randomIndex] = temporaryValue
//   }

//   return array
// }
</script>
