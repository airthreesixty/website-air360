<template>
  <section
    class="landing-page container mx-auto grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-10 pt-6 pb-12"
  >
    <div class="">
      <Logo
        class="h-8 mb-16 h-7"
      />

      <div
        class="prose"
      >
        <slot name="content" />
      </div>
    </div>

    <div
      class="items-center flex flex-col mb-6 text-2xl font-semibold text-black-600 lg:mb-10 dark:text-white"
    >
      <div class="flex justify-center hidden mb-3 lg:block lg:flex" />
      <div
        class="w-full mx-auto bg-white"
      >
        <slot name="form" />
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.landing-page {
  &:before {
    @apply absolute left-0 top-0 h-38 w-full -z-1;

    content: '';
    background: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
    transform: skewY(-8deg) translateY(-150px);
  }
}
</style>
