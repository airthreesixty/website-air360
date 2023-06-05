<template>
  <div class="container py-10">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="title2 mb-5">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <h3 class="font-bold text-lg text-black-600 mb-3">
          <ContentSlot :use="$slots.subtitle1" unwrap="p" />
        </h3>
        <p class="text-black-600 mb-3 text-gray-600">
          <ContentSlot :use="$slots.description1" unwrap="p" />
        </p>
        <h3 class="font-bold text-lg text-black-600 mb-3">
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
  </div>
</template>
