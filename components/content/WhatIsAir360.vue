<template>
  <div class="overflow-hidden bg-white py-6 lg:py-10">
    <div class="mx-auto max-w-screen-[1400px] px-4 text-center lg:px-8">
      <div>
        <!-- <h2 class="text-md font-semibold text-primary-600 lg:text-xl">次世代型UXアナリティクスツール</h2> -->
        <h2 class="mt-2 text-2xl font-semibold text-black-600 md:text-3xl lg:text-4xl">
          <ContentSlot :use="$slots.title" />
        </h2>
        <p class="mx-auto mt-5 max-w-prose text-md text-gray-500 lg:text-xl">
          <ContentSlot :use="$slots.description" />
        </p>
      </div>
      <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
        <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg" alt="">
      </div>
    </div>
  </div>

  <!-- <SingleDescription image-path="/boostConversion.png" button-status="hidden">
    <template #subtext>
      <ContentSlot :use="$slots.subtext" />
    </template>
    <template #title>
      <ContentSlot :use="$slots.title" />
    </template>
    <template #description>
      <ContentSlot :use="$slots.description" />
    </template>
  </SingleDescription> -->
</template>
