<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="grid max-w-screen-[1400px] px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12"
    >
      <div class="md:mt-0 md:col-span-5 md:flex">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
          alt="mockup"
        />
      </div>
      <div class="mr-auto place-self-center md:col-span-7">
        <h1
          class="mb-4 text-xl tracking-tight font-semibold text-black-600 text-left md:text-2xl lg:text-3xl dark:text-white"
        >
          <ContentSlot :use="$slots.title" />
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-base lg:text-xl dark:text-gray-400"
        >
          <ContentSlot :use="$slots.description" />
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-400 transition ease-in-out duration-300 hover:bg-blue-500 dark:focus:ring-primary-900"
        >
          {{ $t("more") }}
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
