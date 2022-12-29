<template>
  <section class="bg-white pb-5 dark:bg-gray-900">
    <div class="px-4 md:flex md:items-center">
      <div class="md:hidden">
        <img src="/boostConversion.png" alt="" loading="lazy">
      </div>
      <div class="mx-auto max-w-screen-md text-center mb-8 mt-4 flex-1 md:mb-0">
        <h2 class="mb-4 text-xl tracking-tight font-semibold text-black-600 lg:text-2xl dark:text-white"><ContentSlot :use="$slots.title" /></h2>
        <p class="font-light text-gray-500 text-base text-left lg:text-lg xl:text-xl dark:text-gray-400"><ContentSlot :use="$slots.description" /></p>
      </div>
      <div class="flex-1 hidden md:block">
        <img src="/boostConversion.png" alt="" loading="lazy">
      </div>
    </div>
</section>
</template>
