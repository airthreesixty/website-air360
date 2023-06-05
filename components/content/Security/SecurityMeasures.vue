<template>
  <div class="bg-gray-50">
    <div class="container py-10">
      <h2 class="title2 text-center mb-5 md:mb-8">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="card in cards" :key="card.title" class="flex items-stretch">
          <Card :title="card.title" :description="card.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const cards = [
  {
    title: t('security-measures.card1.title'),
    description: t('security-measures.card1.desc'),
  },
  {
    title: t('security-measures.card2.title'),
    description: t('security-measures.card2.desc'),
  },
  {
    title: t('security-measures.card3.title'),
    description: t('security-measures.card3.desc'),
  },
  {
    title: t('security-measures.card4.title'),
    description: t('security-measures.card4.desc'),
  },
  {
    title: t('security-measures.card5.title'),
    description: t('security-measures.card5.desc'),
  },
  {
    title: t('security-measures.card6.title'),
    description: t('security-measures.card6.desc'),
  },
]
</script>
