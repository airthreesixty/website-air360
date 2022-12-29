<template>
  <section class="bg-white py-2 dark:bg-gray-900">
    <div class="pt-6 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div
        class="gap-16 flex-col justify-between items-center p-6 bg-white rounded-lg dark:bg-gray-800 md:p-6 lg:flex lg:gap-8"
      >
        <h2
          class="w-full text-center mb-10 text-2xl tracking-tight font-bold text-black-600 lg:text-3xl lg:mb-2"
        >
          <ContentSlot :use="$slots.title" />
        </h2>

        <div class="mt-6 w-full lg:mt-0">
          <div class="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
            <div class="w-full text-center">
              <button
                class="text-white bg-primary-600 text-base font-bold transition ease-in-out duration-300 hover:bg-primary-700 font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <ContentSlot :use="$slots.action" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
