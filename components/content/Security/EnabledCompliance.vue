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
            <fa-icon class="fa-2x mr-4 text-primary-600" :icon="['far', 'scale-balanced']" />
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
            <fa-icon class="fa-2x mr-4 text-primary-600" :icon="['far', 'building-shield']" />
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
      <nuxt-img class="mb-4 w-full md:w-3/4 lg:w-full lg:mb-0" src="/gdpr.jpeg" format="webp" alt="GDPR" loading="lazy" />
    </div>
  </section>
</template>
