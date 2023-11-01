<template>
  <nuxt-link :to="localePath(pathWithoutLocale)">
    <article
      class="relative p-4 bg-white h-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <nuxt-img
        format="webp"
        class="mb-5 rounded-lg h-50 w-full object-cover"
        :src="data.image"
        :alt="data.title"
      />
      <span
        v-for="(tag, index) in data.tags"
        :key="index"
        class="bg-blue-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
      >{{ $t(`tag.${tag}`) }}</span>
      <h2
        class="mt-2 mb-15 text-xl font-bold tracking-tight text-black-600"
      >
        {{ data.title }}
      </h2>
      <div class="flex items-center space-x-4 absolute bottom-2">
        <nuxt-img
          class="w-10 h-10 object-contain"
          :src="data.writerImg ? data.writerImg : '/mochiComputer.png'"
          :alt="$t('avatar')"
        />
        <div class="font-medium dark:text-white">
          <div>{{ data.writerName ? data.writerName : $t('air360-team') }}</div>
          <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
            {{
              $dayjs(data.published)
                .locale(locale)
                .format("YYYY-MM-DD")
            }}
            · {{ data.readingTime }} min
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
import { BlogArticle } from '~~/interfaces/blog'
const localePath = useLocalePath()
const { locale } = useI18n()

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
