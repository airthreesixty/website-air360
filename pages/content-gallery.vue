<template>
  <div class="container my-15 mx-auto">
    <div class="">
      <h1 class="font-bold text-3xl md:text-4xl text-center mb-10">
        Content Gallery
      </h1>
      <div class="border shadow-md rounded-lg max-w-[1000px] mx-auto px-3 py-5 md:(grid grid-cols-2)">
        <div class="flex flex-col justify-center">
          <h2 class="border-deco-gallery text-xl md:text-2xl font-bold">
            Five conversion blockers and how to fix them
          </h2>
          <p class="text-gray-500 text-base lg:text-lg mb-4">
            Businesses both large and small benefit from detailed and actionable CX insights. Yet many companies are reluctant to invest, and many stakeholders may need convincing.
          </p>
          <p class="text-primary-600 mb-2">
            <span class="font-bold">More</span><fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" />
          </p>
        </div>
        <nuxt-img src="/air360-ebook-3-cover.webp" class="w-full h-60 sm:h-65 md:h-75 object-cover rounded-lg" />
      </div>
    </div>

    <section class="bg-white">
      <div class="py-8  mx-auto lg:py-16">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GalleryCard title="Hello" description="Blabla" image-src="/air360-ebook-3-cover.webp" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
.border-deco-gallery {
  @apply after:(content-[''] block w-25 h-[5px] bg-[#E74B91] rounded-[7px] static my-4);
}
</style>
