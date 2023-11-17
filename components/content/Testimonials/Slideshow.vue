<template>
  <section class="bg-white">
    <div class="container">
      <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="{quote, name, company, src}, index in slides" :key="index">
          <div class="carousel__item">
            <TestimonialBlock :quote="quote" :name="name" :company="company" :src="src" />
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
const slides = [
  { quote: 'With Air360 we can get more people involved in making data-driven decisions on a global scale.', name: 'Nelson Fernandes', company: 'Digital Analytics Manager, Club Med', src: '/headShotClubMed.webp' },
  { quote: 'Tracking which would have taken days to implement via GA4 takes only minutes using Air360 to access the data.', name: 'Vue 3 Components', company: 'Know the components', src: '/headShotClubMed.webp' },
  { quote: '3', name: 'Vue 3 Conditional', company: 'Rendering Conditionally', src: '/headShotClubMed.webp' },
  { quote: '4', name: 'Vue 3 Reactivity', company: 'VueJS is Reactive', src: '/headShotClubMed.webp' },
]
</script>
