<template>
  <div class="pt-4">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <input
        id="default-search"
        v-model="filterText"
        type="search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-primary-600 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
      <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Search
      </button> -->
    </div>
  </div>
  <!-- <div>{{ result }}</div> -->
</template>

<script lang="ts" setup>

defineProps({
  modelValue: {
    type: Array as () => string[] | null,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const config = useRuntimeConfig()
const { result, search } = useAlgoliaSearch(config.public.algoliaDocsearchIndexName)

const filterText = ref('')

// const onSubmit = async () => {
//   if (filterText.value) {
//     await search({ query: filterText.value })
//     // ['/ja/blog/leverage-cro-for-stability-in-unpredictable-times']
//     emit('update:modelValue', result.value.hits.map(h => `/${h.lang}/blog/${h.slug}`))
//   } else {
//     emit('update:modelValue', null)
//   }
// }

watch(filterText, async (_, _2) => {
  if (filterText.value) {
    await search({ query: filterText.value })
    emit('update:modelValue', result.value.hits.map(h => `/${h.lang}/blog/${h.slug}`))
  } else {
    emit('update:modelValue', null)
  }
})
</script>
