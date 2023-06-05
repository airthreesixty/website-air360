<template>
  <div id="handling-protection" class="container py-10 lg:py-15">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="self-center">
        <h2 class="title2 text-center mb-5 md:text-left">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <h3 class="font-bold mb-3 text-lg text-black-600">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </h3>
        <p class="text-gray-600">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <nuxt-img src="/boostConversion.png" />
    </div>
  </div>
</template>
