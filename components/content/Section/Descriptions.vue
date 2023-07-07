<template>
  <section class="container">
    <h2
      class="mb-2 text-center title2"
    >
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <slot />
  </section>
</template>
