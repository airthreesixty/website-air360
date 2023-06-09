<template>
  <div class="bg-slider overflow-hidden">
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
const slides = [
  {
    name: 'User Journey',
    icon: 'cart-shopping',
  },
  {
    name: 'On-Page Analysis',
    icon: 'user-magnifying-glass',
  },
  {
    name: 'Session Replay',
    icon: 'clapperboard-play',
  },
  {
    name: 'Funnels',
    icon: 'filter-circle-dollar',
  },
  {
    name: 'Dashboards',
    icon: 'cart-shopping',
  },
  {
    name: 'Auto-Tracking',
    icon: 'robot-astromech',
  },
]
</script>

<style scoped>
.bg-slider {
    background-image: linear-gradient(160.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
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
