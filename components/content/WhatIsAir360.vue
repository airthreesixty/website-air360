<template>
  <section class="bg-white py-6 lg:py-10">
    <div class="mx-auto max-w-screen-[1400px] px-4 text-center lg:px-8">
      <div>
        <!-- <h2 class="text-md font-semibold text-primary-600 lg:text-xl">次世代型UXアナリティクスツール</h2> -->
        <h2 class="mt-2 text-2xl font-semibold text-black-600 md:text-3xl lg:text-4xl">
          <ContentSlot :use="$slots.title" />
        </h2>
        <p class="mx-auto mt-5 max-w-prose text-md text-gray-500 lg:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" />
        </p>
      </div>
      <div class="mt-12">
        <img class="mx-auto rounded-lg shadow-md ring-1 ring-black ring-opacity-5 md:w-7/12" src="/WhatIsAir360.jpeg" :alt="$t('what-is-air360')" loading="lazy">
      </div>
    </div>
  </section>
</template>
