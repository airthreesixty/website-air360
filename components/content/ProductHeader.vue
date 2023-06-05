<template>
  <div class="bg-white">
    <div class="container py-15">
      <div class="text-center">
        <p class="text-lg font-semibold text-primary-600 md:text-xl">
          <ContentSlot :use="$slots.subtext" unwrap="p" />
        </p>
        <h1
          class="mt-1 text-4xl font-semibold text-black-600 tracking-tight md:text-5xl lg:text-6xl"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <h2 class="mx-auto mt-5 max-w-xl text-gray-500 md:text-lg lg:text-xl lg:leading-8">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </h2>
      </div>
    </div>
  </div>
</template>
