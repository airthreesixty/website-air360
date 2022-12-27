<template>
  <section
    class="bg-[#6677D8] block pt-[70px] mt-[-70px] dark:bg-gray-900"
    id="intuitive-section"
  >
    <div class="flex flex-col max-w-screen-xl px-4 py-10 mx-auto md:flex-row">
      <div
        class="hidden h-full lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex flex-1"
      >
        <img src="/intuitive.png" alt="phone illustration" loading="lazy" />
      </div>
      <div id="accordion-collapse" data-accordion="collapse" class="flex-1">
        <h2 class="text-white text-3xl font-extrabold pb-3">
          <ContentSlot :use="$slots.intuitive" />
        </h2>
        <h2 id="accordion-collapse-heading-7">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-white focus:text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-7"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-7"
          >
            <span class="flex items-center"
              ><svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <ContentSlot :use="$slots.title1"
            /></span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-7"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-7"
        >
          <div
            class="px-5 pb-2 text-white font-light dark:border-gray-700 dark:bg-gray-900"
          >
            <p class="mb-2 text-white dark:text-gray-400">
              <ContentSlot :use="$slots.description1" />
            </p>
            <p class="text-white dark:text-gray-400">
              <ContentSlot :use="$slots.description1_2" />
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-8">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-white focus:text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-8"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-8"
          >
            <span class="flex items-center"
              ><svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <ContentSlot :use="$slots.title2"
            /></span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-8"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-8"
        >
          <div class="px-5 pb-2 font-light dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.description2" />
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.description2_2" />
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-9">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-white focus:text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-9"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-9"
          >
            <span class="flex items-center"
              ><svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <ContentSlot :use="$slots.title3"
            /></span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-9"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-9"
        >
          <div class="px-5 pb-2 font-light dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.description3" />
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.description3_1" />
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-10">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-white focus:text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-10"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-10"
          >
            <span class="flex items-center"
              ><svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <ContentSlot :use="$slots.title4"
            /></span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-10"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-10"
        >
          <div class="px-5 pb-2 font-light dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.description4" />
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              <ContentSlot :use="$slots.description4_2" />
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-11">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-white focus:text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-11"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-11"
          >
            <span class="flex items-center"
              ><svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <ContentSlot :use="$slots.title5"
            /></span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-11"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-11"
        >
          <div class="px-5 pb-2 font-light text-white dark:border-gray-700">
            <p class="mb-2 text-white dark:text-gray-400">
              <ContentSlot :use="$slots.description5" />
            </p>
            <p class="mb-2 text-white dark:text-gray-400">
              <ContentSlot :use="$slots.description5_2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
