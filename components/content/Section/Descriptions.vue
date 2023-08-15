<template>
  <section class="container">
    <h2
      class="mb-4 text-center title2"
    >
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <p v-if="$slots.description" class="text-gray-500 text-center max-w-[600px] lg:max-w-[750px] mx-auto text-md lg:text-xl xl:leading-8">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
    <slot name="content" />
  </section>
</template>
