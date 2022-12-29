<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto md:gap-4 md:py-12 md:grid-cols-2 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="md:hidden lg:mt-0 lg:col-span-5">
        <img
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="mockup"
          loading="lazy"
          width="583"
          height="349"
        />
      </div>
      <div class="mr-auto place-self-center lg:col-span-7 md:flex-1">
        <p
          class="max-w-2xl my-4 text-gray-500 bg-light-100tracking-tight leading-none md:text-base xl:text-xl dark:text-white"
        >
          <ContentSlot :use="$slots.subtitle" />
        </p>
        <h2
          class="max-w-2xl mb-6 font-bold text-2xl bg-gradient-to-r from-[#6278DF] to-blue-[#3DDC97] bg-clip-text text-transparent lg:mb-8 md:text-3xl lg:text-4xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.title" />
        </h2>

        <p
          class="max-w-2xl mb-1 font-light text-gray-500 lg:mb-8 md:text-base lg:text-xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" />
        </p>
        <div class="md:flex md:items-center">
          <button
            class="text-white bg-primary-600 text-base font-bold w-full mt-5 block transition ease-in-out duration-300 hover:bg-transparent hover:bg-primary-700 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("request-demo") }}
          </button>
          <button
            class="text-white bg-blue-400 text-base font-bold w-full mt-1 block transition ease-in-out duration-300 md:mt-5 hover:bg-blue-500  font-medium rounded-lg text-sm px-6 py-3 mb-2 md:w-1/2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
          <ContentSlot :use="$slots.button1" />
          </button>
        </div>
      </div>
      <div class="hidden md:block md:flex lg:mt-0 lg:col-span-5">
        <img
          src="https://www.air360.io/wp-content/uploads/2022/08/hero-illustration.webp"
          alt="mockup"
          class="object-scale-down"
        />
      </div>
    </div>
  </section>
</template>
