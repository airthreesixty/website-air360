<template>
  <section ref="target" class="">
    <WaveTop />
    <div class="bg-gray-50 pb-14">
      <div class="container text-center 2xl:(grid grid-cols-6 gap-5)">
        <div class="2xl:col-span-2">
          <h2 class="title3 text-black-600 font-bold text-center xl:text-left">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h2>
          <p class="textp max-w-[700px] mx-auto xl:(mr-auto ml-0) xl:text-left my-4 md:mb-8">
            <ContentSlot :use="$slots.description" unwrap="p" />
          </p>
          <p class="text-black-600 font-bold lg:text-lg xl:text-left my-4 md:mb-8">
            <ContentSlot :use="$slots.description2" unwrap="p" />
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 2xl:col-span-4 gap-8">
          <div v-for="{icon, title, desc}, index in cards" :key="index" class="relative shadow-primary p-5 pb-14 lg:pb-17 2xl:pb-20 rounded-lg">
            <div class="flex items-center justify-center mb-2">
              <h3 class="text-black-600 font-bold text-lg">
                {{ title }}
              </h3>
            </div>
            <p class="text-gray-500 text-center">
              {{ desc }}
            </p>
            <fa-icon class="absolute bottom-2 right-[50%] transform translate-x-[50%] text-4xl lg:text-5xl 2xl:text-6xl text-primary-600" :icon="['far', icon]" />
          </div>
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
    icon: 'handshake-simple',
    title: t('why-cro.card1.title'),
    desc: t('why-cro.card1.desc'),
  },
  {
    icon: 'award',
    title: t('why-cro.card2.title'),
    desc: t('why-cro.card2.desc'),
  },
  {
    icon: 'chart-mixed',
    title: t('why-cro.card3.title'),
    desc: t('why-cro.card3.desc'),
  },
  {
    icon: 'chart-network',
    title: t('why-cro.card4.title'),
    desc: t('why-cro.card4.desc'),
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
