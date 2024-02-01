<template>
  <section class="bg-white">
    <div class="container pb-16 pt-10">
      <div class="overflow-hidden rounded-lg bg-primary-600 shadow-xl md:grid md:grid-cols-2 md:gap-4">
        <div class="px-6 pt-10 pb-12 md:px-12 md:py-12 lg:px-14 lg:py-16 md:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-2xl text-center font-bold tracking-tight text-white md:text-left md:text-3xl lg:text-4xl">
              {{ $t('get-started') }}
            </h2>
            <div>
              <p class="mt-4 text-md text-center leading-6 text-white md:text-left lg:text-xl">
                <span v-if="!$slots.description">{{ $t('cta-description') }}</span>
                <ContentSlot :use="$slots.description" unwrap="p" />
              </p>
            </div>
            <PopupTrigger id="AJVqkglY" class="flex justify-center mt-8 md:w-2/3">
              <ButtonPrimary slug="javascript:void(0)" theme="transparent">
                {{ $t('try-air360') }}
              </ButtonPrimary>
            </PopupTrigger>
          </div>
        </div>
        <div class="hidden aspect-w-5 aspect-h-3 -mt-6 z-0 md:block md:aspect-w-2 md:aspect-h-1">
          <nuxt-img format="webp" src="/dashboard.png" width="1320" class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top md:translate-x-16 md:translate-y-20" alt="App screenshot" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-gradient {
    background-image: linear-gradient(101.87deg, #2D92E9 4.15%, #644AD5 22.36%, #C141AC 41.56%, #E72192 61.75%, #F04D66 78.49%, #FD7043 98.68%);
}
</style>
