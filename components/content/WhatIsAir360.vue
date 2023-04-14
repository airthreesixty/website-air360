<template>
  <section class="bg-white pt-22">
    <div class="mx-auto max-w-screen-[1400px] px-6 text-center lg:px-8">
      <div>
        <!-- <h2 class="text-md font-semibold text-primary-600 lg:text-xl">次世代型UXアナリティクスツール</h2> -->
        <h2 class="mt-2 text-2xl font-semibold text-black-600 md:text-3xl lg:text-4xl">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="mx-auto mt-5 max-w-prose text-md text-gray-500 lg:text-xl xl:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="mt-12">
        <div class="wistia_responsive_padding mx-auto md:w-9/12 lg:w-8/12" style="padding:56.25% 0 0 0;position:relative;">
          <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
            <iframe
              src="https://fast.wistia.net/embed/iframe/uzru2drtmd?videoFoam=true"
              title="Air360 by Scalefast Creating Conversion Rate Heroes Video"
              allow="autoplay; fullscreen"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              class="wistia_embed rounded-lg"
              name="wistia_embed"
              msallowfullscreen
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
