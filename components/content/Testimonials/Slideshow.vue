<template>
  <section class="bg-white lg:hidden">
    <div class="container">
      <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
        <Slide v-for="{quote, name, company, src, width}, index in slides" :key="index">
          <div class="carousel__item">
            <TestimonialBlock :quote="quote" :name="name" :company="company" :src="src" :width="width" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const slides = [
  { quote: t('slideshow.quote.clubmed'), name: 'Nelson Fernandes', company: 'Digital Analytics Manager, Club Med', src: '/headShotClubMed.webp', width: 'w-12' },
  { quote: t('slideshow.quote.psabank'), company: 'PSA Bank', src: '/psabank.svg', width: 'w-20' },
  { quote: t('slideshow.quote.air-caraibes'), company: 'Air Caraïbes', src: '/airCaraibes.svg', width: 'w-35' },
  { quote: t('slideshow.quote.journey-further'), name: 'Jonny Longden', company: 'CRO Expert and Influencer, Journey Further', src: '/ceo-journey-further.webp', width: 'w-12' },
]
</script>
