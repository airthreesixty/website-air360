<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="mockup"
        />
      </div>
      <div class="mr-auto place-self-center lg:col-span-7">
        <p
          class="max-w-2xl mb-4 tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          <ContentSlot :use="$slots.title" />
        </p>
        <h2
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.subtitle" />
        </h2>

        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" />
        </p>
      </div>
    </div>
  </section>
</template>
