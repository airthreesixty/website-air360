<template>
  <!-- <div id="enabled-compliance" class="container py-10 lg:py-15">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="title2 mb-5 lg:mb-8">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <h3 class="font-bold text-lg lg:text-xl text-black-600 mb-3">
          <ContentSlot :use="$slots.subtitle1" unwrap="p" />
        </h3>
        <p class="text-black-600 mb-5 text-gray-600">
          <ContentSlot :use="$slots.description1" unwrap="p" />
        </p>
        <h3 class="font-bold text-lg lg:text-xl text-black-600 mb-3">
          <ContentSlot :use="$slots.subtitle2" unwrap="p" />
        </h3>
        <p class="text-black-600 mb-3 text-gray-600">
          <ContentSlot :use="$slots.description2" unwrap="p" />
        </p>
      </div>
      <div class="self-center">
        <nuxt-img src="/boostConversion.png" />
      </div>
    </div>
  </div> -->
  <section id="enabled-compliance" class="bg-white">
    <div class="gap-8 items-center py-8 container py-8 lg:py-15 lg:grid lg:grid-cols-2 xl:gap-16">
      <div class="text-gray-500 sm:text-lg">
        <h2 class="title2 mb-5 lg:mb-8">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <div class="py-8 mb-6">
          <div class="flex">
            <div class="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
              <svg class="w-5 h-5 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /></svg>
            </div>
            <div>
              <h3 class="mb-2 text-xl font-bold text-black-600 dark:text-white">
                <ContentSlot :use="$slots.subtitle1" unwrap="p" />
              </h3>
              <p class="mb-2 text-gray-500">
                <ContentSlot :use="$slots.description1" unwrap="p" />
              </p>
            </div>
          </div>
          <div class="flex pt-8">
            <div class="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full dark:bg-purple-900 shrink-0">
              <svg class="w-5 h-5 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            </div>
            <div>
              <h3 class="mb-2 text-xl font-bold text-black-600">
                <ContentSlot :use="$slots.subtitle2" unwrap="p" />
              </h3>
              <p class="mb-2 text-gray-500">
                <ContentSlot :use="$slots.description2" unwrap="p" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <nuxt-img class="mb-4 w-full lg:mb-0 rounded-lg" src="/boostConversion.png" alt="" />
    </div>
  </section>
</template>
