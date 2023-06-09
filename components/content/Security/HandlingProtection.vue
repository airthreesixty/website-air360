<template>
  <div id="handling-protection" class="container py-10 lg:py-15">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="self-center">
        <h2 class="title2 mb-5 mt-2 md:text-left">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <span class="font-bold text-primary-600">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </span>
        <p class="text-gray-500 lg:text-lg">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="max-w-[250px] mx-auto lg:max-w-[350px]">
        <nuxt-img src="/database.jpeg" format="webp" alt="database" />
      </div>
    </div>
  </div>
</template>
