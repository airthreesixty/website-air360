<template>
  <div class="relative integration-slider w-full h-30 md:h-40 overflow-x-hidden">
    <ul class="autoplay-slider h-full text-white font-bold flex">
      <li v-for="{component, left}, index in slides" :key="index" class="w-30 flex items-center justify-center">
        <div class="relative shadow-test bg-white h-25 w-25 rounded-full flex justify-center items-center">
          <component :is="component" class="w-20 h-20 object-contain absolute" :style="`left: ${left}`" />
        </div>
      </li>
      <li v-for="{component, left}, index in slides" :key="index" class="w-30 flex items-center justify-center">
        <div class="relative shadow-test bg-white h-25 w-25 rounded-full flex justify-center items-center">
          <component :is="component" class="w-20 h-20 object-contain absolute" :style="`left: ${left}`" />
        </div>
      </li>
    </ul>
    <div class="absolute h-30 md:(h-40 -skew-x-35 transform origin-bottom-left rounded-l-2xl) bg-blue-200 w-full top-0 -z-1 overflow-x-hidden" />
  </div>
</template>

<script setup lang="ts">
const LogoBrandSalesforce = resolveComponent('LogoBrandSalesforce')
const LogoBrandAbtasty = resolveComponent('LogoBrandAbtasty')
const LogoBrandCoveo = resolveComponent('LogoBrandCoveo')
const LogoBrandShopify = resolveComponent('LogoBrandShopify')
const LogoBrandMailchimp = resolveComponent('LogoBrandMailchimp')
const LogoBrandLooker = resolveComponent('LogoBrandLooker')
const LogoBrandKlaviyo = resolveComponent('LogoBrandKlaviyo')
const LogoBrandPowerBi = resolveComponent('LogoBrandPowerBi')
const LogoBrandTwillioSegment = resolveComponent('LogoBrandTwillioSegment')
const LogoBrandGoogle = resolveComponent('LogoBrandGoogle')
const LogoBrandSftp = resolveComponent('LogoBrandSftp')
const LogoBrandGetFeedback = resolveComponent('LogoBrandGetFeedback')

const slides = [
  {
    component: LogoBrandSalesforce,
    left: '16px',
  },
  {
    component: LogoBrandAbtasty,
    left: '7px',
  },
  {
    component: LogoBrandCoveo,
    left: '5px',
  },
  {
    component: LogoBrandShopify,
    left: '7px',
  },
  {
    component: LogoBrandMailchimp,
    left: '10px',
  },
  {
    component: LogoBrandLooker,
    left: '7px',
  },
  {
    component: LogoBrandKlaviyo,
    left: '10px',
  },
  {
    component: LogoBrandPowerBi,
    left: '8px',
  },
  {
    component: LogoBrandTwillioSegment,
    left: '5px',
  },
  {
    component: LogoBrandGoogle,
    left: '26px',
  },
  {
    component: LogoBrandSftp,
    left: '16px',
  },
  {
    component: LogoBrandGetFeedback,
    left: '3px',
  },
]
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .integration-slider {
    clip-path: polygon(111px 0,100% 0,100% 100%,1px 100%);
  }
}

@media screen and (min-width: 1400px) {
  .integration-slider {
      -webkit-mask-image: linear-gradient(90deg,transparent,#000 0.1%,#000 97%,transparent);
      mask-image: linear-gradient(90deg,transparent,#000 0.1%,#000 970%,transparent);
  }
}

.autoplay-slider{
  display: flex;
  min-width: 100%;
  width: min-content;
  animation: 30s linear infinite sliderAnimation;
}

@keyframes sliderAnimation {
  100% {
    transform: translateX(-50%);
  }
}

.shadow-test {
  box-shadow: 3.5px 0 0 #9ca3af;
}
</style>
