<template>
  <section class="bg-white mx-auto py-10">
    <div class="container">
      <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-center mt-8 lg:mt-10">
        Content Gallery
      </h1>
      <div class="py-8  mx-auto lg:py-16">
        <div class="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <GalleryCard title="Why you need a UX analytics tool & how to get it" image-src="/en/content-gallery/air360-ebook-3-cover.webp" slug="/air360-ebook-3" />
          <GalleryCard
            title="Why Google Analytics is not enough to grow your brand"
            image-src="/en/content-gallery/why-ga-is-not-enought.jpg"
            slug="/air360-ebook-2"
          />
          <GalleryCard title="Five conversion blockers and how to fix them" image-src="/en/content-gallery/five-conversion-blockers.webp" slug="/air360-ebook-1" />
          <GalleryCard title="Conversion rate mysteries" image-src="/en/content-gallery/air360-cr-mysteries.jpg" slug="/mystery-case" />
          <GalleryCard title="Conversion rate mysteries Ⅱ" image-src="/en/content-gallery/mystery-case2.png" slug="/mystery-case2" />
          <GalleryCard title="The Power of a Smooth and Frictionless Checkout Experience in CRO" image-src="/en/promotion/checklist.png" slug="/cro-checklist-campaign" />
          <GalleryCard title="Boost your conversions, Elevate your eCommerce" image-src="/en/promotion/roadmapHeroPoster.png" slug="/cro-roadmap-campaign" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const { t } = useI18n()

const title = t('content-gallery.title')
const description = t('content-gallery.description')

const ogImage = computed(() => {
  if (locale.value === 'en') {
    return `${runtimeConfig.public.baseUrl}/five-conversion-blockers.webp`
  }
  return `${runtimeConfig.public.baseUrl}/five-conversion-blockers.webp`
})

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  ogImage: ogImage.value,
  twitterCard: 'summary_large_image',
  ogUrl: `${runtimeConfig.public.baseUrl}${route.fullPath}`,
})
</script>

<style lang="postcss">
.border-deco-gallery {
  @apply after:(content-[''] block w-25 h-[5px] bg-[#E74B91] rounded-[7px] static my-5);
}

.card:hover img {
  transform: scale(0.95);
  transition-duration: 300ms;
}
</style>
