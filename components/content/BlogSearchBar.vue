<template>
  <form class="pt-4" @submit.prevent="onSubmit">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input id="default-search" v-model="filterText" type="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-primary-600 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </form>
  <div>{{ result }}</div>
  <!-- <div>
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-search-box />
      <ais-hits />
    </ais-instant-search>
  </div> -->
</template>

<script lang="ts" setup>
import algoliasearch from 'algoliasearch'
const { $i18n } = useNuxtApp()

// const { data } = await useAsyncData('blog', () =>
//   queryContent($i18n.locale._value, 'blog')
//     .sort({ published: -1 })
//     .find(),
// )

const client = algoliasearch('DXKTKKA6AW', '4d4f8640a1b55b42924a5e9fdf8658ef')
const index = client.initIndex('articles')
const records = [
  { name: 'Tom Cruise' },
  { name: 'Scarlett Johansson' },
]

index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
// import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es/index.js'
// const indexName = 'articles'
// const algolia = useAlgoliaRef()

const filterText = ref('')
const onSubmit = async () => {
  console.log("hey")
  await search({ query: filterText })
}

const { result, search } = useAlgoliaSearch('articles')
// onMounted(async () => {
//   await search({ query: filterText })
// })

// console.log(data._value)
</script>
