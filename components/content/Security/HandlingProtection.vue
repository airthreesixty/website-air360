<template>
  <div id="handling-protection" class="container py-10 lg:py-15">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="self-center">
        <span class="font-bold text-primary-600">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </span>
        <h2 class="title2 mb-5 mt-2 md:text-left">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="text-gray-600">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="max-w-[250px] mx-auto lg:max-w-[350px]">
        <nuxt-img src="/database.png" format="webp" />
      </div>
    </div>
  </div>
</template>
