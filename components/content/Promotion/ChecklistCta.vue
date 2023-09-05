<template>
  <section class="bg-white container my-18">
    <div class="shadow-primary px-4 rounded-lg py-10 md:(grid grid-cols-3 items-center) xl:(flex justify-between)">
      <h2 class="title2 mb-8 md:(mb-0 col-span-2)">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="justify-self-end">
        <a href="#" class="bg-primary-600 w-full text-white px-6 py-3 rounded-lg font-bold"><ContentSlot :use="$slots.cta" unwrap="p" /></a>
      </div>
    </div>
  </section>
</template>
