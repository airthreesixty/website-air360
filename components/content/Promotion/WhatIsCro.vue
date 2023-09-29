<template>
  <section class="bg-white container pb-8 sm:pb-16">
    <div class="text-center">
      <h2 class="title2 mb-4">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="prose textp max-w-[850px] mx-auto">
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
  </section>
</template>
