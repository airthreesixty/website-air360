<template>
  <section class="container pt-10 overflow-hidden">
    <div>
      <h2 class="title3 font-bold mb-5">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <p class="textp md:max-w-[650px]">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
    </div>
    <div class="relative max-w-[400px] lg:max-w-[500px] mx-auto">
      <nuxt-img src="/promotion/1.png" />
      <div class="absolute top-18 -left-3 md:-left-28 lg:-left-31 text-xs md:text-sm lg:text-base max-w-[120px] text-black-600">
        <div class="bg-white w-40 md:w-60 lg:w-75 p-4 md:p-6 shadow-gray rounded-full">
          <p><ContentSlot :use="$slots.text1" unwrap="p" /></p>
          <p>
            <ContentSlot :use="$slots.text2" unwrap="p" />
          </p>
        </div>
      </div>
      <div class="absolute top-[55%] right-5 lg:right-10 text-xs md:text-sm lg:text-base max-w-[110px] text-black-600">
        <div class="bg-white w-40 md:w-60 lg:w-75 p-4 md:p-6 shadow-gray rounded-full">
          <p>
            <ContentSlot :use="$slots.text3" unwrap="p" />
          </p>
        </div>
      </div>
      <BlobLightPink class="absolute top-0 -right-21 lg:-right-60 -z-1 overflow-hidden" />
      <BlobLightBlue class="absolute top-28 -left-21 lg:-left-50 -z-1" />
    </div>
  </section>
</template>
