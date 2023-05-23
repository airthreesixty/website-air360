<template>
  <div class="page-thank-you container mx-auto pb-12">
    <div class="pt-6 md:pt-12">
      <slot />
    </div>
    <div class="mt-35">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 text-center">
        Warning - Only for Conversion Rate Heroes
      </h2>
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="article in articles" :key="article._path" :data="article" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const { data: articles } = await useAsyncData(`articles-${route.params.slug}`, async () => {
  return await queryContent(locale.value, '/blog')
    .sort({ published: -1 })
    .limit(3)
    .find()
})
</script>

<style lang="postcss">
.page-thank-you {
  &__title {
    @apply font-title font-extrabold text-4xl md:text-5xl leading-[1.31] md:leading-snug;

    background-color: #E72192;
    background-image: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);;
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  &__description {
    @apply text-xl font-semibold;
  }

  &__button {
    @apply relative block bg-primary-600 px-6 py-3 font-bold transition-all mt-4 text-white shadow z-1 text-lg hover:text-shadow-white;

    background-image: linear-gradient(90deg, #C141AC 0%, #E72192 100%);

    &::after,
    &::before,
    & {
      @apply rounded-lg;
    }

    &::after,
    &::before {
      content: '';
      @apply absolute left-0 top-0 w-full h-full -z-1;
    }

    &:before {
      background-image: linear-gradient(90deg, #2D92E9 -2.62%, #644AD5 100%);
      animation: thank-you-button-before 8s infinite;
    }

    &:after {
      background-image: linear-gradient(90deg, #F04D66 0%, #FD7043 100%);
      animation: thank-you-button-after 8s infinite;
    }
  }
}

@keyframes thank-you-button-before {
    0%,to {
        opacity: 0
    }

    33.333%,50% {
        opacity: 1
    }

    16.667%,66.667% {
        opacity: 0
    }
}

@keyframes thank-you-button-after {
    0%,50%,to {
        opacity: 0
    }

    66.667%,83.333% {
        opacity: 1
    }
}
</style>
