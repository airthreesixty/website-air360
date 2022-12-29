<template>
  <footer class="p-5 border-gray-200 border-t-1 sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="https://www.air360.io/" class="flex items-center">
          <img
            src="https://www.air360.io/wp-content/uploads/2022/05/air360-logo-bk.svg"
            class="mr-3 h-8"
            alt="Air360 Logo"
          />
        </a>
        <div class="flex my-6 space-x-6 sm:justify-start md:mt-4 lg:mt-6">
          <a
            href="#"
            class="text-blue-400 transition ease-in-out duration-300 hover:text-blue-500 dark:hover:text-white"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'linkedin']" />
            <span class="sr-only">LinkedIn page</span>
          </a>
          <a
            href="#"
            class="text-blue-400 transition ease-in-out duration-300 hover:text-blue-500 dark:hover:text-white"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'twitter']" />
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-blue-400 transition ease-in-out duration-300 hover:text-blue-500 dark:hover:text-white"
          >
            <fa-icon class="fa-xl" :icon="['fab', 'instagram']" />
            <span class="sr-only">Instagram page</span>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            {{ $t("company") }}
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://flowbite.com/" class="hover:underline">ESW</a>
            </li>
            <li class="mb-4">
              <a href="https://tailwindcss.com/" class="hover:underline">{{
                $t("careers")
              }}</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline">{{
                $t("privacy-policy")
              }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            {{ $t("inspiration") }}
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                class="hover:underline"
                >{{ $t("blog") }}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            {{ $t("help") }}
          </h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">{{ $t("request-demo") }}</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">{{ $t("contact-us") }}</a>
            </li>
            <li>
              <a href="#" class="hover:underline">{{ $t("login") }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
