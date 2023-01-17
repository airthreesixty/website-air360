<template>
  <nuxt-link :to="$localePath(pathWithoutLocale)">
    <article
      class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img
          class="mb-5 rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
          alt="office laptop working"
        >
      </a>
      <span
        v-for="(tag, index) in data.tags"
        :key="index"
        class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"
      >{{ $t(`tag.${tag}`) }}</span>
      <h2
        class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        <a href="#">{{ data.title }}</a>
      </h2>
      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
        Over the past year, Volosoft has undergone many changes! After months of
        preparation and some hard work, we moved to our new office.
      </p>
      <div class="flex items-center space-x-4">
        <img
          class="w-10 h-10 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          alt="Jese Leos avatar"
        >
        <div class="font-medium dark:text-white">
          <div>Jese Leos</div>
          <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
            {{
              dayjs(data.published)
                .locale($i18n.locale._value)
                .format("DD MMMM YY")
            }}
            · 16 min read
          </div>
        </div>
      </div>
    </article>
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

const pathWithoutLocale = computed(() =>
  getPathWithoutLocale(props.data._path),
)
</script>
