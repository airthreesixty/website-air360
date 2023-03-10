<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="gap-8 items-center py-10 px-4 mx-auto max-w-screen-[1400px] xl:gap-16 md:grid md:grid-cols-2 md:py-16 lg:px-8 lg:pt-6 lg:pb-14"
    >
      <nuxt-img loading="lazy" format="webp" class="w-full h-auto shadow-lg rounded-lg md:hidden dark:hidden" src="/clubmedResort.jpg" :alt="$t('clubmed-pic')" />
      <div class="mt-4 md:mt-0">
        <h2
          class="mb-4 text-2xl font-semibold text-black-600 text-left md:text-3xl lg:text-4xl dark:text-white"
        >
          <ContentSlot :use="$slots.title" />
        </h2>
        <p
          class="mb-6 font-light text-gray-500 md:text-base lg:text-xl xl:leading-8 dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" />
        </p>
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
        >
          <dl
            class="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-2 dark:text-white"
          >
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                +100%
              </dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.achievement1" />
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">
                +50%
              </dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">
                <ContentSlot :use="$slots.achievement2" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <nuxt-img loading="lazy" format="webp" class="hidden shadow-lg w-full h-auto rounded-lg md:block dark:hidden" src="/clubmedResort.jpg" :alt="$t('clubmed-pic')" />
    </div>
  </section>
</template>
