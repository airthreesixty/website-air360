<template>
  <section
    ref="target"
    class="bg-gray-50 py-10 md:py-14 xl:py-20"
  >
    <div class="container text-center xl:(grid grid-cols-5 gap-5)">
      <div class="col-span-2">
        <h2 class="title3 text-black-600 max-w-[700px] mx-auto font-bold text-center xl:text-left">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp xl:text-left my-4 md:mb-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
        <p class="text-black-600 font-bold lg:text-lg xl:text-left my-4 md:mb-8">
          <ContentSlot :use="$slots.description2" unwrap="p" />
        </p>
      </div>
      <div class="grid md:grid-cols-3 xl:col-span-3 gap-8">
        <div v-for="{icon, title, desc}, index in cards" :key="index" class="shadow-primary p-5 rounded-lg">
          <div class="flex items-center justify-start md:justify-center mb-2">
            <fa-icon class="text-xl w-9 text-primary-600 lg:text-3xl" :icon="['far', icon]" /><h3 class="text-black-600 font-bold text-lg">
              {{ title }}
            </h3>
          </div>
          <p class="text-gray-500 text-left md:text-center">
            {{ desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const target = ref()
const { t } = useI18n()

const cards = [
  {
    icon: 'circle-check',
    title: t('smooth-checkout.card1.title'),
    desc: t('smooth-checkout.card1.desc'),
  },
  {
    icon: 'circle-check',
    title: t('smooth-checkout.card2.title'),
    desc: t('smooth-checkout.card2.desc'),
  },
  {
    icon: 'circle-check',
    title: t('smooth-checkout.card3.title'),
    desc: t('smooth-checkout.card3.desc'),
  },
]

useMotion(target, {
  initial: {
    opacity: 0,
    x: -100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 500,
      duration: 600,
    },
  },
})
</script>
