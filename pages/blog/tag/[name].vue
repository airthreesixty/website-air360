<template>
  <main>
    <BlogPage>
      <template #articles>
        <BlogCard v-for="article in data" :key="article._path" :data="article" />
      </template>
    </BlogPage>
  </main>
</template>

<script setup lang="ts">
const { $i18n, $localePath } = useNuxtApp()
const route = useRoute()
const router = useRouter()

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`tag-${route.params.name}`, () => queryContent($i18n.locale._value, 'blog').where({ tags: { $contains: route.params.name } }).sort({ published: -1 }).only(['published', 'tags', 'readingTime', 'title', 'image', '_path', 'metaDesc']).find())

if (!data.value) {
  router.push($localePath('/blog'))
}
</script>
