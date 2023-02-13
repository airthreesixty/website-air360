<template>
  <section class="bg-white dark:bg-gray-900">
    <div :class="`pb-16 lg:${paddingBottom} mx-auto max-w-screen-[1400px] px-4 lg:px-8`">
      <h2
        class="mb-10 text-black-600 lg:mb-16 lg:text-2xl text-xl font-bold tracking-tight leading-tight text-center dark:text-white md:text-2xl"
      >
        <ContentSlot :use="$slots.title" />
      </h2>
      <div
        :class="`grid ${gridColsSm} gap-18 gap-x-12 text-gray-500 md:${gridColsMd} lg:${gridColsLg} dark:text-gray-400`"
      >
        <div v-for="logo in logos" :key="logo.id" class="flex justify-center items-center">
          <nuxt-img
            format="webp"
            class="h-6 object-contain lg:h-7 xl:h-8 dark:hover:text-white"
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
    src: 'https://www.air360.io/wp-content/uploads/2022/05/Club_Med_Logo_Black-1.png',
    alt: 'Company Logo',
  },
  {
    id: 2,
    src: 'https://www.air360.io/wp-content/uploads/2022/05/Copy-of-logo_aristocrazy-1.png',
    alt: 'Company Logo',
  },
  {
    id: 3,
    src: 'https://www.air360.io/wp-content/uploads/2022/05/olympique-1.png',
    alt: 'Company Logo',
  },
  {
    id: 4,
    src: 'https://www.air360.io/wp-content/uploads/2022/05/Copy-of-MaisonM.png',
    alt: 'Company Logo',
  },
  {
    id: 5,
    src: 'https://www.air360.io/wp-content/uploads/2022/05/logo_qoqa-black-1.png',
    alt: 'Company Logo',
  },
  {
    id: 6,
    src: 'https://www.air360.io/wp-content/uploads/2022/05/suarez_relojeria-1-1.png',
    alt: 'Company Logo',
  },
]

defineProps({
  gridColsSm: {
    type: String,
    required: true,
  },
  gridColsMd: {
    type: String,
    required: true,
  },
  gridColsLg: {
    type: String,
    required: true,
  },
  paddingBottom: {
    type: String,
    required: true,
  },
})
</script>
