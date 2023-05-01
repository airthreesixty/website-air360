<template>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-[1400px] px-6 lg:px-8">
      <div
        class="grid grid-cols-2 gap-14 gap-x-12 md:grid-cols-3"
      >
        <div v-for="logo in logos" :key="logo.id" class="flex justify-center items-center">
          <nuxt-img
            format="webp"
            class="h-6 object-contain w-full lg:h-7"
            :src="logo.src"
            :alt="logo.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  {
    id: 1,
    src: '/clubMedLogo.png',
    alt: 'Company Logo',
  },
  {
    id: 2,
    src: '/aristocrazyLogo.png',
    alt: 'Company Logo',
  },
  {
    id: 3,
    src: '/olympiqueLogo.png',
    alt: 'Company Logo',
  },
  {
    id: 4,
    src: '/maisonMargielaLogo.png',
    alt: 'Company Logo',
  },
  {
    id: 5,
    src: '/qoqaLogo.png',
    alt: 'Company Logo',
  },
  {
    id: 6,
    src: '/suarezLogo.png',
    alt: 'Company Logo',
  },
]
</script>
