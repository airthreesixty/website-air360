<template>
  <section class="container pt-20 md:pt-16">
    <h2
      class="mb-2 title2 text-black-600 text-center"
    >
      <ContentSlot :use="$slots.mainTitle" unwrap="p" />
    </h2>
    <slot name="descriptions" />
  </section>
</template>
