<template>
  <section class="bg-white container py-8">
    <div class="px-4 py-8 rounded-5xl mx-auto max-w-screen-xl text-center md:py-16 lg:px-6">
      <div class="mx-auto mb-8 lg:mb-8 max-w-screen-sm">
        <h2 class="mb-4 title2 text-black-600">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="grid gap-6 -mt-10 md:grid-cols-2 lg:grid-cols-4">
        <slot name="block" />
      </div>
    </div>
  </section>
</template>
