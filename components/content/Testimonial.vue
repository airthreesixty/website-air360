<template>
  <section
    class="overflow-hidden bg-cover md:bg-[rgba(255,255,255,0.59)] bg-blend-lighten md:justify-center md:flex"
    style="
      background-image: url('https://www.air360.io/wp-content/uploads/2022/08/testimonials-bg-1.svg');
    "
  >
    <div class="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
      <div class="lg:flex lg:items-center">
        <div class="hidden lg:block lg:flex-shrink-0">
          <img
            class="h-64 w-64 rounded-full xl:h-80 xl:w-80"
            src="https://www.air360.io/wp-content/uploads/2022/08/nelson.webp"
            alt=""
          />
        </div>

        <div class="lg:ml-10">
          <blockquote class="">
            <div
              class="text-2xl font-medium leading-9 text-gray-600 md:text-[27px]"
            >
              <p>
                <ContentSlot :use="$slots.title" />
              </p>
            </div>
            <footer class="mt-8">
              <div class="flex md:justify-center lg:justify-start">
                <div class="flex-shrink-0 lg:hidden">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://www.air360.io/wp-content/uploads/2022/08/nelson.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div class="ml-4 lg:ml-0">
                  <div class="text-base font-medium text-gray-900">
                    Nelson Fernandes
                  </div>
                  <div class="text-base font-medium text-indigo-600">
                    CEO, Club Med
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
