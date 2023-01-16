
<template>
  <main v-if="data" class="prose">
    <ContentRenderer :value="data">
      <nuxt-link v-for="(tag, index) in data.tags" :key="index" :to="$localePath(`/blog/tag/${tag}`)">
        {{ $t(`tag.${tag}`) }}
      </nuxt-link>
      <h1>
        {{ data.title }}
      </h1>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
import { BlogArticle } from '~~/interfaces/blog'

const { $i18n, $localePath } = useNuxtApp()
const route = useRoute()
const router = useRouter()

// TODO the value from the plugin is wrong, remove _value when it's fixed
const { data } = await useAsyncData(`blog-${route.params.slug}`, () => queryContent<BlogArticle>(`/${$i18n.locale._value}${getPathWithoutLocale(route.path)}`).findOne())

if (!data.value) {
  router.push($localePath('/blog'))
}
</script>
