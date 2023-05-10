<template>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-[500px] md:max-w-screen-[560px] lg:max-w-screen-[800px] px-6 lg:px-8">
      <p class="text-center text-sm font-bold font-sans2 text-black-600 mb-8 tracking-widest">
        TRUSTED BY
      </p>
      <div
        class="grid grid-cols-2 gap-y-14 gap-x-6 md:grid-cols-3"
      >
        <div v-for="logo in logos" :key="logo.id" class="flex justify-center items-center">
          <img
            class="h-6.5 object-contain w-full lg:h-7.5"
            :src="logo.src"
            :alt="logo.alt"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  {
    id: 1,
    src: '/logos/ClubMed.svg',
    alt: 'Company Logo',
  },
  {
    id: 2,
    src: '/logos/aristocrazy.svg',
    alt: 'Company Logo',
  },
  {
    id: 3,
    src: '/logos/OlympiqueLyonnais.svg',
    alt: 'Company Logo',
  },
  {
    id: 4,
    src: '/logos/MaisonMargiela.svg',
    alt: 'Company Logo',
  },
  {
    id: 5,
    src: '/logos/Qoqa.svg',
    alt: 'Company Logo',
  },
  {
    id: 6,
    src: '/suarezLogo.png',
    alt: 'Company Logo',
  },
]
</script>
