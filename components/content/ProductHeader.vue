<template>
  <div class="bg-white">
    <div class="mx-auto max-w-screen-[1400px] py-16 px-6 md:py-24 lg:py-15 lg:px-8 xl:py-22">
      <div class="text-center">
        <p class="text-lg font-semibold text-primary-600 lg:text-xl">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </p>
        <h1
          class="mt-1 text-2xl font-semibold text-black-600 tracking-tight md:text-3xl lg:text-4xl"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="mx-auto mt-5 max-w-xl text-gray-500 md:text-base lg:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
    </div>
  </div>
</template>
