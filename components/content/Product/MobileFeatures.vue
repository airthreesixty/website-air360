<template>
  <div class="mt-12">
    <h2 class="title2 px-6 lg:px-8">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
  </div>
</template>
