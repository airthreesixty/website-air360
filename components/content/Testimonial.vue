<template>
  <section
    class="overflow-hidden bg-cover md:bg-[rgba(255,255,255,0.59)] bg-blend-lighten md:justify-center md:flex"
    style="
      background-image: url('https://www.air360.io/wp-content/uploads/2022/08/testimonials-bg-1.svg');
    "
  >
    <div class="mx-auto max-w-screen-[1400px] px-4 py-16 lg:px-8 lg:pb-20">
      <div class="lg:flex lg:items-center">
        <div class="hidden lg:block lg:flex-shrink-0">
          <nuxt-img loading="lazy" format="webp" class="h-64 w-64 shadow-lg rounded-full xl:h-80 xl:w-80" src="https://www.air360.io/wp-content/uploads/2022/08/nelson.webp" :alt="$t('clubmed-manager')" />
        </div>

        <div class="lg:ml-10">
          <blockquote class="">
            <div
              class="text-2xl font-medium leading-9 text-black-600 lg:text-3xl"
            >
              <p>
                <ContentSlot :use="$slots.title" unwrap="p" />
              </p>
            </div>
            <footer class="mt-8">
              <div class="flex md:justify-center lg:justify-start">
                <div class="flex-shrink-0 lg:hidden">
                  <nuxt-img loading="lazy" format="webp" class="h-12 w-12 shadow-lg rounded-full" src="https://www.air360.io/wp-content/uploads/2022/08/nelson.webp" :alt="$t('clubmed-manager')" />
                </div>
                <div class="ml-4 lg:ml-0">
                  <div class="text-lg font-semibold text-black-600">
                    Nelson Fernandes
                  </div>
                  <div class="text-base font-medium text-gray-500">
                    Digital Analytics Manager, Club Med
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
