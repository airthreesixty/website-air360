<template>
  <nuxt-link :to="$localePath(pathWithoutLocale)">
    <div>{{ data.title }}</div>
    <div>{{ dayjs(data.published).locale($i18n.locale._value).format('DD MMMM YY') }}</div>
    <div><span v-for="(tag, index) in data.tags" :key="index">{{ $t(`tag.${tag}`) }}</span></div>
    <div>TODO...</div>
  </nuxt-link>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { BlogArticle } from '~~/interfaces/blog'
const { $localePath, $i18n } = useNuxtApp()

const props = defineProps({
  data: {
    type: Object as () => BlogArticle,
    required: true,
  },
})

const pathWithoutLocale = computed(() => getPathWithoutLocale(props.data._path))
</script>
