<template>
  <div class="bg-slider max-w-[1400px] mx-auto overflow-x-hidden">
    <div class="autoplay-slider h-15 text-white font-bold">
      <div v-for="{name, icon} in slides" :key="name" class="w-50 flex items-center justify-center">
        <span><fa-icon class="mr-2" :icon="['far', icon]" />{{ name }}</span>
      </div>
      <div v-for="{name, icon} in slides" :key="name" class="w-50 flex items-center justify-center">
        <span><fa-icon class="mr-2" :icon="['far', icon]" />{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const slides = [
  {
    name: t('slides.user-journey'),
    icon: 'cart-shopping',
  },
  {
    name: t('slides.on-page'),
    icon: 'user-magnifying-glass',
  },
  {
    name: t('slides.session-replay'),
    icon: 'clapperboard-play',
  },
  {
    name: t('slides.funnels'),
    icon: 'filter-circle-dollar',
  },
  {
    name: t('slides.dashboards'),
    icon: 'square-kanban',
  },
  {
    name: t('slides.auto-tracking'),
    icon: 'robot-astromech',
  },
]
</script>

<style scoped>
.bg-slider {
  background-image: linear-gradient(101.13deg, #FD7043 0%, #F04D66 19.06%, #E72192 50.04%, #C141AC 71.33%, #644AD5 99.11%, #2D92E9 100.63%);
}

.autoplay-slider{
  display: flex;
  min-width: 100%;
  width: min-content;
  animation: 20s linear infinite sliderAnimation;
}

@keyframes sliderAnimation {
  100% {
    transform: translateX(-50%);
  }
}
</style>
