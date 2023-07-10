<template>
  <section class="bg-white container">
    <div class="bg-gray-50 rounded-3xl px-4 text-center py-8 lg:py-15">
      <h2 class="mb-4 title2 font-bold">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="mt-8 lg:mt-16 mb-8 space-y-14 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div class="flex flex-col justify-between">
          <div>
            <div class="inline-flex justify-center items-center mb-6 w-24 h-24 rounded-lg bg-primary-100">
              <fa-icon class="fa-3x text-primary-600" :icon="['far', icon1]" />
            </div>
            <h3 class="mb-4 title3 font-bold">
              <ContentSlot :use="$slots.title1" unwrap="p" />
            </h3>
            <p class="mb-8 textp">
              <ContentSlot :use="$slots.desc1" unwrap="p" />
            </p>
          </div>
          <a :href="id1" class="text-primary-600 font-bold">More<fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" /></a>
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <div class="inline-flex justify-center items-center mb-6 w-24 h-24 bg-blue-100 rounded-lg">
              <fa-icon class="fa-3x text-blue-400" :icon="['far', icon2]" />
            </div>
            <h3 class="mb-4 title3 font-bold">
              <ContentSlot :use="$slots.title2" unwrap="p" />
            </h3>
            <p class="mb-8 textp">
              <ContentSlot :use="$slots.desc2" unwrap="p" />
            </p>
          </div>
          <a :href="id2" class="text-blue-400 font-bold">More<fa-icon class="fa-sm pl-1" :icon="['fas', 'chevron-right']" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  icon1: string
  icon2: string
  id1: string
  id2: string
}

defineProps<Props>()
</script>
