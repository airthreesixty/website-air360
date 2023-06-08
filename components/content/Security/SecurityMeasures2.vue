<template>
  <section class="bg-white antialiased">
    <div class="container py-10 md:py-15">
      <div class="text-center">
        <h2 class="title2 text-center mb-5 md:mb-10">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
      </div>
      <div class="p-4 mt-8 rounded-lg sm:p-12 lg:mt-16 bg-gray-50 dark:bg-gray-800">
        <div class="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          <div v-for="{title, description, iconName} in cards" :key="title" class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
            <div class="bg-gray-100 p-4 lg:p-6 rounded-full">
              <fa-icon class="fa-2x text-primary-600" :icon="['far', iconName]" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                {{ title }}
              </h3>
              <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
// faMonitorWaveform, faBinaryLock, faLaptopMobile, faServer, faCheckToSlot, faCameraCctv
const cards = [
  {
    title: t('security-measures.card1.title'),
    description: t('security-measures.card1.desc'),
    iconName: 'monitor-waveform',
  },
  {
    title: t('security-measures.card2.title'),
    description: t('security-measures.card2.desc'),
    iconName: 'binary-lock',
  },
  {
    title: t('security-measures.card3.title'),
    description: t('security-measures.card3.desc'),
    iconName: 'laptop-mobile',
  },
  {
    title: t('security-measures.card4.title'),
    description: t('security-measures.card4.desc'),
    iconName: 'camera-cctv',
  },
  {
    title: t('security-measures.card5.title'),
    description: t('security-measures.card5.desc'),
    iconName: 'check-to-slot',
  },
  {
    title: t('security-measures.card6.title'),
    description: t('security-measures.card6.desc'),
    iconName: 'server',
  },
]
</script>
