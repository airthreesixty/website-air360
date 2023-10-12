<template>
  <section class="bg-white mx-auto py-10">
    <div class="container">
      <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-center mt-8 lg:mt-10">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <div class="py-8  mx-auto lg:py-16">
        <div class="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <slot name="gallery-cards" />
        </div>
      </div>
    </div>
  </section>
</template>
