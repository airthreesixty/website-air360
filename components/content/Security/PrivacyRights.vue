<template>
  <section class="bg-white container">
    <div class="items-center py-10 lg:py-15 mx-auto lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24">
      <div class="mb-8 lg:mb-0">
        <h2 class="mb-4 title2 tracking-tight font-extrabold text-black-600 dark:text-white">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
      </div>
      <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div v-for="{title, description, iconName} in cards" :key="title">
          <div class="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <fa-icon class="fa-2x text-primary-600" :icon="['far', iconName]" />
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
    iconName: 'user-shield',
  },
  {
    title: t('privacy.card2.title'),
    description: t('privacy.card2.desc'),
    iconName: 'person-circle-minus',
  },
  {
    title: t('privacy.card3.title'),
    description: t('privacy.card3.desc'),
    iconName: 'person-sign',
  },
  {
    title: t('privacy.card4.title'),
    description: t('privacy.card4.desc'),
    iconName: 'user-magnifying-glass',
  },
]
</script>
