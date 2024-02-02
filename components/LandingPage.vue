<template>
  <div
    class="landing-page container grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-10 pt-4 lg:pt-6 pb-12"
  >
    <div>
      <NuxtLink :to="localePath('/')">
        <span class="sr-only">Air360</span>
        <Logo
          class="h-6 lg:h-8 mb-16 h-7 filter hover:drop-shadow-white"
        />
      </NuxtLink>

      <div
        class="prose"
      >
        <slot name="content" />
      </div>
    </div>

    <div
      class="lg:mt-20"
    >
      <slot name="form" />
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="postcss">
.landing-page {
  &:before {
    @apply absolute left-0 top-10 sm:top-8 md:top-5 lg:top-3 xl:top-0 h-38 w-full -z-1;

    content: '';
    background: linear-gradient(101.87deg, #2D92E9 0%, #644AD5 14.36%, #C141AC 27.56%, #E72192 43.75%, #F04D66 57.49%, #FD7043 69.68%);
    transform: skewY(-6deg) translateY(-130px);
  }
}
</style>
