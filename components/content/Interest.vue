<template>
  <div class="bg-white pb-5">
    <div class="px-4 md:flex md:items-center">
      <div class="md:flex md:flex-row md:items-center">
        <div class="flex-1">
          <img src="/depressedMan.jpg" alt="" loading="lazy">
        </div>
        <div class="flex-1">
          <p class="mt-2 text-xl font-bold tracking-tight text-black-600 text-center lg:text-2xl xl:text-3xl">
            <ContentSlot :use="$slots.title" />
          </p>
          <p class="mx-auto mt-5 max-w-prose text-base text-gray-500 lg:text-lg xl:text-xl"><ContentSlot :use="$slots.description" /></p>
        </div>
      </div>
    </div>
  </div>
</template>
