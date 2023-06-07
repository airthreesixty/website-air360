<template>
  <section class="bg-white container">
    <div class="items-center py-10 lg:py-15 mx-auto lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24">
      <div class="mb-8 lg:mb-0">
        <h2 class="mb-4 title2 tracking-tight font-extrabold text-gray-900 dark:text-white">
          Air360 Privacy Rights
        </h2>
      </div>
      <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div v-for="{title, description} in cards" :key="title">
          <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {{ title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const cards = [
  {
    title: t('privacy.card1.title'),
    description: t('privacy.card1.desc'),
  },
  {
    title: t('privacy.card2.title'),
    description: t('privacy.card2.desc'),
  },
  {
    title: t('privacy.card3.title'),
    description: t('privacy.card3.desc'),
  },
  {
    title: t('privacy.card4.title'),
    description: t('privacy.card4.desc'),
  },
]
</script>
