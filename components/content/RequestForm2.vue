<template>
  <section class="bg-white container py-8 xl:(-mt-10 pb-0)">
    <div class="lg:(flex items-center)">
      <div class="lg:(flex-1)">
        <div class="mb-8 lg:(text-left mb-16)">
          <h1 class="title2 text-gradient mb-3 text-center lg:text-left">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
          <p class="textp mb-5 max-w-[550px] mx-auto text-center lg:text-left lg:(ml-0 mr-auto)">
            <ContentSlot :use="$slots.description" unwrap="p" />
          </p>
          <ul class="text-black-600 font-bold text-lg max-w-[380px] mx-auto lg:(ml-0 mr-auto max-w-lg) lg:text-xl">
            <li v-for="{description, icon}, index in items" :key="index" class="flex items-center mb-3">
              <span class="text-primary-600"><fa-icon class="text-xl w-9 lg:text-3xl mr-2" :icon="['far', icon]" /></span><ContentSlot :use="description" />
            </li>
          </ul>
        </div>
        <nuxt-img src="/product-image.png" alt="product-image" class="w-100 h-auto mx-auto lg:hidden" />
        <div class="text-center flex flex-col items-center mt-5 lg:(text-left items-start)">
          <h2 class="title2 font-bold text-black-600 mb-3">
            <ContentSlot :use="$slots.ctaTitle" unwrap="p" />
          </h2>
          <p class="textp mb-5 max-w-[550px] mx-auto lg:(ml-0 mr-auto)">
            <ContentSlot :use="$slots.ctaDescription" unwrap="p" />
          </p>
          <div class="mb-3">
            <PopupTrigger :id="id">
              <ButtonPrimary slug="javascript:void(0)" theme="primary">
                <ContentSlot :use="$slots.cta" unwrap="p" />
              </ButtonPrimary>
            </PopupTrigger>
          </div>
        </div>
        <!-- <div class="hidden w-110 h-30 lg:(block mt-10 mb-10)">
          <CompanyLogos />
        </div> -->
      </div>
      <nuxt-img src="/product-image.png" alt="product-image" class="flex-1 hidden max-w-[580px] lg:block xl:max-w-[700px]" />
    </div>
  </section>
</template>

<script setup lang="ts">
const slots = useSlots()

interface Props {
  id: string
}

defineProps<Props>()

const items = [
  {
    description: slots.description1,
    icon: 'circle-check',
  },
  {
    description: slots.description2,
    icon: 'circle-check',
  },
  {
    description: slots.description3,
    icon: 'circle-check',
  },
]
</script>
