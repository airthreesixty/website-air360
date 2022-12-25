<template>
  <nav
    class="bg-white border-gray-200 border-b-1 px-2 sticky top-0 py-2.5 rounded dark:bg-gray-900"
  >
    <div class="flex flex-wrap items-center justify-between">
      <NuxtLink :to="$localePath('/')">
        <img
          src="https://www.air360.io/wp-content/uploads/2022/05/air360-logo-bk.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Air360 Logo"
        />
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="hidden w-full transition ease-in-out duration-500 lg:block lg:w-auto"
        id="navbar-default"
      >
        <ul
          class="flex flex-col p-4 mt-4 border items-center border-none lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class="py-2">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
              aria-current="page"
              >Why Air360</a
            >
          </li>
          <li class="py-2">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ $t("product") }}</a
            >
          </li>
          <li class="py-2">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ $t("inspiration") }}</a
            >
          </li>
          <li class="py-2">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ $t("pricing") }}</a
            >
          </li>
          <li class="py-2">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ $t("login") }}</a
            >
          </li>
          <li class="py-2">
            <a
              href="#"
              class="text-white bg-[#e74b91] hover:bg-[#ce3077] focus:ring-4 focus:ring-[#ce3077] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >Request a demo</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { $localePath } = useNuxtApp();
</script>
