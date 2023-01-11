<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="pb-16 lg:pb-20 mx-auto max-w-screen-[1400px] px-4">
      <h2
        class="mb-10 text-black-600 lg:mb-16 lg:text-2xl text-xl font-bold tracking-tight leading-tight text-center dark:text-white md:text-2xl"
      >
        <ContentSlot :use="$slots.title" />
      </h2>
      <div
        class="grid grid-cols-2 gap-12 text-gray-500 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
      >
        <div class="flex justify-center items-center">
          <img
            class="h-6 lg:h-7 xl:h-8 dark:hover:text-white"
            src="https://www.air360.io/wp-content/uploads/2022/05/Club_Med_Logo_Black-1.png"
            alt=""
          >
        </div>
        <div class="flex justify-center items-center">
          <img
            class="h-6 lg:h-7 xl:h-8 dark:hover:text-white"
            src="https://www.air360.io/wp-content/uploads/2022/05/Copy-of-logo_aristocrazy-1.png"
            alt=""
          >
        </div>
        <div class="flex justify-center items-center">
          <img
            class="h-6 lg:h-7 xl:h-8 dark:hover:text-white"
            src="https://www.air360.io/wp-content/uploads/2022/05/olympique-1.png"
            alt=""
          >
        </div>

        <div class="flex justify-center items-center">
          <img
            class="h-6 lg:h-7 xl:h-8 dark:hover:text-white"
            src="https://www.air360.io/wp-content/uploads/2022/05/Copy-of-MaisonM.png"
            alt=""
          >
        </div>
        <div class="flex justify-center items-center">
          <img
            class="h-6 lg:h-7 xl:h-8 dark:hover:text-white"
            src="https://www.air360.io/wp-content/uploads/2022/05/logo_qoqa-black-1.png"
            alt=""
          >
        </div>
        <div class="flex justify-center items-center">
          <img
            class="h-6 lg:h-7 xl:h-8 dark:hover:text-white"
            src="https://www.air360.io/wp-content/uploads/2022/05/suarez_relojeria-1-1.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>
