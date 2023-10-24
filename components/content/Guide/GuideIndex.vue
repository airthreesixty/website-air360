import { GuideCard } from '.nuxt/components';
<template>
  <div class="container py-10">
    <div class="md:(grid grid-cols-2 gap-15 items-center)">
      <nuxt-link :to="mainGuide._path" class="hover:opacity-85 transition">
        <nuxt-img class="rounded-full" format="webp" :src="mainGuide.image" />
      </nuxt-link>
      <div class="mt-5 md:mt-0">
        <span class="text-primary-600 font-bold">Guides</span>
        <nuxt-link :to="mainGuide._path">
          <h1 class="title1 mb-5 mt-2 hover:underline">
            {{ mainGuide.title }}
          </h1>
        </nuxt-link>
        <p class="textp">
          {{ mainGuide.description }}
        </p>
      </div>
    </div>
    <div class="mt-10">
      <div>
        <h2 class="title2 mb-10">
          Latest guides
        </h2>
        <GuideCard :data="guides" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const { data: mainGuide } = await useAsyncData('main-guide', () =>
  queryContent(
    locale.value,
    'guides/cro-for-beginners',
  ).findOne(),
)

const { data: guides } = await useAsyncData('guides', () =>
  queryContent(
    locale.value,
    'guides/',
  ).where({
    _path: { $ne: '/en/guides/cro-for-beginners' },
  }).find(),
)

console.log(guides)
</script>
