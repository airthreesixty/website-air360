<template>
  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-white dark:bg-gray-900"
  >
    <div class="px-6 mx-auto max-w-screen-[1400px] lg:px-8">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        {{ $t('related-articles') }}
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
const route = useRoute()

// typescript complains about the useAsyncData type

const { data } = await useAsyncData(`${route.params.slug}`, async () => {
  const randomPosts = await queryContent($i18n.locale._value, '/blog')
    .where({ _path: { $ne: `/${$i18n.locale._value}${path}` } })
    .sort({ published: -1 })
    .limit(100)
    .find()

  const selectedPosts = shuffle(randomPosts).slice(0, 3)

  return selectedPosts
})

function shuffle (array:any[]) {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
</script>
