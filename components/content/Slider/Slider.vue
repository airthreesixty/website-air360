<template>
  <div class="bg-slider max-w-[1400px] mx-auto overflow-x-hidden">
    <ul class="autoplay-slider h-15 text-white font-bold">
      <li v-for="{name, icon} in slides" :key="name" class="w-50 flex items-center justify-center">
        <span><fa-icon class="mr-2" :icon="['far', icon]" />{{ name }}</span>
      </li>
      <li v-for="{name, icon} in slides" :key="name" class="w-50 flex items-center justify-center">
        <span><fa-icon class="mr-2" :icon="['far', icon]" />{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  mobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mobile: false,
})

const { t } = useI18n()

const slides = computed(() => {
  if (props.mobile) {
    return [
      {
        name: t('slides.user-journey'),
        icon: 'cart-shopping',
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
      {
        name: t('slides.user-journey'),
        icon: 'cart-shopping',
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
  }

  return [
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
})

const slider = computed(() => {
  if (props.mobile) {
    return {
      time: '30s',
    }
  }
  return {
    time: '25s',
  }
})
</script>

<style scoped>
.bg-slider {
  background-image: linear-gradient(101.13deg, #FD7043 0%, #F04D66 19.06%, #E72192 50.04%, #C141AC 71.33%, #644AD5 99.11%, #2D92E9 100.63%);
}

@media screen and (min-width: 1400px) {
  .bg-slider {
      -webkit-mask-image: linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent);
      mask-image: linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent);
  }
}

.autoplay-slider{
  display: flex;
  min-width: 100%;
  width: min-content;
  animation: v-bind('slider.time') linear infinite sliderAnimation;
}

@keyframes sliderAnimation {
  100% {
    transform: translateX(-50%);
  }
}
</style>
