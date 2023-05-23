<template>
  <section>
    <div class="mx-auto max-w-screen-[500px] md:max-w-screen-[560px] lg:max-w-screen-[800px] px-6 lg:px-8">
      <h3 class="text-center text-sm font-bold font-sans2 text-black-600 mb-8 tracking-widest">
        TRUSTED BY
      </h3>
      <ul
        class="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-3"
      >
        <li v-for="(logo, index) in logos" :key="index" class="flex justify-center items-center company-logos-list">
          <component :is="logo.component" class="h-7.5 object-contain w-full lg:h-9.5" :style="`transform: scale(${logo.scale})`" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const LogoBrandClubMed = resolveComponent('LogoBrandClubMed')
const LogoBrandAristocrazy = resolveComponent('LogoBrandAristocrazy')
const LogoBrandOlympiqueLyonnais = resolveComponent('LogoBrandOlympiqueLyonnais')
const LogoBrandMaisonMargiela = resolveComponent('LogoBrandMaisonMargiela')
const LogoBrandQoqa = resolveComponent('LogoBrandQoqa')
const LogoBrandSuarez = resolveComponent('LogoBrandSuarez')

const logos = [{
  component: LogoBrandClubMed,
  scale: 0.8,
},
{
  component: LogoBrandAristocrazy,
  scale: 0.85,
},
{
  component: LogoBrandOlympiqueLyonnais,
  scale: 1,
},
{
  component: LogoBrandMaisonMargiela,
  scale: 1,
},
{
  component: LogoBrandQoqa,
  scale: 0.75,
},
{
  component: LogoBrandSuarez,
  scale: 0.7,
}]
</script>

<style lang="postcss">
.company-logos-list {
  path {
    @apply !fill-gray-500;
  }
}
</style>
