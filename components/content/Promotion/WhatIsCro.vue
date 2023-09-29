<template>
  <section class="bg-white container py-8">
    <div class="text-center">
      <h2 class="title2 mb-4">
        <ContentSlot :use="$slots.title" />
      </h2>
      <div class="prose textp">
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
  </section>
</template>
