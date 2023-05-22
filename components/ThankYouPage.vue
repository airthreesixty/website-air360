<template>
  <div class="container mx-auto pb-12">
    Thank you
    <div class="">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 text-center">
        Warning - Only for Conversion Rate Heroes
      </h2>
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="article in articles" :key="article._path" :data="article" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const { data: articles } = await useAsyncData(`articles-${route.params.slug}`, async () => {
  return await queryContent(locale.value, '/blog')
    .sort({ published: -1 })
    .limit(3)
    .find()
})
</script>
