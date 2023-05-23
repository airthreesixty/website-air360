<template>
  <section>
    <div class="mx-auto px-6 lg:px-8 lg:mb-15">
      <p class="text-center text-sm font-bold font-sans2 text-black-600 mb-10 tracking-widest">
        {{ $t('trusted-by') }}
      </p>
      <div
        class="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-3"
      >
        <div v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center company-logos-list">
          <component :is="logo.component" class="h-7.5 object-contain w-full lg:h-9.5" :style="`transform: scale(${logo.scale})`" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const LogoBrandOlympiqueLyonnais = resolveComponent('LogoBrandOlympiqueLyonnais')
const LogoBrandClubMed = resolveComponent('LogoBrandClubMed')
const LogoBrandDubreuil = resolveComponent('LogoBrandDubreuil')
const LogoBrandVerychic = resolveComponent('LogoBrandVerychic')
const LogoBrandAirCaraibes = resolveComponent('LogoBrandAirCaraibes')
const LogoBrandSuarez = resolveComponent('LogoBrandSuarez')

const logos = [{
  component: LogoBrandOlympiqueLyonnais,
  scale: 1,
},
{
  component: LogoBrandClubMed,
  scale: 1,
},
{
  component: LogoBrandDubreuil,
  scale: 1,
},
{
  component: LogoBrandVerychic,
  scale: 0.9,
},
{
  component: LogoBrandAirCaraibes,
  scale: 1,
},
{
  component: LogoBrandSuarez,
  scale: 0.85,
},
]
</script>

<style lang="postcss">
.company-logos-list {
  path {
    @apply !fill-gray-500;
  }
}
</style>
