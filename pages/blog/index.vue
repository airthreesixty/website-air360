<template>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Our Blog
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Inspiration for conversion heroes
          </p>
        </div>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard v-for="article in data" :key="article._path" :data="article" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { $i18n } = useNuxtApp()
// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData('blog', () =>
  queryContent($i18n.locale._value, 'blog')
    .sort({ published: -1 })
    .only(['published', 'tags', 'readingTime', 'title', 'image', '_path'])
    .find(),
)
</script>
