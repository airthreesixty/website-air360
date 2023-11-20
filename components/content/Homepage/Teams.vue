<template>
  <section class="bg-white py-8">
    <div class="container mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 lg:mb-16 max-w-screen-sm">
        <h2 class="mb-4 title2">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="textp">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </div>
      <div class="grid gap-6 -mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <slot name="block" />
      </div>
    </div>
  </section>
</template>
