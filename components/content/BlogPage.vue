<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-2xl tracking-tight font-extrabold text-black-600 lg:text-4xl dark:text-white"
        >
          Air360 ブログ
        </h2>
        <h3 v-if="tagList.includes(tag)" class="text-xl mb-3 text-black-600 md:text-2xl">
          {{ $t(`tag.${tag}`) }}
        </h3>
        <p class="font-light text-gray-500 md:text-xl dark:text-gray-400">
          コンバージョン率を向上させるには
        </p>
        <slot name="searchBar" />
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <slot name="articles" />
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const tagList = ['all', 'marketing', 'ux', 'other', 'ecommerce']
const tag = route.path.split('/').slice(-1)[0]
</script>
