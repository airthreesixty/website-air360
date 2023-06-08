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
              <!-- <svg
                aria-hidden="true"
                class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg> -->
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
