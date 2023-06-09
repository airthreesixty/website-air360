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
