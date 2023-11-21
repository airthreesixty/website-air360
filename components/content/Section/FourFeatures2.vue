<template>
  <section class="bg-gray-50">
    <div class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24 sm:py-16 lg:px-6">
      <div class="mb-8 lg:mb-0">
        <h2 class="title2 mb-4">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="text-black-600 font-bold text-lg mb-2">
          <ContentSlot :use="$slots.desc1" unwrap="p" />
        </p>
        <p class="text-black-600">
          <ContentSlot :use="$slots.desc2" unwrap="p" />
        </p>
      </div>
      <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <slot name="block" />
      </div>
    </div>
  </section>
</template>
