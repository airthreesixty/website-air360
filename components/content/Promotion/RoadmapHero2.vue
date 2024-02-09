<template>
  <section class="bg-white py-10 lg:py-14 overflow-hidden">
    <div class="text-center container">
      <div class="rounded-lg max-w-[1050px] mx-auto p-5 lg:p-10">
        <div>
          <div class="md:text-center">
            <span class="text-primary-600 font-bold"><ContentSlot :use="$slots.subtext" unwrap="p" /></span>
            <h1 class="title1 mt-5 mb-8">
              <ContentSlot :use="$slots.title" unwrap="p" />
            </h1>
            <p class="textp">
              <ContentSlot :use="$slots.description" unwrap="p" />
            </p>
          </div>
          <div class="md:(grid grid-cols-2 items-center mt-10 gap-15)">
            <div class="relative max-w-[380px] md:max-w-[500px] mx-auto mt-10">
              <!-- <nuxt-img :src="src" class="mb-8" /> -->
              <video
                class="my-auto md:h-150 w-full rounded-lg object-cover mb-8"
                controls
                :poster="poster"
              >
                <source :data-src="videoSrc" type="video/mp4" :src="videoSrc">
              </video>
            </div>
            <Widget id="bwGd5xLq" class="h-142" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  videoSrc: string
  poster: string
}

defineProps<Props>()
</script>
