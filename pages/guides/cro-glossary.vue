<template>
  <div class="pt-5 pb-6 md:pb-5 lg:py-10">
    <div class="container md:(grid grid-cols-2 gap-5)">
      <div class="text-center self-center md:text-left">
        <div class="font-semibold">
          <nuxt-link :to="localePath('/guides')" class="hover:underline text-black-600">
            Guides
          </nuxt-link>
          <fa-icon class="ml-3 mr-4" :icon="['far', 'caret-right']" /><span class="text-primary-600">
            {{ data?.title }}
          </span>
        </div>
        <h1 class="title1 my-5 font-bold text-black-600">
          {{ data?.title }}
        </h1>
        <div class="text-gray-500 prose lg:text-lg xl:text-xl xl:leading-8">
          {{ data?.description }}
        </div>
      </div>
      <div class="flex items-center">
        <nuxt-img format="webp" :src="data?.image" loading="lazy" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" class="rounded-full" />
      </div>
    </div>
    <div class="bg-gray-100 mb-5">
      <ul class="flex justify-center gap-5 flex-wrap py-3 mt-5 mx-10 font-bold text-lg text-primary-600 lg:text-xl">
        <li v-for="(alphabet, index) in alphabets" :key="index" class="hover:underline">
          <nuxt-link
            :to="`#${alphabet.toLowerCase()
            }`"
          >
            {{ alphabet }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <ContentDoc />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GuideArticle } from 'interfaces/blog'

const { locale } = useI18n()

const { data } = await useAsyncData('guide-cro-glossary', () =>
  queryContent<GuideArticle>(
    locale.value, '/guides/cro-glossary',
  ).findOne(),
)

const alphabets = [...'ABCDEFGHKLMNOPQRSTUVW']
</script>
