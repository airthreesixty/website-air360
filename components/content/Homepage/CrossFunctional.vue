<template>
  <section class="bg-white py-11 lg:pb-14">
    <div class="container">
      <h2 class="title2 text-gradient mb-8 md:mb-16 text-center">
        <ContentSlot :use="$slots.mainTitle" unwrap="p" />
      </h2>
      <div class="flex flex-col gap-y-5 md:(flex-row justify-center gap-x-10)">
        <slot name="blocks" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gradient {
   background: linear-gradient(126deg, rgba(45,146,233,1) 0%, rgba(100,74,213,1) 20%, rgba(193,65,172,1) 40%, rgba(231,33,146,1) 60%, rgba(240,77,102,1) 80%, rgba(253,112,67,1) 100%);
   color: transparent;
   background-clip: text;
}
</style>
