<template>
  <div class="container py-10">
    <div class="md:grid md:grid-cols-2 md:gap-3">
      <div><nuxt-img src="/en/product/hero.png" format="webp" loading="lazy" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" /></div>
      <div class="lg:self-center">
        <p class="title2 mb-5 lg:mb-8">
          Mobile insights that will help you make better decisions:
        </p>
        <ul class="text-gray-500 font-bold text-lg lg:text-xl">
          <li v-for="{description, icon}, index in items" :key="index" class="flex items-center mb-2">
            <span class="text-primary-600"><fa-icon class="text-xl lg:text-3xl mr-2" :icon="['far', icon]" /></span><ContentSlot :use="description" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots()

const items = [
  {
    description: slots.description1,
    icon: 'lightbulb-on',
  },
  {
    description: slots.description2,
    icon: 'trophy-star',
  },
  {
    description: slots.description3,
    icon: 'arrow-up-right-dots',
  },
]
</script>
