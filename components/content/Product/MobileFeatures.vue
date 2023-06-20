<template>
  <div class="mt-12 container">
    <h2 class="title2">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
  </div>
</template>
