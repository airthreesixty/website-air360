<template>
  <div class="bg-slider max-w-[1400px] mx-auto overflow-hidden">
    <ul class="autoplay-slider h-15 text-white font-bold">
      <li v-for="(logo, index) in logos" :key="index" :class="`w-${logo.width}`" class="flex items-center justify-center slider-company-logos-list">
        <component :is="logo.component" class="h-7.5 object-contain w-full lg:h-9.5" :style="`transform: scale(${logo.scale})`" />
      </li>
      <li v-for="(logo, index) in logos" :key="index" :class="`w-${logo.width}`" class="flex items-center justify-center slider-company-logos-list">
        <component :is="logo.component" class="h-7.5 object-contain w-full lg:h-9.5" :style="`transform: scale(${logo.scale})`" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const LogoBrandClubMed = resolveComponent('LogoBrandClubMed')
const LogoBrandVerychic = resolveComponent('LogoBrandVerychic')
const LogoBrandOlympiqueLyonnais = resolveComponent('LogoBrandOlympiqueLyonnais')
const LogoBrandMaVilleMonShopping = resolveComponent('LogoBrandMaVilleMonShopping')
const LogoBrandAirCaraibes = resolveComponent('LogoBrandAirCaraibes')
const LogoBrandDubreuil = resolveComponent('LogoBrandDubreuil')
const LogoBrandPsaBank = resolveComponent('LogoBrandPsaBank')
const LogoBrandProduct = resolveComponent('LogoBrandProduct')

const logos = [{
  component: LogoBrandClubMed,
  scale: 0.8,
  width: 50,
},
{
  component: LogoBrandVerychic,
  scale: 0.85,
  width: 50,
},
{
  component: LogoBrandOlympiqueLyonnais,
  scale: 1,
  width: 25,
},
{
  component: LogoBrandMaVilleMonShopping,
  scale: 1,
  width: 50,
},
{
  component: LogoBrandAirCaraibes,
  scale: 0.75,
  width: 50,
},
{
  component: LogoBrandDubreuil,
  scale: 1,
  width: 25,
},
{
  component: LogoBrandPsaBank,
  scale: 2.7,
  width: 25,
},
{
  component: LogoBrandProduct,
  scale: 0.75,
  width: 40,
},
]

const slider = computed(() => {
  return {
    time: '30s',
  }
})
</script>

<style lang="postcss">
.bg-slider {
  background-image: linear-gradient(101.13deg, #FD7043 0%, #F04D66 19.06%, #E72192 50.04%, #C141AC 71.33%, #644AD5 99.11%, #2D92E9 100.63%);
  mask-image: linear-gradient(90deg,transparent,#fff 8%,#fff 92%,transparent);
  -webkit-mask-image: linear-gradient(90deg,transparent,#fff 8%,#fff 92%,transparent);
}

.slider-company-logos-list {
  path {
    @apply !fill-white;
  }

  g {
    @apply !fill-white;
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
