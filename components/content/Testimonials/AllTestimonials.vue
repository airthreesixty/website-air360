<template>
  <section class="bg-white hidden lg:block dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="mb-8 font-light text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
          <ContentSlot :use="$slots.desc" unwrap="p" />
        </p>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-6">
          <slot name="testimonials" />
        </div>
        <div class="space-y-6">
          <slot name="testimonials2" />
        </div>
      </div>
    </div>
  </section>
</template>
