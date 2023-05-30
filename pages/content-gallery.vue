<template>
  <div class="container mt-15 mx-auto">
    <div class="mb-5">
      <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10">
        Content Gallery
      </h1>
      <div class="border shadow-md rounded-lg mx-auto px-3 lg:px-4 py-5 md:(grid grid-cols-2 gap-10)">
        <div class="flex flex-col justify-center">
          <h2 class="border-deco-gallery text-2xl md:text-3xl font-bold">
            The eCommerce experience analytics solution that will help you simplify your Google Analytics 4 migration
          </h2>
          <p class="text-gray-500 text-base lg:text-lg mb-4">
            If you are here, it is because you are feeling under pressure with the sunset of Universal Analytics in July 2023.
            This Google Analytics 4 migration might be overwhelming, but Air360 can help.
            Watch our quick video that explains how you can solve your challenges in this migration.
          </p>
          <nuxt-link class="text-primary-600 mb-4" :to="$localePath('/ga4-migration')">
            <span class="font-bold">More</span><fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" />
          </nuxt-link>
        </div>
        <nuxt-img src="/en/ga4-migration.webp" class="w-full object-cover rounded-lg" />
      </div>
    </div>

    <section class="bg-white">
      <div class="py-8  mx-auto lg:py-16">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GalleryCard title="Why you need a UX analytics tool & how to get it" image-src="/air360-ebook-3-cover.webp" slug="/air360-ebook-3" />
          <GalleryCard
            title="Why Google Analytics is not enough to grow your brand"
            image-src="/why-ga-is-not-enought.jpg"
            slug="/air360-ebook-2"
          />
          <GalleryCard title="Five conversion blockers and how to fix them" image-src="/five-conversion-blockers.webp" slug="/air360-ebook-1" />

          <GalleryCard title="Conversion rate mysteries" image-src="/air360-cr-mysteries.jpg" slug="/mystery-case" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { $localePath } = useNuxtApp()
</script>

<style lang="postcss">
.border-deco-gallery {
  @apply after:(content-[''] block w-25 h-[5px] bg-[#E74B91] rounded-[7px] static my-4);
}
</style>
