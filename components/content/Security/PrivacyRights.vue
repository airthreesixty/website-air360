<template>
  <div class="bg-white">
    <div class="container py-10 lg:py-15">
      <h2 class="title2 text-center mb-5 md:mb-10">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- <div v-for="{title, description} in cards" :key="title" class="flex items-stretch">
          <Card :title="title" :description="description" />
        </div> -->
        <div v-for="{title, description} in cards" :key="title">
          <FlipCard :title="title" :description="description" />
        </div>
      </div>
    </div>
  </div>
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
