<template>
  <div class="container pt-10 md:pb-10 lg:pt-14">
    <div class="md:(grid grid-cols-2)">
      <div class="">
        <span class="font-bold text-primary-600 text-base"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
        <h1 class="title1 my-5 font-bold text-black-600">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="text-gray-500 lg:text-lg xl:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="max-w-[500px] mx-auto">
        <nuxt-img format="webp" src="/security/heroImage.png" class="" loading="lazy" sizes="xl:1390px lg:1034px md:754px sm:1184px xs:277px" />
      </div>
    </div>
  </div>
</template>
