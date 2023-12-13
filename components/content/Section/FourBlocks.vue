<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          <ContentSlot :use="$slots.desc" unwrap="p" />
        </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
        <slot name="blocks" />
      </div>
    </div>
  </section>
</template>
