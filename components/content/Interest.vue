<template>
  <div class="bg-white pb-5">
    <div class="px-4 md:flex md:items-center">
      <div class="md:flex md:flex-row md:items-center">
        <div class="flex-1">
          <img src="/depressedMan.jpg" alt="" loading="lazy">
        </div>
        <div class="flex-1">
          <h2 class="mb-4 text-xl tracking-tight font-semibold text-black-600 lg:text-2xl dark:text-white">
            <ContentSlot :use="$slots.title" />
          </h2>
          <p class="font-light text-gray-500 text-base text-left lg:text-lg xl:text-xl dark:text-gray-400"><ContentSlot :use="$slots.description" /></p>
        </div>
      </div>
    </div>
  </div>
</template>
