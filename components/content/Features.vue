<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Secure platform, secure data
        </h2>
        <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-8 md:space-y-0"
      >
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <svg
              class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            <ContentSlot :use="$slots.title1" />
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.description1" />
          </p>
        </div>
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <svg
              class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            <ContentSlot :use="$slots.title2" />
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.description2" />
          </p>
        </div>
        <div class="p-6 bg-white rounded shadow dark:bg-gray-800">
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <svg
              class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            <ContentSlot :use="$slots.title3" />
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            <ContentSlot :use="$slots.description3" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
