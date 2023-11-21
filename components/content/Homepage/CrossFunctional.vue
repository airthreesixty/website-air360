<template>
  <section class="bg-gray-50 py-11 lg:pb-14">
    <div class="container">
      <h2 class="title2 mb-8 md:mb-16 text-center">
        <ContentSlot :use="$slots.mainTitle" unwrap="p" />
      </h2>
      <div class="flex flex-col gap-y-5 md:(flex-row justify-center gap-x-10)">
        <slot name="blocks" />
      </div>
    </div>
  </section>
</template>
