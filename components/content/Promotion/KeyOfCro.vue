<template>
  <section class="bg-white pt-8 sm:(pt-16 pb-8)">
    <div class="container">
      <h2 class="title2 text-center mb-4">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="prose">
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
  </section>
</template>
