<template>
  <section class="bg-gray-50">
    <div class="container items-center py-10 lg:py-15 mx-auto lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24">
      <div class="mb-8 lg:mb-0">
        <h2 class="mb-4 title2 font-extrabold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="text-gray-500">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div v-for="{title, description, iconName} in cards" :key="title">
          <div class="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', iconName]" />
          </div>
          <h3 class="mb-2 text-xl font-bold text-black-600">
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
    title: t('tagging-coding.card1.title'),
    description: t('tagging-coding.card1.desc'),
    iconName: 'robot-astromech',
  },
  {
    title: t('tagging-coding.card2.title'),
    description: t('tagging-coding.card2.desc'),
    iconName: 'bolt',
  },
  {
    title: t('tagging-coding.card3.title'),
    description: t('tagging-coding.card3.desc'),
    iconName: 'tag',
  },
  {
    title: t('tagging-coding.card4.title'),
    description: t('tagging-coding.card4.desc'),
    iconName: 'code',
  },
]
</script>
